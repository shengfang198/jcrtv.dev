import React from 'react';

function Header() {
  return (
    <>
      <div className="fixed left-1/2 transform -translate-x-1/2 z-50" style={{top: '30px'}}>
      <nav className="grid grid-cols-3 items-center bg-[#0C0D0F] w-full h-16 max-w-5xl border border-white/5 rounded-full px-8 py-3 shadow-2xl">

        <div className="flex items-center justify-start">
          <span className="text-lg font-bold tracking-tight text-white">jcrtv<span className="text-white/40">.dev</span></span>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm font-medium">
          <a href="#" className="text-white hover:text-indigo-400 transition-colors scroll-smooth">Overview</a>
          <a href="#about" className="text-white hover:text-indigo-400 transition-colors scroll-smooth">Profile</a>
          <a href="#skills" className="text-white hover:text-indigo-400 transition-colors scroll-smooth">Expertise</a>
          <a href="#projects" className="text-white hover:text-indigo-400 transition-colors scroll-smooth">Projects</a>
          <a href="#resume" className="text-white hover:text-indigo-400 transition-colors scroll-smooth px-2 py-1">Career</a>
        </div>

        <div className="flex items-center justify-end gap-3 text-sm font-medium">
          <a href="#footer" className="hover:bg-white/10 focus:bg-blue-100 focus:text-blue-900 focus:outline-none transition-all flex text-sm font-medium text-neutral-200 bg-gradient-to-b from-white/30 via-white/0 to-white/10 rounded-full px-4 py-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset] gap-x-2 gap-y-2 items-center scroll-smooth" style={{ position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px' }}>
            <span className="text-xs font-semibold tracking-tight">Contact me</span>
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
