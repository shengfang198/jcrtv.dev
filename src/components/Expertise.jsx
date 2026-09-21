import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Graphic Design', level: 95 },
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 85 }
];

const technologies = [
  { name: 'Unreal Engine', src: './unrealengine.svg', alt: 'Unreal Engine' },
  { name: 'Auto Cad', src: './autocad.svg', alt: 'Auto Cad' },
  { name: 'Blender', src: './blender.svg', alt: 'Blender' },
  { name: 'Figma', src: './figma.png', alt: 'Figma' },
  { name: 'React', src: './react.svg', alt: 'React' },
  { name: 'Node.js', src: './nodejs.png', alt: 'Node.js' },
  { name: 'JavaScript', src: './js.png', alt: 'JavaScript' },
  { name: 'PostgreSQL', src: './database.png', alt: 'PostgreSQL' },
  { name: 'C++', src: './cpp.png', alt: 'C++' }
];

function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function SkillRow({ name, level, index, inView }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) {
      setShown(0);
      return undefined;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setShown(level);
      return undefined;
    }

    const delay = index * 180;
    const duration = 1150;
    let raf = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(Math.round(level * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [inView, index, level]);

  return (
    <div className="skill-row">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="font-medium text-fuchsia-200 text-white/80">{shown}%</span>
      </div>
      <div className="skill-bar-track w-full rounded-full h-3 border border-white/10 overflow-hidden">
        <div
          className={`progress-bar skill-bar-fill h-3 rounded-full bg-white/60 backdrop-blur-sm${inView ? ' is-visible' : ''}`}
          style={{
            width: `${level}%`,
            transitionDelay: `${index * 0.18}s`
          }}
        />
      </div>
    </div>
  );
}

function Expertise() {
  const [skillsRef, skillsInView] = useInView(0.35);
  const [techsRef, techsInView] = useInView(0.2);

  return (
    <section id="skills" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            Discover My
          </div>
          <h2 className="text-3xl md:text-2xl font-bold text-white mb-4">
            Expertise
          </h2>
          <div className="w-20 h-px bg-white/10 mx-auto transition-all duration-300 underline-expand"></div>
        </div>

        <div className="animate-on-scroll flashlight-card bg-[#0C0D0F] rounded-2xl p-8 max-sm:p-5 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors backdrop-blur-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Expertise</div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect width="16" height="14" x="2" y="3" rx="2" ry="2" strokeWidth={1.5} />
                  <path d="m8 21h12" strokeWidth={1.5} />
                  <circle cx="10" cy="8" r="1" strokeWidth={1.5} />
                  <circle cx="14" cy="8" r="1" strokeWidth={1.5} />
                </svg>
              </div>
              <span className="text-sm text-neutral-400 font-medium">Expert Level Proficiency</span>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="max-w-md mx-auto md:max-w-none">
                <h3 className="text-2xl text-white mb-6 font-medium tracking-tight">My Skills</h3>
                <p className="text-neutral-400 mb-8">
                  I've developed a versatile skill set that allows me to handle all aspects of digital product development, from initial concept to final implementation.
                </p>
                <div ref={skillsRef} className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillRow
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                      inView={skillsInView}
                    />
                  ))}
                </div>
              </div>
              <div className="max-w-md mx-auto md:max-w-none">
                <h3 className="text-2xl text-white mb-6 font-medium tracking-tight">Technologies</h3>
                <p className="text-neutral-400 mb-8">
                  I work with a wide range of technologies and tools to create the best possible solutions for my clients.
                </p>
                <div ref={techsRef} className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-sm:gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`tech-card bg-neutral-800/20 p-4 max-sm:p-3 rounded-xl border border-neutral-700/50${techsInView ? ' is-visible' : ''}`}
                      style={{ transitionDelay: `${index * 0.08}s` }}
                    >
                      <div className="tech-card-inner flex flex-col items-center justify-center text-center">
                        <img src={tech.src} alt={tech.alt} className="tech-card-icon h-16 w-16 max-sm:h-12 max-sm:w-12" />
                        <h4 className="font-medium text-white mt-3 max-sm:mt-2">{tech.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
