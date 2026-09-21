import React, { useEffect, useRef, useState } from 'react';

function ProjectSidebar({ projectsData, activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = Object.values(projectsData || {});

  useEffect(() => {
    setMenuOpen(false);
  }, [activeId]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };
    media.addEventListener('change', closeOnDesktop);
    if (media.matches) {
      setMenuOpen(false);
    }
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <aside className="project-page-sidebar">
      <button
        type="button"
        className="project-page-hamburger"
        aria-expanded={menuOpen}
        aria-controls="project-page-menu"
        aria-label={menuOpen ? 'Close project list' : 'Open project list'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        )}
        <span>Projects</span>
      </button>
      {menuOpen ? (
        <button
          type="button"
          className="project-page-sidebar-backdrop"
          aria-label="Close project list"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div id="project-page-menu" className={`project-page-sidebar-card${menuOpen ? ' is-open' : ''}`}>
        <p className="project-modal-label text-xs font-semibold uppercase tracking-wider mb-4">
          Projects
        </p>
        <nav className="project-page-sidebar-list" aria-label="Project list">
          {projects.map((item) => (
            <a
              key={item.id}
              href={`#/project/${item.id}`}
              className={`project-page-sidebar-link${item.id === activeId ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="project-page-sidebar-title">{item.title}</span>
              <span className="project-page-sidebar-meta">{item.category}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function getDrivePreviewUrl(url) {
  if (typeof url !== 'string') return '';
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

function isDriveLink(url) {
  return typeof url === 'string' && url.includes('drive.google.com');
}

function isVideoFile(url) {
  return typeof url === 'string' && (url.endsWith('.mp4') || url.endsWith('.mov') || url.endsWith('.webm'));
}

function SampleMedia({ sample, alt }) {
  const [ready, setReady] = useState(false);
  const imageRef = useRef(null);
  const hasSample = typeof sample === 'string' && Boolean(sample);

  useEffect(() => {
    setReady(false);
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setReady(true);
    }
  }, [sample]);

  if (!hasSample) {
    return (
      <div className="project-modal-media-loader" role="status" aria-label="Sample unavailable">
        <span className="project-modal-text text-sm">Sample unavailable</span>
      </div>
    );
  }

  const markReady = () => setReady(true);

  const mediaClass = `project-modal-sample-media${ready ? ' is-ready' : ''}`;

  let media;
  if (isDriveLink(sample)) {
    media = (
      <iframe
        key={sample}
        src={getDrivePreviewUrl(sample)}
        title={alt}
        className={mediaClass}
        allow="autoplay"
        onLoad={markReady}
      />
    );
  } else if (isVideoFile(sample)) {
    media = (
      <video
        key={sample}
        src={sample}
        controls
        className={mediaClass}
        onLoadedData={markReady}
        onError={markReady}
      >
        Your browser does not support the video tag.
      </video>
    );
  } else {
    media = (
      <img
        key={sample}
        ref={imageRef}
        src={sample}
        alt={alt}
        className={mediaClass}
        onLoad={markReady}
        onError={markReady}
      />
    );
  }

  return (
    <>
      {media}
      {!ready && (
        <div className="project-modal-media-loader" role="status" aria-live="polite" aria-label="Loading sample">
          <span className="project-modal-media-spinner" aria-hidden="true" />
        </div>
      )}
    </>
  );
}

function ProjectPage({ project, projectsData }) {
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [sampleProjectId, setSampleProjectId] = useState(project?.id);
  const saasDemoUrl = 'https://virtual-editor-dsel.onrender.com/';

  if (project?.id !== sampleProjectId) {
    setSampleProjectId(project?.id);
    setCurrentSampleIndex(0);
  }

  if (!project) {
    return (
      <section className="project-page">
        <div className="project-page-layout">
          <ProjectSidebar projectsData={projectsData} />
          <div className="project-page-inner project-modal-container">
            <div className="p-8 max-sm:p-5">
              <h1 className="project-modal-title text-2xl font-bold mb-4">Project not found</h1>
              <p className="project-modal-text mb-6">This project page is unavailable or the link is invalid.</p>
              <a href="#overview" className="project-modal-action-btn inline-flex px-6 py-3 rounded-full font-medium transition-colors border">
                Back to Home
              </a>
            </div>
          </div>
          <div className="project-page-layout-spacer" aria-hidden="true" />
        </div>
      </section>
    );
  }

  const samples = project.samples || [];
  const sampleCount = samples.length;
  const safeSampleIndex = sampleCount
    ? Math.min(Math.max(currentSampleIndex, 0), sampleCount - 1)
    : 0;
  const currentSample = samples[safeSampleIndex];

  const nextSample = () => {
    if (sampleCount > 1) {
      setCurrentSampleIndex((prev) =>
        prev === sampleCount - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSample = () => {
    if (sampleCount > 1) {
      setCurrentSampleIndex((prev) =>
        prev === 0 ? sampleCount - 1 : prev - 1
      );
    }
  };

  return (
    <section className="project-page">
      <div className="project-page-layout">
      <ProjectSidebar projectsData={projectsData} activeId={project.id} />
      <div className="project-page-inner project-modal-container relative w-full">
        <div className="project-modal-scroll">
        <div className="project-modal-section-divider p-8 max-sm:p-5 border-b">
          <a
            href="#overview"
            className="project-page-back"
          >
            Back to Home
          </a>

          <div className="flex items-start mb-6">
            <div className="flex items-center gap-3">
              <div className={`theme-accent-icon w-12 h-12 rounded-full ${project.color} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div>
                <h1 className="project-modal-title text-2xl font-bold">{project.title}</h1>
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
                  className="project-modal-action-btn theme-action-btn ink-fill-btn px-6 py-3 rounded-full font-medium border"
                >
                  View Live Project
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-video-btn theme-action-btn ink-fill-btn px-6 py-3 rounded-full font-medium border"
                >
                  {project.id === 'saas-platform' ? 'View SaaS Demo' : 'View Game Video'}
                </a>
              )}
              {project.id === 'saas-platform' && (
                <a
                  href={saasDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-saas-top-link theme-action-btn ink-fill-btn inline-flex items-center gap-2 bg-fuchsia-600 text-white px-5 py-2.5 rounded-full font-semibold"
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
              {sampleCount ? (
                sampleCount > 1 ? (
                  <div className="relative w-full min-w-0">
                    <div className="project-modal-media-wrap project-modal-sample-frame rounded-lg">
                      <SampleMedia
                        sample={currentSample}
                        alt={`Sample ${safeSampleIndex + 1}`}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        type="button"
                        onClick={prevSample}
                        className="project-modal-nav-btn px-4 py-2 rounded-full font-medium border flex items-center gap-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                        Previous
                      </button>
                      <span className="project-modal-text text-sm">
                        {safeSampleIndex + 1} / {sampleCount}
                      </span>
                      <button
                        type="button"
                        onClick={nextSample}
                        className="project-modal-nav-btn px-4 py-2 rounded-full font-medium border flex items-center gap-2"
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
                    {samples.map((sample, index) => (
                      <div
                        key={index}
                        className="project-modal-media-wrap project-modal-sample-frame rounded-lg"
                      >
                        <SampleMedia sample={sample} alt={`Sample ${index + 1}`} />
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

        <div className="p-8 max-sm:p-5">
          <h2 className="project-modal-title text-xl font-bold mb-6">Case Study</h2>

          {project.caseStudy.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="project-modal-title text-lg font-semibold mb-3">{section.title}</h3>
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
            <h3 className="project-modal-title text-lg font-semibold mb-4">Key Results</h3>
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
      <div className="project-page-layout-spacer" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ProjectPage;
