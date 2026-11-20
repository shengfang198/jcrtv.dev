function ZoomImage({ src, alt, className, imgRef, onLoad, onError }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${alt} in a new tab`}
      className="block h-full w-full cursor-zoom-in"
    >
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={onLoad}
        onError={onError}
        className={className}
      />
    </a>
  )
}

export default ZoomImage
