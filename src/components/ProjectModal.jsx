import React, { useEffect, useState } from 'react';

function ProjectModal({ isOpen, onClose, project, projectsData, onSelectProject }) {
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const saasDemoUrl = 'https://virtual-editor-dsel.onrender.com/';

  useEffect(() => {
    setCurrentSampleIndex(0);
  }, [project?.id]);

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

  const getDrivePreviewUrl = (url) => {
    const match = url.match(/\/file\/d\/([^/]+)/);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  const isDriveLink = (url) => url.includes('drive.google.com');
  const isVideoFile = (url) =>
    url.endsWith('.mp4') || url.endsWith('.mov') || url.endsWith('.webm');

  const renderSampleMedia = (sample, alt) => {
    if (isDriveLink(sample)) {
      return (
        <iframe
          src={getDrivePreviewUrl(sample)}
          title={alt}
          className="project-modal-sample-media"
          allow="autoplay"
        />
      );
    }

    if (isVideoFile(sample)) {
      return (
        <video src={sample} controls className="project-modal-sample-media">
          Your browser does not support the video tag.
        </video>
      );
    }

    return <img src={sample} alt={alt} className="project-modal-sample-media" />;
  };

  const variantGroups = [
    {
      ids: ['ecommerce', 'ecommerce-custom'],
      options: [
        { id: 'ecommerce', label: 'Shopify' },
        { id: 'ecommerce-custom', label: 'Custom Store' }
      ]
    },
    {
      ids: ['graphic-product-design', 'product-design'],
      options: [
        { id: 'graphic-product-design', label: 'Graphic Design' },
        { id: 'product-design', label: 'Product Design' }
      ]
    },
    {
      ids: ['bridgehub', 'writely'],
      options: [
        { id: 'bridgehub', label: 'Bridgehub' },
        { id: 'writely', label: 'Writely' }
      ]
    }
  ];
  const activeVariantGroup = variantGroups.find((group) => group.ids.includes(project.id));

  return (
    <div className="project-modal-overlay fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={handleOverlayClick}>
      <div className="project-modal-container relative max-w-4xl w-full max-h-[85vh]">
        <button
          type="button"
          onClick={onClose}
          className="project-modal-close-btn"
          aria-label="Close modal"
        >
          <svg className="project-modal-close-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="project-modal-scroll">
        <div className="project-modal-section-divider p-8 pr-12 border-b">
          {activeVariantGroup && projectsData && onSelectProject && (
            <div className="mb-5">
              {activeVariantGroup.ids.includes('bridgehub') && (
                <p className="project-modal-label text-xs font-semibold uppercase tracking-wider mb-3">
                  More projects
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {activeVariantGroup.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`ecommerce-option-btn${project.id === option.id ? ' is-active' : ''}`}
                    onClick={() => {
                      const nextProject = projectsData[option.id];
                      if (nextProject) onSelectProject(nextProject);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-start mb-6 pr-8">
            <div className="flex items-center gap-3">
              <div className={`theme-accent-icon w-12 h-12 rounded-full ${project.color} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div>
                <h2 className="project-modal-title text-2xl font-bold">{project.title}</h2>
                <span className={`theme-chip ${project.badgeColor} text-xs px-3 py-1 rounded-full font-medium`}>
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <p className="project-modal-text text-lg mb-6">{project.description}</p>

          {(project.liveUrl || project.videoUrl || project.id === 'saas-platform') && (
            <div className="mb-6 flex gap-3 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-action-btn px-6 py-3 rounded-full font-medium transition-colors border"
                >
                  View Live Project
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-video-btn px-6 py-3 rounded-full font-medium transition-colors border"
                >
                  {project.id === 'saas-platform' ? 'View SaaS Demo' : 'View Game Video'}
                </a>
              )}
              {project.id === 'saas-platform' && (
                <a
                  href={saasDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-saas-top-link inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
                >
                  Open SaaS App
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="mb-6">
            <div className="project-modal-panel rounded-xl p-6 border mb-4">
              <div className="project-modal-label text-xs font-semibold uppercase tracking-wider mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="project-modal-chip text-sm px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-modal-panel rounded-xl p-6 border">
              <div className="project-modal-label text-xs font-semibold uppercase tracking-wider mb-3">Project Samples</div>
              {project.samples ? (
                project.samples.length > 1 ? (
                  <div className="relative w-full min-w-0">
                    <div className="project-modal-media-wrap project-modal-sample-frame rounded-lg">
                      {renderSampleMedia(
                        project.samples[currentSampleIndex],
                        `Sample ${currentSampleIndex + 1}`
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        type="button"
                        onClick={prevSample}
                        className="project-modal-nav-btn px-4 py-2 rounded-full font-medium transition-colors border flex items-center gap-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                        Previous
                      </button>
                      <span className="project-modal-text text-sm">
                        {currentSampleIndex + 1} / {project.samples.length}
                      </span>
                      <button
                        type="button"
                        onClick={nextSample}
                        className="project-modal-nav-btn px-4 py-2 rounded-full font-medium transition-colors border flex items-center gap-2"
                      >
                        Next
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="project-modal-sample-grid grid gap-3 sm:gap-4 min-w-0 w-full grid-cols-1">
                    {project.samples.map((sample, index) => (
                      <div
                        key={index}
                        className="project-modal-media-wrap project-modal-sample-frame rounded-lg"
                      >
                        {renderSampleMedia(sample, `Sample ${index + 1}`)}
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="project-modal-text text-sm">No samples available</div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8 pr-8">
          <h3 className="project-modal-title text-xl font-bold mb-6">Case Study</h3>

          {project.caseStudy.map((section, index) => (
            <div key={index} className="mb-8">
              <h4 className="project-modal-title text-lg font-semibold mb-3">{section.title}</h4>
              <p className="project-modal-text leading-relaxed">{section.content}</p>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="project-modal-text flex items-start gap-2">
                      <span className="project-modal-bullet mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="project-modal-section-divider border-t pt-6">
            <h4 className="project-modal-title text-lg font-semibold mb-4">Key Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="project-modal-dot w-2 h-2 rounded-full"></div>
                  <span className="project-modal-text">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
