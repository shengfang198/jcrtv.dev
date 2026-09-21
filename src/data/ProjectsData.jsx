const ecommerceSample = '/ECOMMERCE/thumbnailecommerce.png'
const ecommerceCustomSample = '/ECOMMERCE/eccomerce2.png'
const archViz1 = '/3DVISUALIZATION/1.jpg'
const archViz2 = '/3DVISUALIZATION/2.jpg'
const archViz3 = '/3DVISUALIZATION/3.jpg'
const archViz4 = '/3DVISUALIZATION/4.jpg'
const archViz5 = '/3DVISUALIZATION/5.jpg'
const archViz6 = '/3DVISUALIZATION/6.jpg'
const archViz7 = '/3DVISUALIZATION/7.jpg'
const archViz8 = '/3DVISUALIZATION/8.jpg'
const archViz9 = '/3DVISUALIZATION/9.jpg'
const archViz10 = '/3DVISUALIZATION/10.jpg'
const figmaAnimation = 'https://drive.google.com/file/d/1KRrW8Bg9ccNf9I82qfNe2WUtX9wb9ffi/view?usp=sharing'
const figmaUiEcommerce = '/FIGMA/prototype.png'
const figmaNNLVS = '/FIGMA/ninelives-prototype.png'
const figmaPresentation = '/FIGMA/VEprototype.png'
const figmaVS = '/FIGMA/VS.png'
const gamedevImage = '/GAMEDEV/indiegame.jpeg'
const saasImage = '/SAAS/thumbnail.png'
const bridgehubImage = '/BRIDGEHUB/bridge-hub-thumbnail.png'
const writelyImage = '/OTHER PROJECTS/WRITELY.png'
const graphicArtist1 = '/GRAPHIC_ARTIST/Untitled-1.png'
const graphicArtist2 = '/GRAPHIC_ARTIST/2.png'
const graphicArtist5 = '/GRAPHIC_ARTIST/MindSole.jpg'
const graphicArtist8 = '/GRAPHIC_ARTIST/Samuraipng.png'
const graphicArtist9 = '/GRAPHIC_ARTIST/Skullpng.png'
const graphicArtboard = '/GRAPHIC_ARTIST/Artboard 1.png'
const graphicProduct = '/GRAPHIC_ARTIST/productdesign.jpg'
const graphicProductThumb2 = '/GRAPHIC_ARTIST/thumbnail2.png'

