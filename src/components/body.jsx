import React, { useEffect, useState } from 'react';
import Profile from './Profile.jsx';
import Expertise from './Expertise.jsx';
import Projects from './project.jsx';
import Career from './Career.jsx';
import Footer from './footer.jsx';

function Body(props) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
  const [extraAttendees, setExtraAttendees] = useState(() => {
    // Load from localStorage with fallback to 87
    const saved = localStorage.getItem('designReviewAttendees');
    return saved ? parseInt(saved, 10) : 87;
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(() => {
    // Load from localStorage whether review was already submitted
    const submitted = localStorage.getItem('designReviewSubmitted');
    return submitted === 'true';
  });
  const [designReviewMinimized, setDesignReviewMinimized] = useState(false);
  const [growthMinimized, setGrowthMinimized] = useState(false);
  const [seoSearchTerm, setSeoSearchTerm] = useState('');
  const [seoSearchVisible, setSeoSearchVisible] = useState(false);
  const [referenceMinimized, setReferenceMinimized] = useState(false);

  // A-Z Development Terms & Tools Data
  const devTerms = [
    { letter: 'A', items: 'API integration, Agile methodology, Authentication' },
    { letter: 'B', items: 'Backend development, Bug tracking, Build automation' },
    { letter: 'C', items: 'CI/CD pipelines, Cloud deployment, Code review' },
    { letter: 'D', items: 'Database design, Debugging, Docker' },
    { letter: 'E', items: 'Event-driven architecture, Error handling, End-to-end testing' },
    { letter: 'F', items: 'Frontend frameworks (React, Vue, Angular), Functional programming, Firebase' },
    { letter: 'G', items: 'Git/GitHub, GraphQL, GUI design' },
    { letter: 'H', items: 'HTML5, Hosting solutions, HTTP/HTTPS' },
    { letter: 'I', items: 'Integration testing, IDE (VS Code, IntelliJ), Infrastructure as Code' },
    { letter: 'J', items: 'JavaScript, JSON, JWT authentication' },
    { letter: 'K', items: 'Kubernetes, Kotlin, Key performance metrics' },
    { letter: 'L', items: 'Linux server management, Load balancing, Linting' },
    { letter: 'M', items: 'Microservices, Mobile development, Modular code' },
    { letter: 'N', items: 'Node.js, Networking, NoSQL databases' },
    { letter: 'O', items: 'Object-oriented programming, OAuth, Optimization' },
    { letter: 'P', items: 'Python, PHP, Progressive Web Apps (PWA)' },
    { letter: 'Q', items: 'Query optimization, QA testing, Queue management' },
    { letter: 'R', items: 'RESTful APIs, React, Responsive design' },
    { letter: 'S', items: 'SQL, Security best practices, Serverless architecture' },
    { letter: 'T', items: 'TypeScript, Testing frameworks (Jest, Mocha), Templating engines' },
    { letter: 'U', items: 'UI/UX implementation, Unit testing, User authentication' },
    { letter: 'V', items: 'Version control, Vue.js, Virtualization' },
    { letter: 'W', items: 'Webpack, Web development, WebSockets' },
    { letter: 'X', items: 'XML parsing, XSS protection, Xcode (iOS development)' },
    { letter: 'Y', items: 'YAML configurations, YARN package manager, Yearly code review' },
    { letter: 'Z', items: 'Zero downtime deployment, Zeplin (UI collaboration), Z-index (CSS layering)' },
  ];

  // Filter terms based on search - only show terms when searching
  const filteredTerms = seoSearchTerm.trim() !== '' ? devTerms.filter(term =>
    term.letter.toLowerCase().includes(seoSearchTerm.toLowerCase()) ||
    term.items.toLowerCase().includes(seoSearchTerm.toLowerCase())
  ) : [];



  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (props.isModalOpen) {
      document.body.style.overflow = 'hidden';

      // Close modal when user scrolls (navigation)
      const handleScroll = () => {
        if (props.isModalOpen) {
          props.onCloseModal();
        }
      };

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup scroll listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = '';
      };
    } else {
      // Restore default scroll behavior
      document.body.style.overflow = '';
      return () => {};
    }
  }, [props.isModalOpen, props.onCloseModal, props]);

  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;

    const initParticles = () => {
      if (window.particlesJS) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: '#0096C7' },
              shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
              opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
              size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
              line_linked: { enable: true, distance: 150, color: '#0096C7', opacity: 0.4, width: 1 },
              move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
            },
            interactivity: {
              detect_on: 'canvas',
              events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
              modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
          });
        }, 100);
      }
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      script.onload = initParticles;
      document.body.appendChild(script);
    }

    // Auto-trigger scroll animations on mount
    const triggerAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const underlines = document.querySelectorAll('.underline-expand');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        },
        { threshold: 0.1 }
      );

      const underlineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.width = '100%';
              entry.target.classList.add('wave-animated');
            }
          });
        },
        { threshold: 0.5 }
      );

      elements.forEach((el) => observer.observe(el));
      underlines.forEach((underline) => underlineObserver.observe(underline));
    };

    // Delayed animation trigger for better UX
    setTimeout(triggerAnimations, 200);

    // Typing animation for hero text
    const fullText = "Work Showcase";
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(true);
      }
    }, 150);

    // Generate ultra-vibrant tones matching the snippet colors (orange to purple)
    const getRandomColor = () => {
      const colors = [300, 39, 264]; // magenta, orange (39), violet (264) hues
      const hue = colors[Math.floor(Math.random() * colors.length)];
      const saturation = 95; // High saturation like snippet
      const lightness = 56; // Matching the snippet's 56%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Flashlight effect for cards
    const addFlashlightEffect = () => {
      const cards = document.querySelectorAll('.flashlight-card');

      cards.forEach(card => {
        let currentColors = {};

        const updateColors = () => {
          currentColors = {
            primary: getRandomColor(),
            secondary: getRandomColor(),
            tertiary: getRandomColor(),
            quaternary: getRandomColor()
          };

          card.style.setProperty('--flashlight-primary', currentColors.primary);
          card.style.setProperty('--flashlight-secondary', currentColors.secondary);
          card.style.setProperty('--flashlight-tertiary', currentColors.tertiary);
          card.style.setProperty('--flashlight-quaternary', currentColors.quaternary);
        };

        // Update colors and set initial mouse position on hover enter
        card.addEventListener('mouseenter', (e) => {
          updateColors();

          // Temporarily disable transform transition during initial hover
          card.classList.add('flashlight-initial-enter');

          // Set initial mouse position immediately before showing the flashlight
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - 200; // Center the 400px blob on cursor
          const y = e.clientY - rect.top - 200;  // Center the 400px blob on cursor

          card.style.setProperty('--translate-x', `${x}px`);
          card.style.setProperty('--translate-y', `${y}px`);

          // Now activate the flashlight
          card.classList.add('flashlight-active');

          // Re-enable transform transition after a frame
          requestAnimationFrame(() => {
            card.classList.remove('flashlight-initial-enter');
          });
        });

        card.addEventListener('mouseleave', () => {
          card.classList.remove('flashlight-active');
        });

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - 200; // Center the 400px blob on cursor
          const y = e.clientY - rect.top - 200;  // Center the 400px blob on cursor

          // Use requestAnimationFrame for ultra-smooth updates
          requestAnimationFrame(() => {
            card.style.setProperty('--translate-x', `${x}px`);
            card.style.setProperty('--translate-y', `${y}px`);
          });
        });
      });
    };

    // Initialize flashlight effect after cards are rendered
    setTimeout(addFlashlightEffect, 100);
  }, []);

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/myzrvera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: `New contact request from ${email}`,
          _subject: 'New Contact Form Submission',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <main className="z-10 w-full pt-12 p-0 relative min-h-screen flex flex-col" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="flex-grow">
        {/* Particles Background */}
        <div id="particles-js" className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none -z-10"></div>
      </div>
      {/* Hero Header */}
      <div className="text-center max-w-5xl mx-auto mb-24">
        <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold mb-8">
          <span className="flex h-2 w-2 rounded-full bg-white"></span>
          Professional Portfolio
        </div>

        <h1 className="animate-on-scroll md:text-8xl leading-[1] text-7xl font-medium text-white tracking-tight mb-8">
          Jay Creative <br className="hidden md:block" />
          {typedText}{showCursor && <span className="blink-cursor">|</span>}
        </h1>

        <p className="animate-on-scroll md:text-2xl leading-relaxed text-xl font-light text-neutral-400 tracking-tight max-w-2xl ml-auto mr-auto mb-12">
          Full-Stack Developer specializing in UI/UX design and modern web technologies.
        </p>

        {/* Contact Input */}
        <form onSubmit={handleFormSubmit} className="animate-on-scroll flex flex-col sm:flex-row gap-3 group max-w-lg ml-auto mr-auto relative gap-x-3 gap-y-3 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full sm:flex-1 bg-[#161616] border rounded-full px-6 py-3.5 text-base outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-neutral-600 shadow-lg h-[52px] text-white ${
              submitStatus === 'error' ? 'border-red-500' : 'border-white/10 focus:border-white/20'
            }`}
            disabled={isSubmitting}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex overflow-hidden transition-all duration-300 hover:from-white/10 hover:via-white/5 hover:to-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none border border-white/20 sm:w-auto bg-gradient-to-b from-white/10 via-white/0 to-white/10 w-full h-[52px] rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2 items-center justify-center backdrop-blur-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.4)', filter: 'contrast(110%) brightness(110%)' }}>
            <span className="text-sm font-semibold tracking-tight relative z-10 text-white/90 group-hover:text-white transition-colors">
              {isSubmitting ? 'Sending...' : 'Get In Touch'}
            </span>
            <svg className="w-4 h-4 relative z-10 text-white/60 group-hover:text-white transition-colors group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </form>

        {/* Form Status Messages */}
        {submitStatus === 'success' && (
          <div className="animate-on-scroll mt-4 text-green-400 text-sm font-medium">
            ✓ Email sent successfully! We'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="animate-on-scroll mt-4 text-red-400 text-sm font-medium">
            ✗ Failed to send email. Please check your email address and try again.
          </div>
        )}

        <div className="animate-on-scroll mt-8 flex items-center justify-center gap-2 text-sm text-neutral-500 font-medium">
          <svg className="text-neutral-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>Available for Projects & Collaboration</span>
        </div>
      </div>

      {/* Design Review */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Insights</div>
                <button
                  className="text-neutral-600 hover:text-neutral-300 transition-colors"
                  onClick={() => setDesignReviewMinimized(!designReviewMinimized)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    {designReviewMinimized ? (
                      <path d="m9 12 6 0"/>
                    ) : (
                      <path d="m15 9-6 6"/>
                    )}
                  </svg>
                </button>
              </div>

              {!designReviewMinimized && (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/>
                        <path d="M15 3v6h6"/>
                        <path d="M2 13.5h20"/>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 font-medium">Product Sync</span>
                  </div>

                  <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Design Review</h3>

                  <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-800 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-neutral-300 font-bold">JD</div>
                      <div className="w-10 h-10 rounded-full bg-neutral-700 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-white font-bold">AS</div>
                      <div className="w-10 h-10 rounded-full bg-neutral-900 border-[3px] border-[#0C0D0F] flex items-center justify-center text-xs text-white font-bold">+{extraAttendees}</div>
                    </div>
                    {reviewSubmitted ? (
                      <div className="bg-white/5 text-white text-sm px-5 py-2.5 rounded-full font-semibold border border-white/5">
                        Thank you for the review!
                      </div>
                    ) : (
                      <button
                        className="bg-white/5 text-white hover:bg-white/10 text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/5"
                        onClick={() => {
                          const newCount = extraAttendees + 1;
                          setExtraAttendees(newCount);
                          setReviewSubmitted(true);
                          localStorage.setItem('designReviewAttendees', newCount.toString());
                          localStorage.setItem('designReviewSubmitted', 'true');
                        }}
                      >
                        + Review
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization - A-Z Development Terms */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Reference</div>
                <button
                  className="text-neutral-600 hover:text-neutral-300 transition-colors"
                  onClick={() => setReferenceMinimized(!referenceMinimized)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    {referenceMinimized ? (
                      <path d="m9 12 6 0"/>
                    ) : (
                      <path d="m15 9-6 6"/>
                    )}
                  </svg>
                </button>
              </div>

              {!referenceMinimized && (
                <>
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl text-white mb-4 font-medium tracking-tight">SEO</h3>

                    {/* Controls - moved to top */}
                    <div className="flex gap-2 items-center justify-center mb-2">
                      {seoSearchVisible && (
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search terms..."
                            value={seoSearchTerm}
                            onChange={(e) => setSeoSearchTerm(e.target.value)}
                            className="w-48 h-10 rounded-xl bg-white/5 border border-white/10 px-3 pr-10 text-sm text-white placeholder-neutral-400 focus:bg-white/10 focus:border-white/20 transition-colors"
                            autoFocus
                          />
                        </div>
                      )}
                      <button
                        onClick={() => setSeoSearchVisible(!seoSearchVisible)}
                        className="w-auto min-w-[80px] h-10 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 px-3 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <svg width="18" height="18" className="text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.3-4.3"/>
                        </svg>
                        <span className="text-xs text-neutral-500 font-medium">Search</span>
                      </button>
                    </div>

                    <p className="text-sm text-neutral-500 font-medium">Comprehensive development reference guide</p>
                  </div>

                  {/* Terms Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {filteredTerms.map((term, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-white">{term.letter}</span>
                          <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">{index + 1}</span>
                        </div>
                        <p className="text-sm text-neutral-300 leading-relaxed">{term.items}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer - only show when there are results */}
                  {filteredTerms.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-xs text-neutral-500 text-center">
                        {filteredTerms.length} of {devTerms.length} sections displayed
                        {seoSearchTerm && ` • Filtered by: "${seoSearchTerm}"`}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Growth */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll h-full bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Performance</div>
                  <button
                    className="text-neutral-600 hover:text-neutral-300 transition-colors"
                    onClick={() => setGrowthMinimized(!growthMinimized)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      {growthMinimized ? (
                        <path d="m9 12 6 0"/>
                      ) : (
                        <path d="m15 9-6 6"/>
                      )}
                    </svg>
                  </button>
                </div>

                {!growthMinimized && (
                  <>
                <div className="flex flex-col lg:flex-row gap-8 h-full">
                  {/* Growth Content - Left Side */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 opacity-80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M3 3v18h18"/>
                          <path d="m19 9-5 5-4-4-3 3"/>
                        </svg>
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Growth</span>
                      </div>
                      <h2 className="text-7xl text-white leading-none font-medium tracking-tight">10x</h2>
                    </div>

                    <div className="mt-12">
                      <div className="flex mb-6 space-x-1.5">
                        <div className="h-1.5 w-8 bg-neutral-800 rounded-full"></div>
                        <div className="h-1.5 w-8 bg-neutral-700 rounded-full"></div>
                        <div className="h-1.5 w-12 bg-white rounded-full shadow-none"></div>
                      </div>
                      <p className="text-xl text-neutral-200 leading-snug font-semibold tracking-tight">
                        Iterative progress and improvement.
                      </p>
                      <p className="text-sm text-neutral-500 mt-3 font-medium">performance metrics.</p>
                    </div>
                  </div>

                  {/* Analytics Chart - Right Side */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="7" x2="17" y1="8" y2="8"/>
                        <line x1="7" x2="17" y1="12" y2="12"/>
                        <line x1="7" x2="13" y1="16" y2="16"/>
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Analytics</span>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <div className="flex-grow min-h-[300px] relative">
                        <svg width="100%" height="90%" viewBox="0 0 400 270" preserveAspectRatio="none" className="absolute inset-0">
                          {/* Growth Line */}
                          <path
                            d="M0,250 Q67,230 133,210 T267,170 T400,100"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                          />
                          {/* Performance Line */}
                          <path
                            d="M0,245 Q67,220 133,195 T267,135 T400,40"
                            stroke="#10B981"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Year Labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-neutral-500 font-medium">
                          <span>2023</span>
                          <span>2024</span>
                          <span>2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-neutral-500 font-medium">Year-over-year analytics</p>
                    </div>
                  </div>
                </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Card */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-[30%] mx-auto">
            <div className="animate-on-scroll relative flex items-center justify-center bg-white/[0.02] rounded-[2.5rem] border border-white/5 border-dashed">
              <div className="text-center py-8">
                <p className="text-white text-sm opacity-50">{currentTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
