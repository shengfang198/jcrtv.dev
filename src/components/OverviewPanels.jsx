import React, { useEffect, useRef, useState } from 'react';

const devTerms = [
  { letter: 'A', items: 'API integration, Agile methodology, Authentication', description: 'Connecting services, iterating in sprints, and verifying who can access a system.' },
  { letter: 'B', items: 'Backend development, Bug tracking, Build automation', description: 'Server logic, issue tracking, and automated builds that keep releases consistent.' },
  { letter: 'C', items: 'CI/CD pipelines, Cloud deployment, Code review', description: 'Automated shipping, cloud hosting, and peer review before code goes live.' },
  { letter: 'D', items: 'Database design, Debugging, Docker', description: 'Structuring data, finding defects, and packaging apps in containers.' },
  { letter: 'E', items: 'Event-driven architecture, Error handling, End-to-end testing', description: 'Reacting to events, failing safely, and testing full user flows.' },
  { letter: 'F', items: 'Frontend frameworks (React, Vue, Angular), Functional programming, Firebase', description: 'UI frameworks, function-based code, and hosted app backends.' },
  { letter: 'G', items: 'Git/GitHub, GraphQL, GUI design', description: 'Version control, flexible APIs, and visual interface layout.' },
  { letter: 'H', items: 'HTML5, Hosting solutions, HTTP/HTTPS', description: 'Page structure, where sites live, and secure web requests.' },
  { letter: 'I', items: 'Integration testing, IDE (VS Code, IntelliJ), Infrastructure as Code', description: 'Testing connected parts, coding tools, and servers defined in files.' },
  { letter: 'J', items: 'JavaScript, JSON, JWT authentication', description: 'Web scripting, data format, and token-based login.' },
  { letter: 'K', items: 'Kubernetes, Kotlin, Key performance metrics', description: 'Container orchestration, JVM language, and measurable product health.' },
  { letter: 'L', items: 'Linux server management, Load balancing, Linting', description: 'Running servers, spreading traffic, and catching code issues early.' },
  { letter: 'M', items: 'Microservices, Mobile development, Modular code', description: 'Small services, phone apps, and reusable isolated modules.' },
  { letter: 'N', items: 'Node.js, Networking, NoSQL databases', description: 'JavaScript on the server, network basics, and flexible data stores.' },
  { letter: 'O', items: 'Object-oriented programming, OAuth, Optimization', description: 'Class-based design, delegated login, and making software faster.' },
  { letter: 'P', items: 'Python, PHP, Progressive Web Apps (PWA)', description: 'Scripting languages and installable web apps that work offline.' },
  { letter: 'Q', items: 'Query optimization, QA testing, Queue management', description: 'Faster data lookups, quality checks, and background job queues.' },
  { letter: 'R', items: 'RESTful APIs, React, Responsive design', description: 'Standard web APIs, component UIs, and layouts that fit any screen.' },
  { letter: 'S', items: 'SQL, Security best practices, Serverless architecture', description: 'Relational queries, safer systems, and functions that run on demand.' },
  { letter: 'T', items: 'TypeScript, Testing frameworks (Jest, Mocha), Templating engines', description: 'Typed JavaScript, automated tests, and HTML generated from data.' },
  { letter: 'U', items: 'UI/UX implementation, Unit testing, User authentication', description: 'Building usable interfaces, testing small units, and signing users in.' },
  { letter: 'V', items: 'Version control, Vue.js, Virtualization', description: 'Tracking changes, a lightweight UI framework, and isolated environments.' },
  { letter: 'W', items: 'Webpack, Web development, WebSockets', description: 'Bundling assets, building websites, and live two-way connections.' },
  { letter: 'X', items: 'XML parsing, XSS protection, Xcode (iOS development)', description: 'Reading XML, blocking script injection, and Apple app tooling.' },
  { letter: 'Y', items: 'YAML configurations, YARN package manager, Yearly code review', description: 'Readable config files, JS packages, and periodic codebase checks.' },
  { letter: 'Z', items: 'Zero downtime deployment, Zeplin (UI collaboration), Z-index (CSS layering)', description: 'Releases without outages, design handoff, and stacking UI layers.' }
];

