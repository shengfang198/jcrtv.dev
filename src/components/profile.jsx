import React from 'react';

function Profile() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            Get To Know Me
          </div>
          <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
            Profile
          </h2>
          <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Profile Card */}
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Profile</div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path d="m9 12 2 3 4-7" strokeWidth={1.5} />
                </svg>
              </div>
              <span className="text-sm text-neutral-400 font-medium">5+ Years Experience</span>
            </div>

            <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Jay Creative</h3>
            <p className="text-base text-neutral-500 mb-8 font-medium">Full-Stack Developer</p>

            <div className="border-t border-white/5 pt-5">
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                I'm a passionate designer and developer with a strong focus on creating intuitive user experiences and clean, efficient code. With over 5 years in the industry, I've helped startups and established companies bring their digital products to life.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-neutral-500 text-xs font-semibold">
                    <i className="fas fa-envelope mr-2 text-neutral-600"></i>
                    <span>lharc3395@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center text-neutral-500 text-xs font-semibold">
                  <i className="fas fa-map-marker-alt mr-2 text-neutral-600"></i>
                  <span>Davao, Philippines</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="/src/assets/resume__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 hover:bg-indigo-600 focus:bg-blue-600 focus:outline-none text-white text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-blue-500 inline-block"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