// Project Data
const projectsData = {
  'ecommerce': {
    id: 'ecommerce',
    title: 'Shopify E-commerce Store',
    description: 'End-to-end Shopify 2.0 development covering product design, custom templates, CMS, merchandising, and checkout.',
    category: 'Shopify 2.0 · End-to-End Development · Custom Templates · CMS',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['Shopify 2.0', 'Liquid', 'Custom Templates', 'Shopify CMS', 'HTML5', 'CSS', 'JavaScript', 'Theme Sections'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a4 4 0 004 4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5a2 2 0 012 2v8"></path><circle cx="9" cy="9" r="2" strokeWidth={1.5}></circle><circle cx="9" cy="15" r="2" strokeWidth={1.5}></circle></svg>,
    caseStudy: [
      {
        title: 'Project Overview',
        content: 'End-to-end Shopify 2.0 development from store concept and product design through custom templates, CMS setup, merchandising, and checkout. I designed the store UI and built Liquid templates, Online Store 2.0 sections, and Shopify-native cart, product, and checkout flows.'
      },
      {
        title: 'Key Features',
        content: '',
        bullets: [
          'End-to-end Shopify store development from design to launch',
          'Custom Shopify 2.0 storefront and brand design',
          'Product design for listings, variants, and merchandising',
          'Custom Liquid templates for home, collection, product, and cart pages',
          'CMS-driven Online Store 2.0 sections and theme editor content',
          'Reusable custom sections and blocks for campaigns',
          'Shopify cart drawer and checkout integration',
          'Metafields for product details and structured content',
          'Responsive layout for desktop and mobile'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'Shopify theme, template, and CMS stack for storefront design and store operations.',
        bullets: [
          'Platform: Shopify 2.0 / Online Store 2.0',
          'Templating: Liquid custom templates',
          'CMS: Shopify theme editor, sections, and metafields',
          'Frontend: HTML5, CSS, JavaScript',
          'Commerce: Shopify products, collections, cart, and checkout'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'Template Shopify themes limited brand identity and merchandising control. The goal was a custom Shopify store that kept native commerce features while giving full control over design, product presentation, and shopping flow.'
      },
      {
        title: 'Solution Approach',
        content: 'An end-to-end Shopify build covering design, templates, CMS, and store operations.',
        bullets: [
          'Owned the storefront from concept through theme development and launch',
          'Designed a custom storefront and product presentation system',
          'Built custom Liquid templates for home, collection, product, and cart pages',
          'Set up CMS-managed sections so store content can be updated without code',
          'Used Shopify checkout, payments, and order handling instead of a custom server'
        ]
      },
      {
        title: 'Design & Technical Challenges',
        content: '',
        bullets: [
          'Challenge: Custom UI without breaking Shopify cart and checkout',
          'Solution: Built theme components on Shopify 2.0 sections and native cart APIs',
          'Challenge: Flexible product content for clothing variants',
          'Solution: Used metafields and variant options for size, color, and product details'
        ]
      },
      {
        title: 'Key Outcomes',
        content: 'Results from the Shopify storefront build.',
        bullets: [
          'End-to-end Shopify store development from design to launch',
          'Custom Shopify 2.0 theme with product design and brand layout',
          'Custom templates for key store pages',
          'CMS-ready sections for merchandising and content updates',
          'Native cart, checkout, and order handling'
        ]
      }
    ],
    results: [
      'End-to-end Shopify store development from design to launch',
      'Custom Shopify 2.0 theme with product design and brand layout',
      'Custom templates for home, collection, product, and cart pages',
      'CMS-managed sections for ongoing content updates',
      'Native cart, checkout, and order handling'
    ],
    samples: [ecommerceSample],
    liveUrl: 'https://3citiesdesign.net/',
    githubUrl: null
  },
  'ecommerce-custom': {
    id: 'ecommerce-custom',
    title: 'E-commerce Clothing Platform',
    description: 'A self-built e-commerce prototype developed for a future clothing business. The project showcases end-to-end product design, interactive shopping flows, and backend-supported authentication and cart functionality.',
    category: 'UI/UX Design · Full-Stack Development · Self-Initiated Project',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'Google OAuth'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a4 4 0 004 4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5a2 2 0 012 2v8"></path><circle cx="9" cy="9" r="2" strokeWidth={1.5}></circle><circle cx="9" cy="15" r="2" strokeWidth={1.5}></circle></svg>,
    caseStudy: [
      {
        title: 'Project Overview',
        content: 'This is a self-employed, full-stack e-commerce prototype created to explore how a modern clothing brand can operate beyond template-based platforms. I designed the UI, interactions, and system structure while implementing a backend server to support authentication, data handling, and scalable logic for future production.'
      },
      {
        title: 'Key Features',
        content: '',
        bullets: [
          'Custom fashion brand (NINELIVES)',
          'Product catalog with multiple designs and variations',
          'Add-to-cart system with real-time updates',
          'Product detail modals and size selection',
          'Google login (OAuth) and database-based authentication',
          'Backend server for user and session handling',
          'Interactive UI animations and transitions',
          'Responsive layout for desktop and mobile'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'Modern web technologies for both frontend and backend implementation.',
        bullets: [
          'Frontend: HTML5, Tailwind CSS, JavaScript',
          'Backend: Node.js, Express.js',
          'Database: User accounts, sessions, cart data',
          'Authentication: Google OAuth, Email/password (database-stored credentials)'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'Generic e-commerce platforms limit branding, interaction design, and control over user experience. The goal was to build a custom solution that allows full control over design, authentication, and shopping behavior.'
      },
      {
        title: 'Solution Approach',
        content: 'A comprehensive approach to building a custom e-commerce platform from the ground up.',
        bullets: [
          'Designed the entire interface and brand system from scratch',
          'Implemented a backend server to manage users, sessions, and cart state',
          'Built frontend interactions that communicate with backend endpoints',
          'Structured the project to scale into payments, order history, and admin tools'
        ]
      },
      {
        title: 'Design & Technical Challenges',
        content: '',
        bullets: [
          'Challenge: Managing cart state across sessions',
          'Solution: Implemented backend-supported cart logic tied to authenticated users',
          'Challenge: Authentication without relying on third-party storefronts',
          'Solution: Integrated Google OAuth alongside traditional database authentication'
        ]
      },
      {
        title: 'Key Outcomes',
        content: 'Measurable results from the custom e-commerce implementation.',
        bullets: [
          'Functional full-stack e-commerce prototype',
          'Backend-driven authentication and cart system',
          'Clean, modern UI tailored for a fashion brand',
          'Strong foundation for future payment and order systems'
        ]
      }
    ],
    results: [
      'Functional full-stack e-commerce prototype',
      'Backend-driven authentication and cart system',
      'Clean, modern UI tailored for a fashion brand',
      'Strong foundation for future payment and order systems'
    ],
    samples: [ecommerceCustomSample],
    liveUrl: 'https://nnlvsstore.onrender.com/index.html',
    githubUrl: 'https://github.com/jaycreative/ecommerce-platform'
  },
  '3d-visualization': {
    id: '3d-visualization',
    title: '3D Visualization',
    description: 'Photorealistic 3D visualizations and interior design presentations for residential and commercial spaces.',
    category: 'Interior Design · Architectural Visualization',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Architect Studio',
    duration: '2 months',
    tech: ['Blender', 'Unreal Engine', 'AutoCAD', 'V-Ray', 'Adobe Photoshop', 'Adobe Illustrator'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.27 16.5 9.73" strokeWidth={1.5}></polyline><line x1="2.0" y1="11.1" x2="22" y2="11.1" strokeWidth={1.5}></line></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'I provide end-to-end interior design and 3D visualization, helping clients understand how a space will look, feel, and function before construction begins.'
      },
      {
        title: 'Services Provided',
        content: '',
        bullets: [
          'Interior design concept development',
          'Space planning and layout optimization',
          '3D modeling for interior and exterior spaces',
          'Photorealistic rendering for presentations and marketing',
          'Material, furniture, and lighting selection',
          'Design visualization based on real construction constraints'
        ]
      },
      {
        title: 'Tech Stack',
        content: '',
        bullets: [
          'Blender – 3D modeling and scene setup',
          'Unreal Engine – real-time visualization and walkthroughs',
          'AutoCAD – technical drawings and accurate plans',
          'V-Ray – photorealistic lighting and rendering',
          'Adobe Photoshop / Illustrator – post-processing, layout, and graphic assets'
        ]
      },
      {
        title: 'Client Challenge',
        content: 'An architecture firm needed clear, realistic visualizations and interior concepts so clients could understand proposed designs before construction and approvals.'
      },
      {
        title: 'Design & Technical Implementation',
        content: 'I developed a complete interior design and 3D visualization pipeline, starting from architectural plans and ending with photorealistic, client-ready presentations.',
        bullets: [
          'Created detailed 3D models based on AutoCAD drawings',
          'Designed practical interior layouts with correct proportions and circulation',
          'Developed realistic materials and textures matching real-world finishes',
          'Built advanced lighting setups to simulate natural and artificial light',
          'Produced photorealistic interior and exterior renders',
          'Applied post-processing to enhance realism, mood, and clarity'
        ]
      },
      {
        title: 'Workflow Optimization',
        content: 'To improve efficiency and consistency, I: Built reusable material libraries and lighting presets, created modular furniture and asset templates, and standardized scene setup, render settings, and presentation layouts. This reduced production time by approximately 60% on similar projects while maintaining high visual and design quality.'
      }
    ],
    results: [
      'Delivered 15+ high-quality interior and exterior visualizations',
      'Improved client understanding of design intent and spatial layout',
      'Faster approvals due to clearer, more realistic presentations',
      'Established a repeatable design and visualization workflow for future projects'
    ],
    samples: [archViz1, archViz2, archViz3, archViz4, archViz5, archViz6, archViz7, archViz8, archViz9, archViz10],
    liveUrl: null,
    githubUrl: null
  },
  'graphic-product-design': {
    id: 'graphic-product-design',
    title: 'Graphic Design / Product Design',
    description: 'Graphic design and product design for branding, apparel, packaging, and presentation-ready visuals.',
    category: 'Graphic Design / Product Design',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Various Clients',
    duration: 'Ongoing Projects',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Blender'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l7-7 3 3-7 7-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><circle cx="11" cy="11" r="2" strokeWidth={1.5}></circle></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'I create brand visuals, apparel graphics, product concepts, and presentations that are clear, consistent, and ready for print, digital, or launch.'
      },
      {
        title: 'Services Provided',
        content: '',
        bullets: [
          'Brand and visual identity design',
          'Poster, apparel, and campaign graphics',
          'Product design concepts and form studies',
          'Packaging visuals and product hero shots',
          '3D product modeling, materials, and presentation'
        ]
      },
      {
        title: 'Tech Stack',
        content: '',
        bullets: [
          'Adobe Photoshop – retouching, mockups, and campaign art',
          'Adobe Illustrator – vector graphics, logos, packaging, and print assets',
          'Figma – layout exploration and design systems',
          'Blender – product modeling and presentation renders'
        ]
      },
      {
        title: 'Client Challenge',
        content: 'Clients needed brand-ready graphic assets and product visuals that communicated identity, form, and material across print, apparel, digital, and pre-launch presentations.'
      },
      {
        title: 'Design & Technical Implementation',
        content: 'I built a graphic and product design workflow from concept through production-ready and presentation-ready assets.',
        bullets: [
          'Developed graphic systems for brand, apparel, and campaign use',
          'Created product form, packaging, and surface-detail studies',
          'Rendered product hero shots with accurate materials and lighting',
          'Prepared print-ready and digital artwork for production'
        ]
      },
      {
        title: 'Workflow Optimization',
        content: 'Reusable mockup templates, lighting setups, and graphic layouts reduced turnaround time while keeping brand and product presentation consistent.'
      }
    ],
    results: [
      'Delivered graphic and product design assets for branding, marketing, and launch',
      'Stronger visual identity across print, apparel, and digital use',
      'Product concepts presented with clear form, materials, and hero shots',
      'Faster production handoff through organized artwork and mockups'
    ],
    samples: [graphicArtist8, graphicArtist9, graphicArtist1, graphicArtist2, graphicArtist5, graphicProduct, graphicArtboard, graphicProductThumb2],
    liveUrl: null,
    githubUrl: null
  },
  'ai-agent-automation': {
    id: 'ai-agent-automation',
    title: 'AI Agent / Automation',
    description: 'An AI agent that helps users with everyday tasks, research, and connected tools so work can move from question to result without switching apps.',
    category: 'AI Agent · Research · Tools · Automation',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Ongoing Project',
    tech: ['OpenAI', 'Tool Calling', 'Web Search', 'Python', 'Node.js', 'PostgreSQL', 'APIs'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="8" width="6" height="6" rx="1" strokeWidth={1.5}></rect><rect x="15" y="4" width="6" height="6" rx="1" strokeWidth={1.5}></rect><rect x="15" y="14" width="6" height="6" rx="1" strokeWidth={1.5}></rect><path d="M9 11h3M12 7v8" strokeWidth={1.5} strokeLinecap="round"></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'This AI agent is built to help with the work people do all day: research a topic, break a task into steps, use the right tools, and return a clear result. Instead of jumping between search, notes, and apps, the user asks once and the agent handles the follow-through.'
      },
      {
        title: 'What It Helps With',
        content: '',
        bullets: [
          'Everyday tasks: planning, follow-ups, summaries, and next-step checklists',
          'Research: gathering sources, comparing options, and turning findings into a short brief',
          'Tools: calling search, docs, calendars, and APIs when a task needs more than text',
          'Automation: repeating the same workflow so the user does not redo it by hand'
        ]
      },
      {
        title: 'How It Works',
        content: 'The agent reads the request, chooses a plan, and uses tools when needed.',
        bullets: [
          'Understands the goal in plain language',
          'Breaks the job into research, action, and review steps',
          'Uses connected tools to search, fetch data, and complete the task',
          'Returns a usable answer, file, or next action instead of leftover notes'
        ]
      },
      {
        title: 'Tech Stack',
        content: '',
        bullets: [
          'OpenAI – reasoning, planning, and natural-language help',
          'Tool calling – research, search, and app actions from one agent',
          'Python / Node.js – agent logic and tool adapters',
          'PostgreSQL – database for tasks, research, and agent history',
          'APIs – connect calendars, docs, and internal systems'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'People lose time switching tabs to research, copy results into another tool, and repeat the same task later. The agent keeps the task, the research, and the tools in one place.'
      },
      {
        title: 'Solution Approach',
        content: 'I designed the agent around a simple loop: understand the task, research if needed, use tools, then deliver a result the user can act on.',
        bullets: [
          'Task-first prompts so the agent starts with what the user wants done',
          'Research tools for sources, comparisons, and summaries',
          'Connected actions so the agent can move beyond chat into real work'
        ]
      }
    ],
    results: [
      'One agent for daily tasks, research, and tool use',
      'Faster path from a question to a finished brief or action',
      'Repeatable workflows that the agent can run again without extra setup'
    ],
    samples: ['/AI/ai-agent-thumbnail.png'],
    liveUrl: null,
    githubUrl: null
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI UX Design',
    description: 'Creative UI/UX projects showcasing user interface design, interaction design, and digital product solutions.',
    category: 'UI/UX Design',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Various Clients',
    duration: 'Ongoing Projects',
    tech: ['Figma'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={1.5}></circle><circle cx="12" cy="12" r="6" strokeWidth={1.5}></circle><circle cx="12" cy="12" r="2" strokeWidth={1.5}></circle></svg>,
    caseStudy: [
      {
        title: 'Design Overview',
        content: 'I provide comprehensive UI/UX design services that transform ideas into intuitive, user-friendly digital experiences. My work focuses on creating interfaces that are visually appealing, functional, and optimized for usability.'
      },
      {
        title: 'Services Offered',
        content: 'Complete UI/UX design solutions across digital platforms:',
        bullets: [
          'Complete UI/UX design solutions across digital platforms:',
          'User interface (UI) design',
          'Interaction and experience design',
          'Prototyping and wireframing',
          'Usability testing and iterations',
          'Design system creation'
        ]
      },
      {
        title: 'Design Process',
        content: 'A systematic approach to designing digital products that meet client goals and provide seamless user experiences:',
        bullets: [
          'A systematic approach to designing digital products that meet client goals and provide seamless user experiences:',
          'Research and user analysis',
          'Mood board and concept development',
          'Wireframing and prototyping in Figma',
          'Visual design and interface refinement',
          'Client feedback and iterations',
          'Handoff and documentation'
        ]
      },
      {
        title: 'Technical Skills',
        content: 'Proficiency with Figma and digital design best practices:',
        bullets: [
          'Proficiency with Figma and digital design best practices:',
          'Figma for UI/UX design and collaborative workflow',
          'Wireframing, prototyping, and interactive components',
          'Design system creation and management',
          'Responsive and adaptive design',
          'Handoff to developers with Figma specifications'
        ]
      },
      {
        title: 'Client Challenge',
        content: 'The client needed an intuitive and visually appealing digital product that enhanced usability and engagement while reflecting their brand identity.'
      },
      {
        title: 'Creative Approach',
        content: '',
        bullets: [
          'Conducted user research and competitor analysis',
          'Developed wireframes and interactive prototypes',
          'Created a cohesive UI with consistent typography, color, and layout',
          'Designed a responsive interface optimized for multiple devices',
          'Iterated based on usability testing and client feedback'
        ]
      }
    ],
    results: [
      'Delivered user-centric UI/UX solutions for 10+ clients',
      'Improved usability and engagement metrics for featured clients',
      'Established organized Figma design systems for consistent workflows',
      'Streamlined collaboration with developers via Figma handoff'
    ],
    samples: [figmaNNLVS, figmaAnimation, figmaUiEcommerce, figmaPresentation, figmaVS],
    liveUrl: null,
    githubUrl: null
  },
  'saas-platform': {
    id: 'saas-platform',
    title: 'Editing Services SaaS',
    description: 'A deployment-ready cloud-based editing services platform designed to manage orders, editors, revisions, payments, and real-time collaboration in a single, structured system.',
    category: 'SaaS Platform · Full-Stack Application',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Production-Ready SaaS Project',
    tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Docker', 'OnRender', 'Supabase', 'PayPal', 'React'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeWidth={1.5}></rect><line x1="16" x2="16" y1="2" y2="6" strokeWidth={1.5}></line><line x1="8" x2="8" y1="2" y2="6" strokeWidth={1.5}></line><line x1="3" x2="21" y1="10" y2="10" strokeWidth={1.5}></line><path d="M8 14h.01" strokeWidth={2}></path><path d="M12 14h.01" strokeWidth={2}></path><path d="M16 14h.01" strokeWidth={2}></path><path d="M8 18h.01" strokeWidth={2}></path><path d="M12 18h.01" strokeWidth={2}></path><path d="M16 18h.01" strokeWidth={2}></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'This project is a full-featured Editing Services SaaS, built to support real-world creative service workflows at scale. The platform centralizes client orders, editor assignments, revisions, communication, and payments—eliminating fragmented tools like email, chat apps, and shared drives. The system is designed to be ready for deployment, with a complete backend, role management, scalable data structure, and a comprehensive Admin Management System that allows administrators to oversee users, editors, orders, revisions, payments, and platform-wide activity in real time.'
      },
      {
        title: 'Tech Stack',
        content: '',
        bullets: [
          'Next.js – frontend application and UI',
          'PostgreSQL – relational database for structured business logic',
          'Socket.io – real-time updates and messaging',
          'Docker – containerized services for deployment consistency',
          'Supabase – managed database, authentication, and backend services',
          'OnRender – cloud hosting, builds, and production deployment'
        ]
      },
      {
        title: 'Business Problem',
        content: 'Editing service businesses often struggle with: Unstructured client requests, Unclear revision history, Manual editor assignment and tracking, Scattered communication and file handling. The goal was to build a single SaaS platform that manages the entire editing lifecycle—from order placement to final delivery.'
      },
      {
        title: 'Product Development',
        content: 'I designed and implemented a complete backend-driven SaaS system with clear separation of concerns and real operational logic.',
        bullets: [
          'User authentication, sessions, and role management',
          'Editing service listings with variants and options',
          'Order creation, status tracking, and timers',
          'Editor onboarding, applications, availability, and assignments',
          'Revision cycles with image/file versioning',
          'Real-time chat and notification system',
          'Payment, refund, and review handling',
          'Activity logging and reporting for auditing and insights'
        ]
      },
      {
        title: 'Backend & Data Architecture',
        content: 'The platform is supported by a comprehensive relational database, covering all critical workflows: Users & Roles: users, roles, user_roles, user_sessions, preferences. Orders & Services: services, service_variants, orders, statuses, order_timers. Editing Workflow: original_image, revision_images, final_outputs, card_revisions. Editors Management: editors, editor_applications, editor_assignments, availability, salaries, stats. Collaboration: chat_messages, notifications, notification_history. Payments & Trust: payments, refunds, reviews, reports. System Support: activity_logs, test_files, file categories, industries. This structure supports scalability, traceability, and future automation.'
      },
      {
        title: 'Scalability & Deployment Readiness',
        content: 'Designed for multi-user and multi-team usage. Optimized relational queries for high-volume orders and revisions. WebSocket-based updates for live order and chat status. Dockerized setup for consistent staging and production deployment. Cloud-ready stack hosted on OnRender with Supabase for data, auth, and backend services.'
      }
    ],
    results: [
      'Built a complete, deployable Editing Services SaaS platform',
      'Implemented real-world business logic for creative service operations',
      'Reduced workflow complexity by centralizing editing, revisions, and communication',
      'Established a strong foundation for launch, onboarding, and monetization',
      'Self-Initiated / Production-Ready SaaS Project Prepared for deployment and future commercial use.'
    ],
    samples: [saasImage],
    liveUrl: 'https://virtual-editor-dsel.onrender.com/',
    githubUrl: null,
    videoUrl: 'https://drive.google.com/file/d/1esW-PrXno8xpOhAgaIc_tsoMrLbQD8Ye/view?usp=sharing'
  },
  'action-rpg': {
    id: 'action-rpg',
    title: 'Action RPG Game',
    description: 'Full 3D action RPG game built with Unreal Engine featuring immersive combat and storytelling.',
    category: 'Game Development',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Indie Game Studio',
    duration: '8 months',
    tech: ['Unreal Engine 5', 'C++', 'Blueprint'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18V12h6v6a6 6 0 0 1-12 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12a6 6 0 1-5.5-3.5M9 12a6 6 0 1 5.5-3.5"></path></svg>,
    caseStudy: [
      {
        title: 'Game Vision',
        content: 'The studio wanted to create an immersive action RPG that combined modern gameplay mechanics with compelling storytelling and well-crafted combat systems.'
      },
      {
        title: 'Development Approach',
        content: 'I am developing this game in Unreal Engine 5, focusing on performance optimization and gameplay innovation. I also implement an AI system for NPCs.',
        bullets: [
          'Custom combat mechanics and skill systems',
          'Dynamic world generation and quest system',
          'Character customization and progression',
          'AI system for NPC behavior and encounters',
          'Performance optimization for cross-platform deployment'
        ]
      },
      {
        title: 'Technical Achievements',
        content: 'Successfully implemented complex gameplay systems while maintaining stable performance across multiple platforms.'
      }
    ],
    results: [
      'Completed a self-initiated 3D action RPG prototype in Unreal Engine 5',
      'Implemented combat, progression, quest, and NPC AI systems in C++ and Blueprint',
      'Optimized gameplay performance for a stable single-player experience'
    ],
    liveUrl: null,
    githubUrl: null,
    samples: [gamedevImage],
    videoUrl: 'https://drive.google.com/file/d/1JV07gceyZxg9YEmryIJA2s7oUIwGK76X/view?usp=sharing'
  },
  'bridgehub': {
    id: 'bridgehub',
    title: 'Bridgehub',
    description: 'Bridgehub is jobs, learning, placement, and community in one place: an agency hub with job listings, a simple forum, and space to build with others.',
    category: 'Agency · Jobs · Learning · Placement · Community',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Coming Project',
    tech: ['React', 'Vite', 'REST APIs', 'Forum', 'OnRender'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={1.5}></rect><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path strokeLinecap="round" strokeWidth={1.5} d="M2 13h20"></path></svg>,
    caseStudy: [
      {
        title: 'Project Overview',
        content: 'Bridgehub is built as a single place for jobs, learning, placement, and community. It works like an agency hub: people can browse job listings, follow learning paths, find placement support, and talk in a simple forum instead of spreading that work across separate sites.'
      },
      {
        title: 'What It Includes',
        content: '',
        bullets: [
          'Agency hub for talent, clients, and placement in one workspace',
          'Job listings with search, role details, and apply flow',
          'Learning space for skills, guides, and progress toward roles',
          'Placement support that connects candidates with openings',
          'Simple forum for community questions, builds, and discussion',
          'Build area where users can share work and follow projects'
        ]
      },
      {
        title: 'Key Features',
        content: '',
        bullets: [
          'Jobs, learning, placement, and community in one product',
          'Job cards with company, location, and tags',
          'Forum threads for help, builds, and community updates',
          'Shared profiles so listing, learning, and placement stay connected'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'Web app for listings, learning, placement, and a lightweight community forum.',
        bullets: [
          'Frontend: React and Vite',
          'Listings and community: REST APIs with a simple forum model',
          'Hosting: OnRender'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'Job boards, courses, placement, and community usually live in different products. People lose context when they apply somewhere, learn somewhere else, and ask questions in a third place. Bridgehub keeps those pieces together.'
      },
      {
        title: 'Solution Approach',
        content: 'I designed Bridgehub as one hub with four connected surfaces: jobs, learning, placement, and a simple forum for the community.',
        bullets: [
          'Job listing flow for search, detail, and apply',
          'Learning and placement paths tied to the same user profile',
          'Forum for community discussion without extra social overhead',
          'Agency-style layout so talent and openings meet in one place'
        ]
      }
    ],
    results: [
      'One hub for jobs, learning, placement, and community',
      'Agency, job listing, build, and simple forum in a single product',
      'Clearer path from learning a skill to applying and joining the community'
    ],
    samples: [bridgehubImage],
    liveUrl: 'https://bridgehub-hp5e.onrender.com/',
    githubUrl: null
  },
  'writely': {
    id: 'writely',
    title: 'Writely',
    description: 'AI-powered docs editor and notes app for drafting, organizing, and refining writing in one place.',
    category: 'Docs Editor · Notes · AI',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['React', 'AI', 'OnRender', 'Docs Editor', 'Notes'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20h9"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>,
    caseStudy: [
      {
        title: 'Project Overview',
        content: 'Writely is a docs editor and notes workspace powered by AI. It helps users capture ideas, structure documents, and refine writing with AI assistance in a clean, focused interface.'
      },
      {
        title: 'Key Features',
        content: '',
        bullets: [
          'Document and notes editing in one workspace',
          'AI-assisted drafting and refinement',
          'Organized writing flow for docs and notes',
          'Cloud-hosted live demo on OnRender'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'Web-based writing app with AI-assisted editing and cloud deployment.',
        bullets: [
          'Frontend: React',
          'Capabilities: docs editing, notes, AI assistance',
          'Hosting: OnRender'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'Writers and builders often split notes, drafts, and AI tools across separate apps. Writely brings docs, notes, and AI help into one editor.'
      },
      {
        title: 'Solution Approach',
        content: 'I built a focused writing environment where users can create notes and documents while using AI to support drafting and iteration.',
        bullets: [
          'Unified docs and notes experience',
          'AI support for writing and refinement',
          'Deployed as a live web app for easy access'
        ]
      }
    ],
    results: [
      'Shipped a live AI-powered docs and notes editor',
      'Combined document writing and note-taking in one product',
      'Made the app available as a hosted demo on OnRender'
    ],
    samples: [writelyImage],
    liveUrl: 'https://writely-uly4.onrender.com/',
    githubUrl: null
  }
};

export default projectsData;

