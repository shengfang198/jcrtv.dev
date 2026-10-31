import { skills, technologies } from '../data/site.js'
import { expertisePositioning, expertiseProfile, expertiseSections, expertiseStacks } from '../data/expertise.js'

function SectionCard({ section }) {
  return (
    <article className="border border-neutral-200 p-6 md:p-8">
      <h3 className="text-sm font-semibold tracking-[0.14em]">{section.title.toUpperCase()}</h3>
      {section.rows && (
        <dl className="mt-5 space-y-3 text-sm">
          {section.rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
              <dt className="text-neutral-500">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {section.groups && (
        <div className="mt-5 space-y-5">
          {section.groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500">{group.label.toUpperCase()}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {section.items && (
        <ul className="mt-5 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.notes && (
        <ul className="mt-5 space-y-1 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
          {section.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

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

      <div className="mt-20 border-t border-neutral-200 pt-14">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">STACKS AND SKILLS</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
          {expertiseProfile.roles}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed">{expertiseProfile.experience}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {expertiseStacks.map((stack) => (
          <article key={stack.title} className="border border-neutral-200 p-5">
            <h3 className="text-xs font-semibold tracking-[0.16em]">{stack.title.toUpperCase()}</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {stack.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {expertiseSections.map((section) => (
          <SectionCard key={section.title} section={section} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {expertisePositioning.map(([title, text]) => (
          <article key={title} className="border border-neutral-200 p-6">
            <h3 className="text-sm font-semibold tracking-[0.14em]">{title.toUpperCase()}</h3>
            <p className="mt-3 text-sm leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </article>
  )
}

export default ExpertisePage
