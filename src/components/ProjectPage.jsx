import { useCallback, useEffect, useState } from 'react'

function drivePreview(url) {
  const match = String(url).match(/\/file\/d\/([^/]+)/)
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url
}

function SampleFrame({ sample, alt }) {
  let media
  if (!sample) {
    media = <div className="flex h-full items-center justify-center text-sm">Sample unavailable</div>
  } else if (sample.includes('drive.google.com')) {
    media = (
      <iframe
        src={drivePreview(sample)}
        title={alt}
        className="h-full w-full border-0"
        allow="autoplay"
      />
    )
  } else if (/\.(mp4|mov|webm)$/i.test(sample)) {
    media = <video src={sample} controls className="h-full w-full object-contain" />
  } else {
    media = (
      <img
        src={sample}
        alt={alt}
        className="h-full w-full object-contain"
      />
    )
  }

  return (
    <div className="flex h-[420px] w-full min-w-0 flex-1 items-center justify-center sm:h-[520px] lg:h-[640px]">
      {media}
    </div>
  )
}

function ProjectPage({ project, projectOrder, projectsData }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [project?.id])

  const samples = project?.samples || []
  const count = samples.length
  const safeIndex = count ? Math.min(index, count - 1) : 0
  const order = (projectOrder || []).filter((id) => projectsData?.[id])
  const canPrev = safeIndex > 0
  const canNext = safeIndex < count - 1

  const step = useCallback((direction) => {
    setIndex((current) => {
      const next = current + direction
      if (next < 0 || next > count - 1) return current
      return next
    })
  }, [count])

  useEffect(() => {
    if (!project) return undefined
    const onKey = (event) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        step(1)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        step(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, step])

  if (!project) {
    return (
      <section className="page-shell px-6 py-24 md:px-14">
        <h1 className="font-display text-5xl font-black">NOT FOUND</h1>
        <p className="mt-4 text-sm">This project is unavailable.</p>
        <a href="#overview" className="btn mt-8">
          BACK HOME
        </a>
      </section>
    )
  }

  const arrowClass = (enabled) => (
    `flex h-10 w-10 shrink-0 items-center justify-center ${
      enabled ? 'text-ink hover:text-[#ff6608]' : 'cursor-default text-neutral-300'
    }`
  )

  return (
    <article className="page-shell px-6 py-10 md:px-14 md:py-14">
      <div className="grid items-start gap-8 lg:grid-cols-[200px_1fr] lg:gap-10">
        <nav aria-label="Projects" className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">PROJECTS</p>
          <ul className="mt-4 space-y-2 text-sm leading-snug">
            {order.map((id) => {
              const item = projectsData[id]
              const active = id === project.id
              return (
                <li key={id}>
                  <a
                    href={`#/project/${id}`}
                    className={active ? 'font-semibold' : 'text-neutral-500 hover:text-ink'}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous"
              disabled={!canPrev}
              className={arrowClass(canPrev)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>
            <SampleFrame sample={samples[safeIndex]} alt={`${project.title} sample ${safeIndex + 1}`} />
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next"
              disabled={!canNext}
              className={arrowClass(canNext)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="mt-3 text-center text-xs font-semibold tracking-[0.16em]">
            {count ? `${safeIndex + 1} / ${count}` : 'NO SAMPLES'}
          </p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">PROJECT</p>
              <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.9] tracking-[-0.03em]">
                {project.title.toUpperCase()}
              </h1>
              <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="border border-ink px-2.5 py-1 text-[11px] font-medium tracking-wide">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    VIEW LIVE
                  </a>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
                    VIEW VIDEO
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
                    GITHUB
                  </a>
                )}
              </div>
              <p className="mt-6 text-xs tracking-[0.14em] text-neutral-500">
                {project.client} · {project.duration}
              </p>
            </div>

            <div className="text-sm leading-relaxed">
              <h2 className="text-base font-semibold">Case Study</h2>
              {project.caseStudy.map((section) => (
                <div key={section.title} className="mt-6">
                  <h3 className="font-semibold">{section.title}</h3>
                  {section.content && <p className="mt-1">{section.content}</p>}
                  {section.bullets && (
                    <ul className="mt-2 space-y-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>· {bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="mt-8">
                <h3 className="font-semibold">Key Results</h3>
                <ul className="mt-2 space-y-1">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectPage
