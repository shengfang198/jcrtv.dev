const ecommerceSample = '/ECOMMERCE/thumbnailecommerce.png'
const ecommerceCustomSample = '/ECOMMERCE/eccomerce.png'
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
const figmaEasylife = '/FIGMA/easylife.png'
const figmaUiEcommerce = '/FIGMA/eccomerce.png'
const figmaNNLVS = '/FIGMA/NNLVS.png'
const figmaPresentation = '/FIGMA/presentation.png'
const figmaVS = '/FIGMA/VS.png'
const gamedevImage = '/GAMEDEV/indiegame.jpeg'
const saasImage = '/SAAS/thumbnail.png'
const bridgehubImage = '/BRIDGEHUB/bridge-hub-thumbnail.png'
const graphicArtist1 = '/GRAPHIC_ARTIST/Untitled-1.png'
const graphicArtist2 = '/GRAPHIC_ARTIST/2.png'
const graphicArtist5 = '/GRAPHIC_ARTIST/MindSole.jpg'
const graphicArtist8 = '/GRAPHIC_ARTIST/Samuraipng.png'
const graphicArtist9 = '/GRAPHIC_ARTIST/Skullpng.png'
const graphicArtboard = '/GRAPHIC_ARTIST/Artboard 1.png'
const graphicProduct = '/GRAPHIC_ARTIST/productdesign.jpg'

// Project Data
const projectsData = {
  'ecommerce': {
    id: 'ecommerce',
    title: 'Shopify E-commerce Store',
    description: 'End-to-end Shopify 2.0 development covering product design, custom templates, CMS, merchandising, and checkout.',
    category: 'Shopify 2.0 · End-to-End Development · Custom Templates · CMS',
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['Shopify 2.0', 'Liquid', 'Custom Templates', 'Shopify CMS', 'HTML5', 'CSS', 'JavaScript', 'Theme Sections'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a4 4 0 004 4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5a2 2 0 012 2v8"></path><circle cx="9" cy="9" r="2" strokeWidth={1.5}></circle><circle cx="9" cy="15" r="2" strokeWidth={1.5}></circle></svg>,
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
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'Google OAuth'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a4 4 0 004 4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5a2 2 0 012 2v8"></path><circle cx="9" cy="9" r="2" strokeWidth={1.5}></circle><circle cx="9" cy="15" r="2" strokeWidth={1.5}></circle></svg>,
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
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Architect Studio',
    duration: '2 months',
    tech: ['Blender', 'Unreal Engine', 'AutoCAD', 'V-Ray', 'Adobe Photoshop', 'Adobe Illustrator'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.27 16.5 9.73" strokeWidth={1.5}></polyline><line x1="2.0" y1="11.1" x2="22" y2="11.1" strokeWidth={1.5}></line></svg>,
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
    title: 'Graphic Design and Product Design',
    description: 'Graphic design and product design for branding, visual communication, packaging, and product presentation.',
    category: 'Graphic Design · Product Design',
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Various Clients',
    duration: 'Ongoing Projects',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Figma'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.27 16.5 9.73" strokeWidth={1.5}></polyline><line x1="2.0" y1="11.1" x2="22" y2="11.1" strokeWidth={1.5}></line></svg>,
    caseStudy: [
      {
        title: 'Overview',
        content: 'I combine graphic design and product design to build brand visuals, layouts, and product presentations that are clear, consistent, and ready for marketing or production.'
      },
      {
        title: 'Services Provided',
        content: '',
        bullets: [
          'Brand and visual identity design',
          'Poster, apparel, and campaign graphics',
          'Layout, typography, and print-ready artwork',
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
          'Adobe Illustrator – vector graphics, logos, and print assets',
          'Blender – product modeling and presentation renders',
          'Figma – layout exploration and design systems'
        ]
      },
      {
        title: 'Client Challenge',
        content: 'Clients needed brand-ready graphic assets and product visuals that communicated form, material, and identity before manufacturing or launch.'
      },
      {
        title: 'Design & Technical Implementation',
        content: 'I built a graphic and product design workflow from concept through presentation-ready assets.',
        bullets: [
          'Developed graphic systems for brand, apparel, and campaign use',
          'Created product form, packaging, and surface-detail studies',
          'Rendered product hero shots with accurate materials and lighting',
          'Prepared print-ready and digital artwork for production'
        ]
      },
      {
        title: 'Workflow Optimization',
        content: 'Reusable mockup templates, product lighting setups, and graphic layouts reduced turnaround time while keeping brand and product presentation consistent.'
      }
    ],
    results: [
      'Delivered graphic and product design assets for branding and marketing',
      'Product concepts presented with clear form, materials, and hero shots',
      'Stronger visual identity across print, apparel, and digital use',
      'Faster production handoff through organized artwork and mockups'
    ],
    samples: [graphicProduct, graphicArtist8, graphicArtist9, graphicArtist1, graphicArtist2, graphicArtboard, graphicArtist5],
    liveUrl: null,
    githubUrl: null
  },
  'nft-marketplace': {
    id: 'nft-marketplace',
    title: 'UI UX Design',
    description: 'Creative UI/UX projects showcasing user interface design, interaction design, and digital product solutions.',
    category: 'UI/UX Design',
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Various Clients',
    duration: 'Ongoing Projects',
    tech: ['Figma'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={1.5}></circle><circle cx="12" cy="12" r="6" strokeWidth={1.5}></circle><circle cx="12" cy="12" r="2" strokeWidth={1.5}></circle></svg>,
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
    samples: [figmaAnimation, figmaEasylife, figmaUiEcommerce, figmaNNLVS, figmaPresentation, figmaVS],
    liveUrl: null,
    githubUrl: null
  },
  'saas-platform': {
    id: 'saas-platform',
    title: 'Editing Services SaaS',
    description: 'A deployment-ready cloud-based editing services platform designed to manage orders, editors, revisions, payments, and real-time collaboration in a single, structured system.',
    category: 'SaaS Platform · Full-Stack Application',
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Self-Initiated',
    duration: 'Production-Ready SaaS Project',
    tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Docker', 'OnRender', 'Supabase', 'PayPal', 'React'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeWidth={1.5}></rect><line x1="16" x2="16" y1="2" y2="6" strokeWidth={1.5}></line><line x1="8" x2="8" y1="2" y2="6" strokeWidth={1.5}></line><line x1="3" x2="21" y1="10" y2="10" strokeWidth={1.5}></line><path d="M8 14h.01" strokeWidth={2}></path><path d="M12 14h.01" strokeWidth={2}></path><path d="M16 14h.01" strokeWidth={2}></path><path d="M8 18h.01" strokeWidth={2}></path><path d="M12 18h.01" strokeWidth={2}></path><path d="M16 18h.01" strokeWidth={2}></path></svg>,
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
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Indie Game Studio',
    duration: '8 months',
    tech: ['Unreal Engine 5', 'C++', 'Blueprint'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18V12h6v6a6 6 0 0 1-12 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12a6 6 0 1-5.5-3.5M9 12a6 6 0 1 5.5-3.5"></path></svg>,
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
    description: 'API-powered job marketplace that searches and aggregates live listings from multiple public job-board APIs into one search experience.',
    category: 'Job Marketplace · API Integration',
    color: 'bg-cyan-500/20',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    client: 'Self-Initiated',
    duration: 'Self-Initiated Project',
    tech: ['React', 'Vite', 'REST APIs', 'Arbeitnow API', 'Remotive API', 'RemoteOK API', 'OnRender'],
    icon: <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={1.5}></rect><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path strokeLinecap="round" strokeWidth={1.5} d="M2 13h20"></path></svg>,
    caseStudy: [
      {
        title: 'Project Overview',
        content: 'Bridgehub is a job-search marketplace that pulls listings from public job APIs and presents them in a single interface. Users can search by job title, keywords, or company, review role details, and open the original posting to apply.'
      },
      {
        title: 'Key Features',
        content: '',
        bullets: [
          'Unified search across multiple job-board APIs',
          'Live listings from Arbeitnow, Remotive, and RemoteOK',
          'Search by job title, keywords, or company',
          'Source status so users can see which APIs are loading or failed',
          'Job cards with company, location, and tags',
          'Detail view with description and an apply link to the original posting',
          'Pagination for browsing large result sets'
        ]
      },
      {
        title: 'Tech Stack',
        content: 'Frontend job marketplace that consumes public REST job-board APIs and deploys as a cloud web app.',
        bullets: [
          'Frontend: React and Vite',
          'Data: Arbeitnow, Remotive, and RemoteOK job APIs',
          'Integration: client-side REST fetches with normalized listing records',
          'Hosting: OnRender'
        ]
      },
      {
        title: 'Problem Statement',
        content: 'Job seekers have to check several boards to find remote and international roles. The goal was one search surface that combines those feeds without forcing users to visit each source separately.'
      },
      {
        title: 'Solution Approach',
        content: 'I built a React search app that requests listings from each API, maps them into a shared job model, and filters results by the query in the search bar.',
        bullets: [
          'Normalized title, company, location, tags, description, and apply URL from each source',
          'Tracked per-source loading and error state while results stream in',
          'Kept apply actions on the original listing URL so applications stay on the source site'
        ]
      }
    ],
    results: [
      'Shipped a live job-search marketplace on OnRender',
      'Aggregated listings from three public job-board APIs in one UI',
      'Gave users keyword search, source status, and direct apply links'
    ],
    samples: [bridgehubImage],
    liveUrl: 'https://bridgehub-hp5e.onrender.com/',
    githubUrl: null
  }
};

export default projectsData;

