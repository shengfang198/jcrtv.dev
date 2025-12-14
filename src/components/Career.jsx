import React from 'react';

function Career() {
  return (
    <section id="resume" className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            My Professional
          </div>
          <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">Career</h2>
          <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Career Card */}
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Career</div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" strokeWidth={1.5} />
                  <line x1="16" y1="13" x2="8" y2="13" strokeWidth={1.5} />
                  <line x1="16" y1="17" x2="8" y2="17" strokeWidth={1.5} />
                  <polyline points="10,9 9,9 8,9" strokeWidth={1.5} />
                </svg>
              </div>
              <span className="text-sm text-neutral-400 font-medium">Professional Journey</span>
            </div>

            <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Career Overview</h3>
            <p className="text-base text-neutral-500 mb-8 font-medium">5+ Years of Design & Development Excellence</p>

            <div className="border-t border-white/5 pt-5">
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect width="20" height="14" x="2" y="3" rx="2" ry="2" strokeWidth={2} />
                      <line x1="2" x2="22" y1="8" y2="8" strokeWidth={2} />
                      <rect width="4" height="4" x="18" y="10" rx="1" strokeWidth={2} />
                    </svg>
                    <span className="font-semibold text-white">Experience</span>
                  </div>
                  <div className="space-y-3 ml-7">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">SaaS Developer / Web Platform Developer</h4>
                          <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full">2024–Present</span>
                        </div>
                        <p className="text-neutral-400 text-xs text-gray-500 mb-1">Next.js, React, Node.js, PostgreSQL, Tailwind CSS</p>
                        <p className="text-neutral-400 text-xs text-gray-500 mb-1">Self-Initiated Project / Freelance / Independent</p>
                        <ul className="text-neutral-400 text-sm space-y-1 mt-2">
                          <li>• Designed and developed a SaaS web platform with full frontend–backend integration</li>
                          <li>• Implemented authentication, API security, and role-based access control</li>
                          <li>• Built dashboard features, file-handling systems, and structured folder logic</li>
                          <li>• Worked with REST APIs, database schemas, and middleware</li>
                          <li>• Debugged production issues including 401 / 403 / 404 errors, permissions, and routing</li>
                          <li>• Optimized workflows for scalability, performance, and maintainability</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">UI Designer & Developer</h4>
                          <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full">2024</span>
                        </div>
                        <p className="text-neutral-400 text-xs text-gray-500 mb-1">Figma, React, JavaScript, C++, Node.js, PostgreSQL</p>
                        <ul className="text-neutral-400 text-sm space-y-1 mt-2">
                          <li>• Designed user interfaces and interactive layouts using Figma</li>
                          <li>• Developed frontend components and interactions using React and JavaScript</li>
                          <li>• Implemented system logic and performance-oriented features using C++</li>
                          <li>• Built backend functionality with Node.js and integrated PostgreSQL databases</li>
                          <li>• Translated product requirements into functional, scalable UI components</li>
                          <li>• Collaborated across design and development workflows for digital products</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">Real Estate Editor</h4>
                          <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full">2025–Present</span>
                        </div>
                        <p className="text-neutral-400 text-xs text-gray-500 mb-1">Adobe Creative Cloud — Property Marketing & Design</p>
                        <ul className="text-neutral-400 text-sm space-y-1 mt-2">
                          <li>• Designed and edited marketing materials for real estate listings</li>
                          <li>• Enhanced property visuals using professional photo and layout techniques</li>
                          <li>• Maintained brand consistency across digital and print assets</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span className="font-semibold text-white">Education</span>
                  </div>
                  <div className="space-y-3 ml-7">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">3D & Advanced C++ Programming</h4>
                          <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full">2024</span>
                        </div>
                        <p className="text-neutral-400 text-sm">Udemy — Game Development & Advanced Programming</p>
                        <p className="text-neutral-500 text-xs mt-1">Focused on 3D systems, performance logic, and advanced C++ concepts for interactive applications</p>
                        <div className="mt-3">
                          <button
                            onClick={() => window.open('/cert.png', '_blank')}
                            className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 hover:text-indigo-200 text-xs px-3 py-1.5 rounded-full font-medium transition-colors border border-indigo-500/30"
                          >
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">ICT / Multimedia Design</h4>
                          <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">2016</span>
                        </div>
                        <p className="text-neutral-400 text-sm">Specialized in Interaction Design and Visual Communication</p>
                        <p className="text-neutral-500 text-xs mt-1">Strong foundation in digital media, layout, and user-centered design</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/50">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white">Bachelor of Science in Business Administration</h4>
                          <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full">2014</span>
                        </div>
                        <p className="text-neutral-400 text-sm">Xavier University – Ateneo de Cagayan (CDO)</p>
                        <p className="text-neutral-500 text-xs mt-1">Equipped with foundational knowledge in business management, marketing, and operations</p>
                        <p className="text-neutral-500 text-xs mt-1">Applied practical business principles to support organizational goals and improve operational efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/corales-edgar-jr-506324247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 text-white hover:bg-white/10 focus:bg-blue-100 focus:text-blue-900 focus:outline-none text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/5"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
