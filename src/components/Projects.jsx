import React, { useEffect, useState } from 'react';

function ProjectCardMedia({ image, images, title }) {
  const slides = images?.length
    ? images
    : image
      ? [{ src: image, label: title }]
      : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="project-grid-card-media project-grid-card-media-rotator">
      {slides.map((slide, slideIndex) => (
        <div
          key={`${slide.src}-${slide.label || slideIndex}`}
          className={`project-grid-card-slide${slideIndex === index ? ' is-active' : ''}`}
        >
          <img src={slide.src} alt={slide.label || title} />
          {slide.label && (
            <span className="project-grid-card-slide-label">{slide.label}</span>
          )}
        </div>
      ))}
      {slides.length > 1 && (
        <div className="project-grid-card-slide-dots" aria-hidden="true">
          {slides.map((slide, slideIndex) => (
            <span
              key={`dot-${slide.src}-${slide.label || slideIndex}`}
              className={`project-grid-card-slide-dot${slideIndex === index ? ' is-active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const projectCards = [
  {
    id: 'ecommerce',
    title: 'Shopify E-commerce',
    badge: 'Shopify 2.0 · Liquid',
    summary: 'End-to-end Shopify development with product design, custom templates, CMS sections, and native checkout.',
    image: '/ECOMMERCE/thumbnailecommerce.png',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="8" cy="12" r="1" strokeWidth={2} />
        <circle cx="16" cy="12" r="1" strokeWidth={2} />
        <path d="M2 7l20 0" strokeWidth={2} strokeLinecap="round" />
        <path d="M4 10l16 0" strokeWidth={2} strokeLinecap="round" />
        <path d="M6 13l12 0" strokeWidth={2} strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'ecommerce-custom',
    title: 'Custom E-commerce Platform',
    badge: 'Full-Stack · UI/UX',
    summary: 'Self-built clothing store with custom UI, cart, and authentication.',
    image: '/ECOMMERCE/eccomerce2.png',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1.5} />
        <path d="M3 9h18" strokeWidth={1.5} />
        <path d="M8 13h3" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'action-rpg',
    title: 'Action RPG Game',
    badge: 'Game Development',
    summary: 'Full 3D action RPG built with Unreal Engine featuring immersive combat and storytelling.',
    image: '/GAMEDEV/indiegame.jpeg',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V12h6v6a6 6 0 0 1-12 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12a6 6 0 1 0-5.5-3.5M9 12a6 6 0 1 1 5.5-3.5" />
      </svg>
    )
  },
  {
    id: 'saas-platform',
    title: 'Editing Services SaaS',
    badge: 'SaaS Platform',
    summary: 'Cloud platform for orders, editors, revisions, payments, and real-time collaboration.',
    image: '/SAAS/thumbnail.png',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeWidth={1.5} />
        <line x1="16" x2="16" y1="2" y2="6" strokeWidth={1.5} />
        <line x1="8" x2="8" y1="2" y2="6" strokeWidth={1.5} />
        <line x1="3" x2="21" y1="10" y2="10" strokeWidth={1.5} />
        <path d="M8 14h.01" strokeWidth={2} />
        <path d="M12 14h.01" strokeWidth={2} />
        <path d="M16 14h.01" strokeWidth={2} />
        <path d="M8 18h.01" strokeWidth={2} />
        <path d="M12 18h.01" strokeWidth={2} />
        <path d="M16 18h.01" strokeWidth={2} />
      </svg>
    )
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    badge: 'Architectural Visualization',
    summary: 'Photorealistic 3D renders for interior and exterior design visualization.',
    image: '/3DVISUALIZATION/1.jpg',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  },
  {
    id: 'graphic-product-design',
    title: 'Graphic Design',
    badge: 'Graphic Design',
    summary: 'Brand graphics, apparel art, and visual identity for print and digital.',
    image: '/GRAPHIC_ARTIST/Samuraipng.png',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l7-7 3 3-7 7-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" strokeWidth={2} />
      </svg>
    )
  },
  {
    id: 'product-design',
    title: 'Product Design',
    badge: 'Product Design',
    summary: 'Product concepts, packaging, and presentation-ready 3D product visuals.',
    image: '/GRAPHIC_ARTIST/productdesign.jpg',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    )
  },
  {
    id: 'nft-marketplace',
    title: 'UI UX',
    badge: 'Graphic Design · UI/UX',
    summary: 'User interface design, interaction design, and digital product solutions.',
    image: '/FIGMA/NNLVS.png',
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <circle cx="12" cy="12" r="6" strokeWidth={2} />
        <circle cx="12" cy="12" r="2" strokeWidth={2} />
      </svg>
    )
  },
  {
    id: 'bridgehub',
    title: 'See More Projects',
    badge: 'More Projects',
    summary: 'Explore additional builds including Bridgehub and Writely — an AI-powered docs and notes editor.',
    image: '/BRIDGEHUB/bridge-hub-thumbnail.png',
    images: [
      { src: '/BRIDGEHUB/bridge-hub-thumbnail.png', label: 'Bridgehub' },
      { src: '/OTHER PROJECTS/WRITELY.png', label: 'Writely' }
    ],
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path strokeLinecap="round" strokeWidth={2} d="M2 13h20" />
      </svg>
    )
  }
];

function Projects() {
  return (
      <section id="projects" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
              Browse My Recent
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
          </div>

          <div className="project-card-grid">
            {projectCards.map((card) => (
              <a
                key={card.id}
                href={`#/project/${card.id}`}
                className="project-grid-card animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-2xl"
              >
                <ProjectCardMedia image={card.image} images={card.images} title={card.title} />
                <div className="project-grid-card-body">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="theme-accent-icon w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-white leading-snug text-left">{card.title}</h3>
                      <span className="theme-chip bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full inline-block mt-1">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm text-left flex-1 mb-4">{card.summary}</p>
                  <span className="theme-action-btn ink-fill-btn self-start bg-fuchsia-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    View Project
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Projects;
