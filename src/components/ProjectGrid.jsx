import { useState } from 'react'
import { projectCards } from '../data/site.js'
import LoadingCircle from './LoadingCircle.jsx'

const VISIBLE_COUNT = 8

function ProjectCard({ project, onReady }) {
  const [ready, setReady] = useState(false)

  const finish = () => {
    setReady(true)
    onReady(project.id)
  }

  return (
    <a href={`#/project/${project.id}`} className="block transition-colors hover:bg-[#ffb703]">
      <div className="relative aspect-square overflow-hidden">
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingCircle />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          ref={(node) => {
            if (node?.complete && node.naturalWidth > 0) finish()
          }}
          onLoad={finish}
          onError={finish}
          className={`h-full w-full object-cover ${ready ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <p className="mt-4 text-center text-xs font-semibold tracking-[0.16em]">{project.title.toUpperCase()}</p>
      <p className="mt-1 text-center text-[11px] font-medium tracking-[0.14em] text-neutral-700">
        {project.description.toUpperCase()}
      </p>
    </a>
  )
}

function ProjectGrid() {
  const [expanded, setExpanded] = useState(false)
  const [pending, setPending] = useState(() => new Set(projectCards.slice(0, VISIBLE_COUNT).map((project) => project.id)))
  const visible = expanded ? projectCards : projectCards.slice(0, VISIBLE_COUNT)
  const loading = pending.size > 0

  const markReady = (id) => {
    setPending((current) => {
      if (!current.has(id)) return current
      const next = new Set(current)
      next.delete(id)
      return next
    })
  }

  const toggle = () => {
    if (expanded) {
      setPending((current) => {
        const next = new Set(current)
        projectCards.slice(VISIBLE_COUNT).forEach((project) => next.delete(project.id))
        return next
      })
      setExpanded(false)
      return
    }

    setPending((current) => {
      const next = new Set(current)
      projectCards.slice(VISIBLE_COUNT).forEach((project) => next.add(project.id))
      return next
    })
    setExpanded(true)
  }

  return (
    <section id="projects" className="page-shell px-6 py-12 md:px-14 md:py-16">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onReady={markReady} />
        ))}
      </div>

      {projectCards.length > VISIBLE_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            className="btn"
            disabled={loading}
            aria-busy={loading}
          >
            <span className="inline-flex items-center gap-3">
              {loading && <LoadingCircle className="h-4 w-4" />}
              {expanded ? 'SHOW LESS' : 'SEE MORE'}
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectGrid
