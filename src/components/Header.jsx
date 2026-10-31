function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="page-shell flex h-[72px] items-center justify-between px-6 md:h-[108px] md:px-14">
        <a href="#overview" className="font-display text-sm font-medium tracking-[0.16em] sm:tracking-[0.22em] md:text-base">
          JCREATV
        </a>
        <nav className="flex items-center gap-4 font-display text-[11px] font-medium tracking-[0.12em] sm:gap-8 sm:text-xs sm:tracking-[0.16em] md:gap-14 md:text-sm">
          <a href="#contact" className="transition-colors hover:bg-[#ffb703] hover:text-black">CONTACT</a>
          <a href="#/career" className="transition-colors hover:bg-[#fb8500] hover:text-black">CAREER</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
