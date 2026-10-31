import { skills, technologies } from '../data/site.js'

function ExpertisePage() {
  return (
    <article className="page-shell px-6 py-14 md:px-14 md:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">TECH STACK</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.85] tracking-[-0.04em]">
        EXPERTISE
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed md:text-base">
        Tools and skills used across design, frontend, backend, and 3D work.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-center border border-neutral-200 bg-white px-4 py-8">
            <img src={tech.src} alt="" className="h-16 w-16 object-contain brightness-0" />
            <p className="mt-4 text-center text-xs font-semibold tracking-[0.14em]">{tech.name.toUpperCase()}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm font-semibold">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-neutral-200">
              <div className="h-full bg-[#ff6608]" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ExpertisePage
