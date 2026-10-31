import { education, experience, profile } from '../data/site.js'

function CareerPage() {
  return (
    <article className="page-shell px-6 py-14 md:px-14 md:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">EXPERIENCE</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.85] tracking-[-0.04em]">
        CAREER
      </h1>
      <p className="mt-3 text-lg">and Education</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {experience.map((job) => (
          <article key={job.role} className="border border-neutral-200 p-6 md:p-8">
            <h2 className="text-lg font-semibold">{job.role}</h2>
            <p className="mt-1 text-sm text-neutral-600">{job.years}</p>
            <div className="mt-3 space-y-1 text-sm">
              {job.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold">Education</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        {education.map((item) => (
          <article key={item.title}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{item.years}</p>
            <div className="mt-3 space-y-1 text-sm leading-relaxed">
              {item.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {item.certificate && (
              <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="btn mt-4">
                VIEW CERTIFICATE
              </a>
            )}
          </article>
        ))}
      </div>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-12"
      >
        VIEW LINKEDIN
      </a>
    </article>
  )
}

export default CareerPage
