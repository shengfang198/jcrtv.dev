import React, { useEffect, useState } from 'react';

const DEFAULT_BRIGHTNESS = 100;
const MIN_BRIGHTNESS = 60;
const MAX_BRIGHTNESS = 140;

function mixHex(hex, factor) {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  const adj = (channel) => Math.round(Math.min(255, Math.max(0, channel * factor)));
  return `rgb(${adj(r)} ${adj(g)} ${adj(b)})`;
}

function applyLightBrightness(value) {
  const factor = value / 100;
  // Content follows the slider with a softer shift so cards stay readable.
  const contentFactor = 1 + (factor - 1) * 0.35;
  const root = document.documentElement;
  root.style.setProperty('--light-brightness', String(factor));
  root.style.setProperty('--background', mixHex('#e4e9f2', factor));
  root.style.setProperty('--light-surface', mixHex('#ffffff', contentFactor));
  root.style.setProperty('--light-muted', mixHex('#f3f4f6', contentFactor));
  root.style.setProperty('--card', mixHex('#ffffff', contentFactor));
  root.style.setProperty('--input', mixHex('#ffffff', contentFactor));
  root.style.setProperty('--muted', mixHex('#f3f4f6', contentFactor));
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
    const saved = Number(localStorage.getItem('lightBrightness'));
    if (!Number.isFinite(saved)) return DEFAULT_BRIGHTNESS;
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="footer-brand text-2xl font-bold mb-4">
                Jay Creative
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-neutral-400 font-medium">UI/UX Design</span></li>
                <li><span className="text-neutral-400 font-medium">Web Development</span></li>
                <li><span className="text-neutral-400 font-medium">3D Modeling</span></li>
                <li><span className="text-neutral-400 font-medium">Shopify 2.0 Liquid</span></li>
                <li><span className="text-neutral-400 font-medium">Product Design</span></li>
                <li><span className="text-neutral-400 font-medium">SaaS</span></li>
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

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 font-medium text-sm">&copy; 2024 Jay Creative. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/shengfang198" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/corales-edgar-jr-506324247/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
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
          className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible translate-y-4 hover:scale-110 border border-white/20 backdrop-blur-sm"
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
