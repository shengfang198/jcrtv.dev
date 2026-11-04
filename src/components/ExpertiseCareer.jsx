import { education, experience, technologies } from '../data/site.js'

function ExpertiseCareer() {
  const preview = experience.slice(0, 3)
  const educationPreview = education.slice(0, 2)

  return (
    <section id="skills" className="page-shell px-6 py-8 md:px-14 md:py-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <h2 className="font-display text-[clamp(3rem,16vw,7.6rem)] font-light leading-[0.8] tracking-[-0.04em]">
            EXPERT
            <br />
            TISE
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex aspect-square items-center justify-center border border-neutral-200 bg-white p-4">
                <img src={tech.src} alt={tech.name} className="h-14 w-14 object-contain brightness-0 md:h-16 md:w-16" />
              </div>
            ))}
          </div>
          <div className="mt-10 lg:mt-auto lg:pt-10">
            <a href="#/expertise" className="btn">EXPLORE</a>
          </div>
        </div>

        <div id="career" className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight">CAREER</h2>
          <p className="text-lg">and Education</p>
          <div className="mt-6 space-y-8 text-sm leading-relaxed">
            {preview.map((job) => (
              <article key={job.role}>
                <h3 className="font-semibold">{job.role}</h3>
                <p>{job.years}</p>
                {job.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <ul className="mt-2 space-y-1">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="pl-3">{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
            {educationPreview.map((item) => (
              <article key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.years}</p>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>
          <div className="mt-10 lg:mt-auto lg:pt-10 lg:text-right">
            <a href="#/career" className="btn">SEE MORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseCareer
