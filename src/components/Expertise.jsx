import React from 'react';

function Expertise() {

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            Discover My
          </div>
          <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
            Expertise
          </h2>
          <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Expertise Card */}
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Expertise</div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect width="16" height="14" x="2" y="3" rx="2" ry="2" strokeWidth={1.5} />
                  <path d="m8 21h12" strokeWidth={1.5} />
                  <circle cx="10" cy="8" r="1" strokeWidth={1.5} />
                  <circle cx="14" cy="8" r="1" strokeWidth={1.5} />
                </svg>
              </div>
              <span className="text-sm text-neutral-400 font-medium">Expert Level Proficiency</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="max-w-md mx-auto md:max-w-none">
                <h3 className="text-2xl text-white mb-6 font-medium tracking-tight">My Skills</h3>
                <p className="text-neutral-400 mb-8">
                  I've developed a versatile skill set that allows me to handle all aspects of digital product development, from initial concept to final implementation.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">UI/UX Design</span>
                      <span className="font-medium text-blue-200 text-white/80">95%</span>
                    </div>
                    <div className="w-full rounded-full h-3 border border-white/10">
                      <div className="progress-bar h-3 rounded-full bg-white/60 backdrop-blur-sm" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">Graphic Design</span>
                      <span className="font-medium text-blue-200 text-white/80">95%</span>
                    </div>
                    <div className="w-full rounded-full h-3 border border-white/10">
                      <div className="progress-bar h-3 rounded-full bg-white/60 backdrop-blur-sm" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">Frontend Development</span>
                      <span className="font-medium text-blue-200 text-white/80">90%</span>
                    </div>
                    <div className="w-full rounded-full h-3 border border-white/10">
                      <div className="progress-bar h-3 rounded-full bg-white/60 backdrop-blur-sm" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">Backend Development</span>
                      <span className="font-medium text-blue-200 text-white/80">85%</span>
                    </div>
                    <div className="w-full rounded-full h-3 border border-white/10">
                      <div className="progress-bar h-3 rounded-full bg-white/60 backdrop-blur-sm" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto md:max-w-none">
                <h3 className="text-2xl text-white mb-6 font-medium tracking-tight">Technologies</h3>
                <p className="text-neutral-400 mb-8">
                  I work with a wide range of technologies and tools to create the best possible solutions for my clients.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/unrealengine.svg" alt="Unreal Engine" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">Unreal Engine</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/autocad.svg" alt="Auto Cad" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">Auto Cad</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/blender.svg" alt="Blender" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">Blender</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/figma.png" alt="Figma" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">Figma</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/react.svg" alt="React" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">React</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/nodejs.png" alt="Node.js" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">Node.js</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/js.png" alt="JavaScript" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">JavaScript</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/database.png" alt="PostgreSQL" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">PostgreSQL</h4>
                  </div>
                  <div className="bg-neutral-800/20 p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition-colors">
                    <img src="/src/assets/c++.png" alt="C++" className="h-16 w-16" />
                    <h4 className="font-medium text-white mt-3">C++</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
