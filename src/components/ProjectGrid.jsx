import { useState } from 'react'
import { projectCards } from '../data/site.js'

const VISIBLE_COUNT = 8

function ProjectGrid() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projectCards : projectCards.slice(0, VISIBLE_COUNT)

  return (
    <section id="projects" className="page-shell px-6 py-12 md:px-14 md:py-16">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((project) => (
          <a key={project.id} href={`#/project/${project.id}`} className="block transition-colors hover:bg-[#ffb703]">
            <div className="aspect-square overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs font-semibold tracking-[0.16em]">{project.title.toUpperCase()}</p>
            <p className="mt-1 text-center text-[11px] font-medium tracking-[0.14em] text-neutral-700">
              {project.description.toUpperCase()}
            </p>
          </a>
        ))}
      </div>

      {projectCards.length > VISIBLE_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="btn"
          >
            {expanded ? 'SHOW LESS' : 'SEE MORE'}
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectGrid
