import React, { useState } from 'react';

function ProjectModal({ isOpen, onClose, project }) {
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextSample = () => {
    if (project.samples && project.samples.length > 1) {
      setCurrentSampleIndex((prev) =>
        prev === project.samples.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSample = () => {
    if (project.samples && project.samples.length > 1) {
      setCurrentSampleIndex((prev) =>
        prev === 0 ? project.samples.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={handleOverlayClick}>
      <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto">
        <div className="p-8 border-b border-white/5">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <span className={`${project.badgeColor} text-xs px-3 py-1 rounded-full font-medium`}>
                  {project.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <p className="text-lg text-neutral-400 mb-6">{project.description}</p>

          <div className="mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-4">
              <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-3">Project Samples</div>
              {project.samples ? (
                project.samples.length > 3 ? (
                  <div className="relative">
                    <div className="max-w-4xl mx-auto bg-white/10 rounded-lg overflow-hidden flex items-center justify-center max-h-[70vh]">
                      {project.samples[currentSampleIndex].endsWith('.mp4') || project.samples[currentSampleIndex].endsWith('.mov') || project.samples[currentSampleIndex].endsWith('.webm') ? (
                        <video
                          src={project.samples[currentSampleIndex]}
                          controls
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={project.samples[currentSampleIndex]}
                          alt={`Sample ${currentSampleIndex + 1}`}
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                        />
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={prevSample}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-colors border border-white/10 flex items-center gap-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                        Previous
                      </button>
                      <span className="text-neutral-400 text-sm">
                        {currentSampleIndex + 1} / {project.samples.length}
                      </span>
                      <button
                        onClick={nextSample}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-colors border border-white/10 flex items-center gap-2"
                      >
                        Next
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={`grid gap-4 ${project.samples.length === 1 ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
                    {project.samples.map((sample, index) => (
                      <div key={index} className={`${project.samples.length === 1 ? 'max-w-4xl mx-auto' : ''} bg-white/10 rounded-lg overflow-hidden flex items-center justify-center max-h-[40vh]`}>
                        {sample.endsWith('.mp4') || sample.endsWith('.mov') || sample.endsWith('.webm') ? (
                          <video
                            src={sample}
                            controls
                            className="max-w-full max-h-full object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img src={sample} alt={`Sample ${index + 1}`} className="max-w-full max-h-full object-contain" />
                        )}
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-neutral-400 text-sm">No samples available</div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8 pr-8">
          <h3 className="text-xl font-bold text-white mb-6">Case Study</h3>

          {project.caseStudy.map((section, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3">{section.title}</h4>
              <p className="text-neutral-400 leading-relaxed">{section.content}</p>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-neutral-400 flex items-start gap-2">
                      <span className="text-white/50 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="border-t border-white/5 pt-6">
            <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-neutral-400">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {(project.liveUrl || project.videoUrl) && (
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex gap-4 flex-wrap">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/10"
                  >
                    View Live Project
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500/20 hover:bg-green-500/30 text-green-300 hover:text-green-200 px-6 py-3 rounded-full font-medium transition-colors border border-green-500/30"
                  >
                    {project.id === 'saas-platform' ? 'View SaaS Demo' : 'View Game Video'}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
