import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const scrollTopButton = document.getElementById('scrollToTop');
    if (scrollTopButton) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          scrollTopButton.classList.add('visible');
        } else {
          scrollTopButton.classList.remove('visible');
        }
      });

      scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  return (
    <>
      <footer id="footer" className="py-12" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">

              </div>

            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-neutral-400 font-medium">UI/UX Design</span></li>
                <li><span className="text-neutral-400 font-medium">Web Development</span></li>
                <li><span className="text-neutral-400 font-medium">3D Modeling</span></li>
                <li><span className="text-neutral-400 font-medium">Branding</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-neutral-400 font-medium">Davao, PH</li>
                <li className="text-neutral-400 font-medium">lharc3395@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 font-medium text-sm">&copy; 2024 Jay Creative. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/corales-edgar-jr-506324247/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scrollToTop"
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible translate-y-4 hover:scale-110 z-50 border border-white/20 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7M5 18l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default Footer;
