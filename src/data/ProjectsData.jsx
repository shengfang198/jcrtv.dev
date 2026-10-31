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
const bridgehubImage = '/BRIDGEHUB/Screenshot 2026-10-25 203802.png'
const writelyImage = '/WRITELY/Screenshot 2026-10-26 064242.png'
const graphicArtist1 = '/GRAPHIC_ARTIST/Untitled-1.png'
const graphicArtist2 = '/GRAPHIC_ARTIST/2.png'
const graphicArtist5 = '/GRAPHIC_ARTIST/MindSole.jpg'
const graphicArtist8 = '/GRAPHIC_ARTIST/Samuraipng.png'
const graphicArtist9 = '/GRAPHIC_ARTIST/Skullpng.png'
const graphicArtboard = '/GRAPHIC_ARTIST/Artboard 1.png'
const graphicProduct = '/GRAPHIC_ARTIST/productdesign.jpg'
const graphicProductThumb2 = '/GRAPHIC_ARTIST/thumbnail2.png'
const graphicMockup = '/GRAPHIC_ARTIST/mockup.png'

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
    title: 'Nine Lives',
    description: 'Ecommerce site for the Nine Lives clothing line, with a React catalog, a signed-in cart, and Google accounts stored in Postgres.',
    category: 'Full-Stack Development · Ecommerce',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Google Sign-In'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a4 4 0 004 4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5a2 2 0 012 2v8"></path><circle cx="9" cy="9" r="2" strokeWidth={1.5}></circle><circle cx="9" cy="15" r="2" strokeWidth={1.5}></circle></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'Nine Lives is a custom ecommerce site for the clothing line. The live site is a React catalog, and Express serves the app plus the account and cart API. Shoppers browse pieces, pick a size, and check out only after signing in with Google.'
      },
      {
        title: 'Catalog',
        content: 'The shop covers the pages a clothing brand needs before a sale.',
        bullets: [
          'Home, catalog, and product pages for the Nine Lives line',
          'Size and quantity selection on each product',
          'Cart with add and remove for the signed-in shopper',
          'Checkout that confirms the order for that account',
          'Account page with name, email, and role',
          'Brand pages for the vibe, FAQ, and terms'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'The client and API are separate apps in one repo, and the API is what the browser calls.',
        bullets: [
          'Frontend: React, Vite, Tailwind CSS, and React Router',
          'Backend: Node.js and Express',
          'Database: PostgreSQL for users and client or admin roles',
          'Auth: Google sign-in, verified on the server, then a JWT for later requests',
          'Deploy: the site is live on OnRender, with Docker Compose for the API and Postgres'
        ]
      },
      {
        title: 'Accounts and Cart',
        content: 'Sign-in is Google only. The server checks the Google token, stores the account in Postgres, and returns a short-lived JWT. Cart routes require that token. Each signed-in shopper has their own cart, with size and quantity, so the catalog can stay public while the cart stays private.'
      }
    ],
    results: [
      'Shipped Nine Lives as a React and Express ecommerce site',
      'Google sign-in with accounts and roles stored in PostgreSQL',
      'Signed-in cart with size and quantity, plus a checkout step',
      'Live at nnlvsstore.onrender.com'
    ],
    samples: [ecommerceCustomSample],
    liveUrl: 'https://nnlvsstore.onrender.com/',
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
    samples: [graphicArtist8, graphicArtist9, graphicArtist1, graphicArtist2, graphicArtist5, graphicProduct, graphicMockup, graphicArtboard, graphicProductThumb2],
    liveUrl: null,
    githubUrl: null
  },
  'ai-agent-automation': {
    id: 'ai-agent-automation',
    title: 'Nova',
    description: 'A visual workflow builder for AI agents, with chat, browser tasks, and saved memory.',
    category: 'AI Workflows · Browser Agent',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Ongoing Project',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Playwright', 'OpenAI', 'Electron'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="8" width="6" height="6" rx="1" strokeWidth={1.5}></rect><rect x="15" y="4" width="6" height="6" rx="1" strokeWidth={1.5}></rect><rect x="15" y="14" width="6" height="6" rx="1" strokeWidth={1.5}></rect><path d="M9 11h3M12 7v8" strokeWidth={1.5} strokeLinecap="round"></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'Nova is a visual workflow builder. A blueprint is a graph of nodes on a canvas. Connecting those nodes defines the run. The same app also has chat, browser tasks, and saved memory. Blueprint runs stay queued until a worker is running. API keys stay on the server.'
      },
      {
        title: 'Canvas',
        content: 'The editor is a React Flow canvas with a node library, a selected-node panel, and a Run control.',
        bullets: [
          'Flow nodes for a manual start, chat, input, conditions, switch, loop, delay, approval, and output',
          'An agent node and a model node for the LLM step',
          'Tool nodes for the browser, page research, document extraction, HTTP requests, a custom app action, and Gmail',
          'Logic and storage nodes for math, text, run variables, CSV export, and Postgres rows',
          'Saved blueprints that can be reopened and run again'
        ]
      },
      {
        title: 'Runs',
        content: 'Clicking Run validates the graph, queues the job, and lets the worker execute nodes in dependency order.',
        bullets: [
          'Outputs pass from one node to the nodes connected after it',
          'Conditions and switches choose a branch',
          'An approval node pauses until a person continues the run',
          'Browser work uses Playwright in the worker, not in the page request',
          'Stop on the canvas cancels a run that is already going',
          'Chat and sign-in work without Redis. Blueprint runs and browser tasks need the worker'
        ]
      },
      {
        title: 'Memory and Vault',
        content: 'Chat can keep a memory of earlier exchanges in Postgres. Tool credentials do not live in the website.',
        bullets: [
          'Memory is scored and stored per account, with embeddings when pgvector is available',
          'Nova Vault is an Electron app on the user\'s PC. Credentials stay encrypted there',
          'A blueprint step that needs a vault key is sent to that desktop app. The browser does not hold the secret',
          'Gmail and custom app actions require a credential picked in the vault'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'The site, API, and worker are one TypeScript repo.',
        bullets: [
          'Frontend: React, Vite, TypeScript, Tailwind CSS, and React Flow',
          'API: Express, with Socket.IO for run updates',
          'Data: PostgreSQL',
          'Jobs: Redis and BullMQ',
          'AI: OpenAI, called from the server',
          'Browser: Playwright and Chromium',
          'Desktop: Electron Nova Vault'
        ]
      }
    ],
    results: [
      'A canvas where an AI workflow is a graph of connected nodes',
      'Queued blueprint and browser runs, with approval and stop',
      'Chat memory in Postgres, and tool credentials kept in the desktop vault'
    ],
    samples: ['/AI/Screenshot 2026-10-19 065349.png'],
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
    title: 'Virtual Editor',
    description: 'A real estate photo editing workspace for client orders, editor revisions, and PayPal checkout.',
    category: 'Real Estate Editing · SaaS',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Production-Ready SaaS Project',
    tech: ['React', 'Vite', 'Express', 'PostgreSQL', 'Supabase', 'PayPal', 'Socket.io', 'Redis'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeWidth={1.5}></rect><line x1="16" x2="16" y1="2" y2="6" strokeWidth={1.5}></line><line x1="8" x2="8" y1="2" y2="6" strokeWidth={1.5}></line><line x1="3" x2="21" y1="10" y2="10" strokeWidth={1.5}></line><path d="M8 14h.01" strokeWidth={2}></path><path d="M12 14h.01" strokeWidth={2}></path><path d="M16 14h.01" strokeWidth={2}></path><path d="M8 18h.01" strokeWidth={2}></path><path d="M12 18h.01" strokeWidth={2}></path><path d="M16 18h.01" strokeWidth={2}></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'Virtual Editor is a photo editing workspace for real estate listings. A client picks a service, uploads files, and pays with PayPal. An editor works the order, handles revisions, and delivers the finals. Owner and admin tools cover the catalog, the team, payments, and activity.'
      },
      {
        title: 'Orders',
        content: 'An order moves through a fixed set of statuses, from pending and in progress to revision, review, and delivery.',
        bullets: [
          'A service catalog with industries, variants, options, and file categories',
          'Drafts that can be continued, then added to a cart',
          'PayPal checkout created on the server before the order is booked',
          'Originals, revision images, and final outputs in private storage',
          'A timer on active editor work, and a due window once an order is in revision',
          'Order chat, with live updates over Socket.IO'
        ]
      },
      {
        title: 'Roles',
        content: 'Each account opens the workspace that matches its role.',
        bullets: [
          'Clients place orders, follow status, and download delivery',
          'Editors work assigned orders, revisions, and resources',
          'Leaders manage editors and salaries',
          'Affiliates and management have their own dashboards',
          'Owner and admin cover users, services, transactions, quality check, catalog requests, and activity logs'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'The browser talks to Express. Postgres and file storage stay on the server side.',
        bullets: [
          'Frontend: React, Vite, Tailwind CSS, and React Router',
          'API: Express, with Google sign-in and server-side sessions',
          'Data: PostgreSQL on Supabase, plus private buckets for uploads',
          'Payments: PayPal, created and confirmed on the server',
          'Live updates: Socket.IO, with Redis when more than one API process is running',
          'Images: Sharp for processing uploads',
          'Local run: Docker Compose for the app and API'
        ]
      }
    ],
    results: [
      'One workspace for real estate photo orders, revisions, and delivery',
      'PayPal checkout and private file storage handled on the server',
      'Separate dashboards for clients, editors, leaders, and admins'
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
    description: 'An agency site and workspace for staff chat, client assignments, and agent time tracking.',
    category: 'Agency CRM · Workspace · Time Tracking',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Live Project',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL', 'S3', 'Electron'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={1.5}></rect><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path strokeLinecap="round" strokeWidth={1.5} d="M2 13h20"></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'Bridgehub is an agency site and the workspace behind it. Public pages cover the company, careers, jobs, courses, a forum, and contact. Owner, admin, agent, and client accounts open the workspace. A desktop tracker records agent time against the weekly schedule.'
      },
      {
        title: 'Workspace',
        content: 'Accounts, sessions, chat, and the agent lists are stored in Postgres. There is one owner, created on first boot.',
        bullets: [
          'Owner and admin create admins, agents, and clients. Public registration only creates a member, who stays on the public site',
          'Client threads are shared with the owner and admins. Agent threads are shared with admins. Admin threads go to the owner',
          'Assigning a client to one agent opens a private thread between that pair. Reassigning moves access to the new agent',
          'An agent keeps tasks, deliverables, requests, a calendar, deadlines, contacts, files, notes, and time entries',
          'Reports count open work, deliverables sent, and minutes logged. Activity records creates and completions'
        ]
      },
      {
        title: 'Time Tracker',
        content: 'Agents clock in from a desktop app. The API checks that time against the schedule set by the owner or an admin.',
        bullets: [
          'Clock in, break, and clock out',
          'Counted time pauses during a break',
          'Screenshots and focus reports are sent to the API',
          'Stored files can go to S3 when that bucket is configured'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'The site proxies API calls. The browser never opens Postgres.',
        bullets: [
          'Frontend: React, Vite, and Tailwind CSS',
          'API: Express, with SQL migrations on boot',
          'Database: PostgreSQL, with bcrypt passwords and an httpOnly session cookie',
          'Files: S3-compatible object storage',
          'Desktop: Electron tracker for Windows'
        ]
      }
    ],
    results: [
      'A public agency site and a role-based workspace in one product',
      'Staff chat and one assigned agent per client',
      'Desktop time tracking tied to the weekly schedule'
    ],
    samples: [bridgehubImage],
    liveUrl: 'https://bridgehub-global.com',
    githubUrl: null
  },
  'writely': {
    id: 'writely',
    title: 'Writely',
    description: 'A document and notes editor with a design canvas, a 3D studio, and a writing assistant.',
    category: 'Docs · Notes · Design · AI',
    color: 'bg-purple-500/20',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['React', 'ProseMirror', 'Express', 'PostgreSQL', 'pgvector', 'OpenAI', 'PayPal'],
    icon: <svg className="w-5 h-5 text-fuchsia-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20h9"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'Writely is a document and notes editor. Documents use a paginated page. Notes use a dotted sheet. The same account can open a design canvas, a 3D studio, and a writing assistant that searches that user\'s saved writing.'
      },
      {
        title: 'Writing',
        content: 'Notes and documents are saved to Postgres for the signed-in account.',
        bullets: [
          'Notes with a pin and a word count',
          'Documents on A0 through A8 paper, with heading styles, built on ProseMirror',
          'Import for .docx, .md, .markdown, and .txt files up to 8 MB',
          'Export to .txt, .html, .pdf, or .docx, plus merge and print',
          'Free, Plus, and Pro plans. Plus is $8 a month and Pro is $16. Paid plans go through PayPal on the server',
          'The assistant is included on Plus and Pro. Admins are not limited by the plan caps'
        ]
      },
      {
        title: 'Design and Assistant',
        content: 'Design files and the assistant sit next to the writing, and both stay on the account.',
        bullets: [
          'A design canvas that can export PNG, JPEG, SVG, or PDF',
          'A 3D studio for scenes, with local scene files when the database is down',
          'Blueprint canvases that can be saved and run',
          'The assistant calls GPT from the server. It searches the user\'s notes and documents with pgvector and can write into the open item after confirmation',
          'The API key never goes to the browser'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'The site and API are one repo. Vite proxies API calls in development.',
        bullets: [
          'Frontend: React, Vite, and Tailwind CSS',
          'Editor: ProseMirror',
          'API: Express, with JWT sessions in cookies',
          'Database: PostgreSQL, including the vector extension for search',
          'AI: OpenAI chat and embeddings, called from the server',
          'Billing: PayPal subscriptions',
          'Files: S3 for design images'
        ]
      }
    ],
    results: [
      'Documents, notes, design, and a 3D studio on one account',
      'A writing assistant that searches saved work and writes into the open item',
      'Free, Plus, and Pro plans, with PayPal handled on the server'
    ],
    samples: [writelyImage],
    liveUrl: 'https://writely-editor.onrender.com/',
    githubUrl: null
  }
};

export const projectOrder = [
  'ecommerce',
  'ai-agent-automation',
  'saas-platform',
  'writely',
  '3d-visualization',
  'ui-ux',
  'bridgehub',
  'action-rpg',
  'graphic-product-design',
  'ecommerce-custom'
];

export default projectsData;