function OverviewPanels({ projectsData }) {
  const [seoSearchTerm, setSeoSearchTerm] = useState('');
  const [extraAttendees, setExtraAttendees] = useState(() => {
    const saved = localStorage.getItem('designReviewAttendees');
    return saved ? parseInt(saved, 10) : 87;
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(() => {
    return localStorage.getItem('designReviewSubmitted') === 'true';
  });
  const [chartInView, setChartInView] = useState(false);
  const [referenceTab, setReferenceTab] = useState('seo');
  const analyticsChartRef = useRef(null);

  useEffect(() => {
    const el = analyticsChartRef.current;
    if (!el) return undefined;

    const reveal = () => setChartInView(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);

    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        reveal();
      }
    }, 700);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const searchQuery = seoSearchTerm.trim().toLowerCase();

  const siteSearchIndex = [
    { type: 'Page', title: 'Overview', text: 'Jay Creative work showcase contact email', href: '#' },
    { type: 'Page', title: 'Profile', text: 'about full-stack developer Manila experience CV', href: '#about' },
    { type: 'Page', title: 'Expertise', text: 'skills UI UX graphic design frontend backend Unreal React Node', href: '#skills' },
    { type: 'Page', title: 'Projects', text: 'Shopify ecommerce visualization graphics product design SaaS game Bridgehub job marketplace API', href: '#projects' },
    { type: 'Page', title: 'Career', text: 'experience resume Shopify SaaS game developer real estate', href: '#resume' },
    { type: 'Page', title: 'Contact', text: 'email footer get in touch', href: '#footer' },
    { type: 'Experience', title: 'Shopify Developer', text: 'Liquid CMS custom templates product design theme', href: '#resume' },
    { type: 'Experience', title: 'SaaS Developer', text: 'Next.js React Node PostgreSQL platform', href: '#resume' },
    { type: 'Experience', title: 'Real Estate Editor', text: 'Adobe property marketing design', href: '#resume' },
    { type: 'Experience', title: 'UI Designer & Developer', text: 'Figma React JavaScript C++', href: '#resume' },
    { type: 'Experience', title: 'Game Developer', text: 'Unreal Engine C++ Blueprint action RPG', href: '#resume' },
    ...Object.values(projectsData || {}).map((project) => ({
      type: 'Project',
      title: project.title,
      text: `${project.description} ${project.category} ${(project.tech || []).join(' ')}`,
      href: `#/project/${project.id}`
    }))
  ];

  const globalResults = searchQuery
    ? siteSearchIndex.filter((item) =>
        `${item.title} ${item.text} ${item.type}`.toLowerCase().includes(searchQuery)
      )
    : [];

  const filteredTerms = searchQuery
    ? devTerms.filter((term) =>
        term.letter.toLowerCase().includes(searchQuery) ||
        term.items.toLowerCase().includes(searchQuery) ||
        term.description.toLowerCase().includes(searchQuery)
      )
    : [];

  const openSearchResult = (result) => {
    if (result.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (result.href?.startsWith('#/project/')) {
      window.location.hash = result.href;
      return;
    }
    if (result.href) {
      const target = document.querySelector(result.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="insights">
      {/* Reference */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Reference</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <button
                type="button"
                className={`ecommerce-option-btn${referenceTab === 'seo' ? ' is-active' : ''}`}
                onClick={() => setReferenceTab('seo')}
              >
                SEO
              </button>
              <button
                type="button"
                className={`ecommerce-option-btn${referenceTab === 'devnote' ? ' is-active' : ''}`}
                onClick={() => setReferenceTab('devnote')}
              >
                DevNote
              </button>
            </div>

            {referenceTab === 'seo' ? (
              <div className="mb-2">
                <h3 className="text-2xl text-white mb-4 font-medium tracking-tight">SEO</h3>

                <div className="relative max-w-xl mx-auto mb-4">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                  <input
                    type="search"
                    placeholder="Search pages, projects, and experience..."
                    value={seoSearchTerm}
                    onChange={(e) => setSeoSearchTerm(e.target.value)}
                    className="theme-email-input w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-neutral-500 focus:bg-white/10 focus:border-white/20 outline-none transition-colors"
                  />
                </div>

                <p className="text-sm text-neutral-500 font-medium mb-6">Site search across pages, projects, and experience</p>

                {searchQuery ? (
                  <>
                    {globalResults.length > 0 ? (
                      <div className="space-y-2">
                        {globalResults.map((result) => (
                          <button
                            key={`${result.type}-${result.title}`}
                            type="button"
                            onClick={() => openSearchResult(result)}
                            className="w-full text-left bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
                          >
                            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">{result.type}</span>
                            <p className="text-sm text-white font-medium mt-1">{result.title}</p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-neutral-500">No matching pages or projects.</p>
                    )}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-xs text-neutral-500 text-center">
                        {globalResults.length} site result{globalResults.length === 1 ? '' : 's'} for "{seoSearchTerm}"
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-neutral-500">Type in the search bar to see site results.</p>
                )}
              </div>
            ) : (
              <div className="mb-2">
                <h3 className="text-2xl text-white mb-4 font-medium tracking-tight">DevNote</h3>

                <div className="relative max-w-xl mx-auto mb-4">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                  <input
                    type="search"
                    placeholder="Search development reference notes..."
                    value={seoSearchTerm}
                    onChange={(e) => setSeoSearchTerm(e.target.value)}
                    className="theme-email-input w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-neutral-500 focus:bg-white/10 focus:border-white/20 outline-none transition-colors"
                  />
                </div>

                <p className="text-sm text-neutral-500 font-medium mb-6">A-Z development reference guide</p>

                {(searchQuery ? filteredTerms : devTerms).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {(searchQuery ? filteredTerms : devTerms).map((term, index) => (
                      <div key={term.letter} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-white">{term.letter}</span>
                          <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">{index + 1}</span>
                        </div>
                        <p className="text-sm text-neutral-300 leading-relaxed mb-2">{term.items}</p>
                        <p className="text-xs text-neutral-500 leading-relaxed">{term.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-neutral-500">No matching reference notes.</p>
                )}

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs text-neutral-500 text-center">
                    {(searchQuery ? filteredTerms : devTerms).length} of {devTerms.length} DevNote sections
                    {searchQuery ? ` for "${seoSearchTerm}"` : ''}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Insights</div>
            </div>

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
                <div className="theme-attendee-avatar theme-attendee-jd w-10 h-10 rounded-full border-[3px] flex items-center justify-center text-xs font-bold">JD</div>
                <div className="theme-attendee-avatar theme-attendee-as w-10 h-10 rounded-full border-[3px] flex items-center justify-center text-xs font-bold">AS</div>
                <div className="theme-attendee-avatar theme-attendee-count w-10 h-10 rounded-full border-[3px] flex items-center justify-center text-xs font-bold">+{extraAttendees}</div>
              </div>
              {reviewSubmitted ? (
                <div className="theme-review-badge bg-white/5 text-white text-sm px-5 py-2.5 rounded-full font-semibold border border-white/5">
                  Thank you for the review!
                </div>
              ) : (
                <button
                  className="theme-review-btn bg-white/5 text-white text-sm px-5 py-2.5 rounded-full font-semibold border border-white/5"
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
          </div>
        </div>
      </section>

      {/* Performance */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2.5rem] max-sm:rounded-[1.75rem] p-8 max-sm:p-5 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Performance</div>
            </div>

            <div className="flex flex-row max-sm:flex-col gap-6 md:gap-8 items-stretch">
              <div className="w-1/2 max-sm:w-full flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-4 opacity-80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0">
                      <path d="M3 3v18h18"/>
                      <path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Growth</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl text-white leading-none font-medium tracking-tight">10x</h2>
                </div>

                <div className="mt-8 md:mt-10">
                  <div className="flex mb-4 md:mb-6 space-x-1.5">
                    <div className="h-1.5 w-6 sm:w-8 bg-neutral-800 rounded-full"></div>
                    <div className="h-1.5 w-6 sm:w-8 bg-neutral-700 rounded-full"></div>
                    <div className="h-1.5 w-10 sm:w-12 bg-white rounded-full shadow-none"></div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-snug font-semibold tracking-tight">
                    Iterative progress and improvement.
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-2 md:mt-3 font-medium">performance metrics.</p>
                </div>
              </div>

              <div className="w-1/2 max-sm:w-full flex flex-col min-w-0">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="7" x2="17" y1="8" y2="8"/>
                    <line x1="7" x2="17" y1="12" y2="12"/>
                    <line x1="7" x2="13" y1="16" y2="16"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Analytics</span>
                </div>

                <div ref={analyticsChartRef} className="relative h-40 sm:h-48 md:h-56 mb-3 md:mb-4 flex-1 overflow-hidden">
                  <div className={`analytics-chart absolute inset-0${chartInView ? ' is-visible' : ''}`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 400 220"
                      preserveAspectRatio="none"
                      className="analytics-chart-svg"
                    >
                      <path
                        className="analytics-line analytics-line-blue"
                        d="M0,200 Q67,180 133,160 T267,120 T400,70"
                        pathLength="1"
                        stroke="#3B82F6"
                        strokeWidth="4"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        className="analytics-line analytics-line-green"
                        d="M0,195 Q67,170 133,145 T267,95 T400,30"
                        pathLength="1"
                        stroke="#10B981"
                        strokeWidth="4"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="performance-years flex justify-between text-[10px] sm:text-xs text-neutral-500 font-medium mb-2 md:mb-3">
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                  <span>2026</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Year-over-year analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OverviewPanels;
