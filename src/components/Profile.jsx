import React from 'react';

function Profile() {
  return (
    <section id="about" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            Get To Know Me
          </div>
          <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
            Profile
          </h2>
          <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
        </div>

        {/* Profile Card */}
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-2xl p-8 border border-white/5 relative overflow-hidden group transition-colors backdrop-blur-2xl">
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
                I'm a designer and full-stack developer with 5+ years of experience, focused on building business-driven digital products that combine intuitive user experiences, scalable systems, and clean, efficient code. I help startups and established businesses turn ideas into practical, high-quality solutions that improve workflows, enhance customer experiences, and support business growth.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="profile-contact-item flex items-center text-neutral-500 text-xs font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-neutral-600" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                    </svg>
                    <span>lharc3395@gmail.com</span>
                  </div>
                </div>
                <div className="profile-contact-item flex items-center text-neutral-500 text-xs font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-neutral-600" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 .001-5.001A2.5 2.5 0 0 1 12 11.5z" />
                  </svg>
                  <span>Manila, Philippines</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="./resume__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-action-btn bg-fuchsia-600 focus:outline-none text-white text-sm px-5 py-2.5 rounded-full font-semibold border border-fuchsia-600 inline-block"
                >
                  View CV
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
