from io import BytesIO
from pathlib import Path

from PIL import Image

Image.MAX_IMAGE_PIXELS = None

TARGET = 2 * 1000 * 1000
MAX_EDGE = 2560
ROOT = Path(r"C:\Users\Baby\Desktop\desktop-backup-files\projects\portfolio\public\FIGMA")
FILES = [
    ROOT / "prototype.png",
    ROOT / "VEprototype.png",
    ROOT / "ninelives-prototype.png",
]


def png_bytes(image):
    buf = BytesIO()
    image.save(buf, format="PNG", optimize=True, compress_level=9)
    return buf.getvalue()


def downscale(image, max_edge=MAX_EDGE):
    w, h = image.size
    longest = max(w, h)
    if longest <= max_edge:
        return image
    scale = max_edge / longest
    return image.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)


def quantized(image, colors):
    rgb = Image.new("RGB", image.size, (255, 255, 255))
    src = image.convert("RGBA")
    rgb.paste(src, mask=src.split()[-1])
    return rgb.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)


def fit_image(image):
    image = downscale(image)
    candidates = [
        quantized(image, 256),
        quantized(image, 128),
    ]
    for candidate in candidates:
        data = png_bytes(candidate)
        if len(data) <= TARGET:
            return data, candidate.size

    source = quantized(image, 128)
    lo, hi = 0.2, 1.0
    best = png_bytes(source.resize(
        (max(1, int(image.width * 0.2)), max(1, int(image.height * 0.2))),
        Image.Resampling.LANCZOS,
    ))
    best_size = (max(1, int(image.width * 0.2)), max(1, int(image.height * 0.2)))

    for _ in range(12):
        scale = (lo + hi) / 2
        w = max(1, int(image.width * scale))
        h = max(1, int(image.height * scale))
        data = png_bytes(source.resize((w, h), Image.Resampling.LANCZOS))
        if len(data) <= TARGET:
            best = data
            best_size = (w, h)
            lo = scale
        else:
            hi = scale
    return best, best_size


def main():
    for path in FILES:
        original = Image.open(path)
        print(f"before {path.name}: {path.stat().st_size} bytes, {original.size}, {original.mode}")
        data, size = fit_image(original)
        path.write_bytes(data)
        print(f"after  {path.name}: {len(data)} bytes, {size}")


if __name__ == "__main__":
    main()
