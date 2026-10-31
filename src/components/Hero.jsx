import { profile } from '../data/site.js'

function Hero() {
  return (
    <section id="overview" className="page-shell px-6 pb-8 pt-14 md:px-14 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <h1 className="font-display text-[clamp(3.15rem,12vw,8.4rem)] font-black leading-[0.82] tracking-[-0.04em]">
          <span className="block">JCREAT</span>
          <span className="mt-1 flex items-center gap-5 md:gap-8">
            <span>DEV</span>
            <span className="font-sans text-xs font-semibold leading-tight tracking-[0.16em] md:text-sm">
              DEVELOPER /
              <br />
              DESIGNER
            </span>
          </span>
        </h1>

        <div className="max-w-xl lg:ml-auto lg:pb-2">
          <p className="text-sm leading-relaxed md:text-[15px]">{profile.bio}</p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-4">
            <a href={`mailto:${profile.email}`} className="font-display text-sm font-medium">
              {profile.email}
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              VIEW CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
