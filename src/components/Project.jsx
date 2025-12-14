import React from 'react';
import ProjectModal from './ProjecModal.jsx';

function Projects({ projectsData, onOpenModal, selectedProject, isModalOpen, onCloseModal }) {
  const openProjectModal = (projectId) => {
    const project = projectsData[projectId];
    if (project) {
      onOpenModal(project);
    }
  };

  return (
    <>
      <section id="projects" className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
              Browse My Recent
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Projects Card */}
            <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Projects</div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-sm text-neutral-400 font-medium">Featured Work</span>
              </div>

              <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Digital Creations</h3>
              <p className="text-base text-neutral-500 mb-8 font-medium">Innovation Through Design & Development</p>

              <div className="border-t border-white/5 pt-5">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="8" cy="12" r="1" strokeWidth={2} />
                        <circle cx="16" cy="12" r="1" strokeWidth={2} />
                        <path d="M2 7l20 0" strokeWidth={2} strokeLinecap="round" />
                        <path d="M4 10l16 0" strokeWidth={2} strokeLinecap="round" />
                        <path d="M6 13l12 0" strokeWidth={2} strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">E-commerce Platform</h4>
                        <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full">UI/UX Design</span>
                      </div>
                      <p className="text-neutral-400 text-sm">Modern shopping platform with seamless checkout and user experience.</p>
                      <button
                        onClick={() => openProjectModal('ecommerce')}
                        className="mt-2 bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-indigo-500/30 transition-colors"
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">3D Visualization and Graphic Design</h4>
                        <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">3D Visualization and Graphic Design</span>
                      </div>
                      <p className="text-neutral-400 text-sm">Photorealistic 3D renders for interior and exterior design visualization and graphic design.</p>
                      <button
                        onClick={() => openProjectModal('3d-visualization')}
                        className="mt-2 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-purple-500/30 transition-colors"
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                        <circle cx="12" cy="12" r="6" strokeWidth={2} />
                        <circle cx="12" cy="12" r="2" strokeWidth={2} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">UI UX</h4>
                        <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full">Graphic Design · UI/UX</span>
                      </div>
                      <p className="text-neutral-400 text-sm">Creative graphic design projects showcasing branding, UI/UX design, and visual communication solutions.</p>
                      <button
                        onClick={() => openProjectModal('nft-marketplace')}
                        className="mt-2 bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-cyan-500/30 transition-colors"
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeWidth={1.5}></rect><line x1="16" x2="16" y1="2" y2="6" strokeWidth={1.5}></line><line x1="8" x2="8" y1="2" y2="6" strokeWidth={1.5}></line><line x1="3" x2="21" y1="10" y2="10" strokeWidth={1.5}></line><path d="M8 14h.01" strokeWidth={2}></path><path d="M12 14h.01" strokeWidth={2}></path><path d="M16 14h.01" strokeWidth={2}></path><path d="M8 18h.01" strokeWidth={2}></path><path d="M12 18h.01" strokeWidth={2}></path><path d="M16 18h.01" strokeWidth={2}></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">Editing Services SaaS</h4>
                        <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">SaaS Platform · Full-Stack Application</span>
                      </div>
                      <p className="text-neutral-400 text-sm">A deployment-ready cloud-based editing services platform designed to manage orders, editors, revisions, payments, and real-time collaboration in a single, structured system.</p>
                      <button
                        onClick={() => openProjectModal('saas-platform')}
                        className="mt-2 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-purple-500/30 transition-colors"
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/50">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V12h6v6a6 6 0 0 1-12 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12a6 6 0 1-5.5-3.5M9 12a6 6 0 1 5.5-3.5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">Action RPG Game</h4>
                        <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">Game Development</span>
                      </div>
                      <p className="text-neutral-400 text-sm">Full 3D action RPG game built with Unreal Engine featuring immersive combat and storytelling.</p>
                      <button
                        onClick={() => openProjectModal('action-rpg')}
                        className="mt-2 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-green-500/30 transition-colors"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default Projects;
