import React, { useEffect, useState } from 'react';

function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const preferredLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = storedTheme || (preferredLight ? 'light' : 'dark');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('theme-light', initialTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('theme-light', nextTheme === 'light');
  };

  return (
    <>
      <div className="fixed top-4 md:top-[30px] left-0 right-0 flex justify-center z-50 px-2">
      <nav className="site-header-nav grid grid-cols-3 items-center bg-[#0C0D0F] w-full h-14 md:h-16 max-w-5xl border border-white/5 rounded-full px-3 md:px-8 py-2 md:py-3 shadow-2xl">

        <div className="flex items-center justify-start">
          <span className="text-base md:text-lg font-bold tracking-tight text-white">jcrtv<span className="site-header-brand-muted hidden sm:inline text-white/40">.dev</span></span>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6 text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
          <a href="#" className="site-header-link text-white hover:text-indigo-400 transition-colors scroll-smooth">Overview</a>
          <a href="#about" className="site-header-link text-white hover:text-indigo-400 transition-colors scroll-smooth">Profile</a>
          <a href="#skills" className="site-header-link text-white hover:text-indigo-400 transition-colors scroll-smooth">Expertise</a>
          <a href="#projects" className="site-header-link hidden sm:inline text-white hover:text-indigo-400 transition-colors scroll-smooth">Projects</a>
          <a href="#resume" className="site-header-link hidden md:inline text-white hover:text-indigo-400 transition-colors scroll-smooth px-2 py-1">Career</a>
        </div>

        <div className="flex items-center justify-end gap-2 text-sm font-medium">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition-colors hover:bg-white/10"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a7 7 0 1 0 9 9 9 9 0 1 1-9-9"></path>
              </svg>
            )}
          </button>
          <a href="#footer" className="site-header-contact-btn hover:bg-white/10 focus:bg-blue-100 focus:text-blue-900 focus:outline-none transition-all flex text-sm font-medium text-neutral-200 bg-gradient-to-b from-white/30 via-white/0 to-white/10 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset] gap-x-2 gap-y-2 items-center scroll-smooth" style={{ position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px' }}>
            <span className="hidden md:inline text-xs font-semibold tracking-tight">Contact me</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
