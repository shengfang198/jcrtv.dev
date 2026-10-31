import React, { useEffect, useState } from 'react';

const DEFAULT_BRIGHTNESS = 0;
const MIN_BRIGHTNESS = 0;
const MAX_BRIGHTNESS = 140;

function mixTowardWhite(hex, amount) {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  const channel = (value) => Math.round(value + (255 - value) * amount);
  return `rgb(${channel(r)} ${channel(g)} ${channel(b)})`;
}

function applyLightBrightness(value) {
  const t = Math.min(MAX_BRIGHTNESS, Math.max(MIN_BRIGHTNESS, value)) / MAX_BRIGHTNESS;
  const root = document.documentElement;
  root.style.setProperty('--light-brightness', String(t));
  root.style.setProperty('--background', mixTowardWhite('#e8eef6', t));
  root.style.setProperty('--light-surface', '#ffffff');
  root.style.setProperty('--light-muted', mixTowardWhite('#f4f6f8', t));
  root.style.setProperty('--card', '#ffffff');
  root.style.setProperty('--input', '#ffffff');
  root.style.setProperty('--muted', mixTowardWhite('#f4f6f8', t));
}

function clearLightBrightness() {
  const root = document.documentElement;
  root.style.removeProperty('--light-brightness');
  root.style.removeProperty('--background');
  root.style.removeProperty('--light-surface');
  root.style.removeProperty('--light-muted');
  root.style.removeProperty('--card');
  root.style.removeProperty('--input');
  root.style.removeProperty('--muted');
}

function Footer() {
  const [isLight, setIsLight] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('theme-light')
  );
  const [brightness, setBrightness] = useState(() => {
    const savedRaw = localStorage.getItem('lightBrightness');
    const saved = Number(savedRaw);
    if (savedRaw === null || savedRaw === '' || !Number.isFinite(saved)) {
      return DEFAULT_BRIGHTNESS;
    }
    return Math.min(MAX_BRIGHTNESS, Math.max(MIN_BRIGHTNESS, saved));
  });

  useEffect(() => {
    const syncTheme = () => {
      setIsLight(document.documentElement.classList.contains('theme-light'));
    };
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLight) {
      applyLightBrightness(brightness);
    } else {
      clearLightBrightness();
    }
  }, [isLight, brightness]);

  useEffect(() => {
    const scrollTopButton = document.getElementById('scrollToTop');
    if (!scrollTopButton) return undefined;

    const onScroll = () => {
      if (window.pageYOffset > 100) {
        scrollTopButton.classList.add('visible');
      } else {
        scrollTopButton.classList.remove('visible');
      }
    };

    const onClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', onScroll);
    scrollTopButton.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      scrollTopButton.removeEventListener('click', onClick);
    };
  }, []);

  const onBrightnessChange = (event) => {
    const value = Number(event.target.value);
    setBrightness(value);
    localStorage.setItem('lightBrightness', String(value));
  };

  return (
    <>
      <footer id="footer" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <div className="footer-brand text-2xl font-bold mb-4 text-white">
                Jay Creative
              </div>
            </div>

            <div className="flex flex-row gap-10 sm:gap-16">
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-neutral-400 font-medium">UI/UX Design</span></li>
                  <li><span className="text-neutral-400 font-medium">Full-Stack Development</span></li>
                  <li><span className="text-neutral-400 font-medium">Shopify Development</span></li>
                  <li><span className="text-neutral-400 font-medium">SaaS Development</span></li>
                  <li><span className="text-neutral-400 font-medium">Graphic Design / Product Design</span></li>
                  <li><span className="text-neutral-400 font-medium">3D Visualization</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-neutral-400 font-medium">Manila, PH</li>
                  <li className="text-neutral-400 font-medium">lharc3395@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 font-medium text-sm">&copy; 2024 Jay Creative. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/shengfang198" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/corales-edgar-jr-506324247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="site-side-overlay fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
        {isLight && (
          <div className="brightness-control" title="Light mode brightness">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <div className="brightness-slider-wrap">
              <input
                type="range"
                className="brightness-slider"
                min={MIN_BRIGHTNESS}
                max={MAX_BRIGHTNESS}
                step="1"
                value={brightness}
                onChange={onBrightnessChange}
                aria-label="Light mode brightness"
              />
            </div>
            <span className="brightness-control-value">{brightness}%</span>
          </div>
        )}
        <button
          id="scrollToTop"
          className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible translate-y-4 hover:scale-110 border border-white/20 backdrop-blur-sm outline-none focus:outline-none focus-visible:outline-none active:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7M5 18l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Footer;
