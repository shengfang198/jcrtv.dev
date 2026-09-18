import React, { useEffect, useState } from 'react';

function Body() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

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
              color: {
                value: ['#22d3ee', '#38bdf8', '#6366f1', '#a855f7', '#ec4899', '#34d399', '#fbbf24']
              },
              shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
              opacity: { value: 0.55, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
              size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
              line_linked: { enable: true, distance: 150, color: '#94a3b8', opacity: 0.35, width: 1 },
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

    // Generate vibrant tones for richer flashlight glow (saturated, not blown out)
    const getRandomColor = () => {
      const isLight = document.documentElement.classList.contains('theme-light');
      const colors = isLight
        ? [18, 32, 48, 210, 262, 292, 328]
        : [8, 28, 48, 168, 195, 262, 292, 328];
      const hue = colors[Math.floor(Math.random() * colors.length)];
      const saturation = isLight
        ? 86 + Math.floor(Math.random() * 8)
        : 88 + Math.floor(Math.random() * 8);
      const lightness = isLight
        ? 48 + Math.floor(Math.random() * 8)
        : 52 + Math.floor(Math.random() * 8);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Flashlight effect for cards â€” grows from small to full; random scatter each hover
    const addFlashlightEffect = () => {
      const cards = document.querySelectorAll('.flashlight-card');
      const FLASH_HALF = 690; // half of 1380px main glow (3Ã— 460 base; matches CSS)
      let isScrolling = false;
      let scrollThrottle;
      let activeCards = new Set();
      const scaleRafByCard = new WeakMap();
      /** Smoothed follow: { tx, ty, cx, cy, rafId } â€” glow eases toward cursor */
      const flashStickyByCard = new WeakMap();
      // Lower lerp = stickier fluid trail across the card canvas
      const STICKY_LERP = 0.032;
      const STICKY_LERP_FAR = 0.058;
      const STICKY_FAR_DIST2 = 280000;
      const STICKY_VEL_DAMP = 0.82;

      const easeOutQuint = (t) => 1 - (1 - t) ** 5;

      const randRange = (min, max) => min + Math.random() * (max - min);
      const pct = (min, max) => `${randRange(min, max).toFixed(1)}%`;

      const cancelFlashScaleGrow = (card) => {
        const id = scaleRafByCard.get(card);
        if (id != null) cancelAnimationFrame(id);
        scaleRafByCard.delete(card);
      };

      const startFlashScaleGrow = (card) => {
        cancelFlashScaleGrow(card);
        card.style.setProperty('--flash-scale', '0.08');
        const from = 0.08;
        const to = 1;
        const duration = 940;
        const t0 = performance.now();

        const tick = (now) => {
          const t = Math.min(1, (now - t0) / duration);
          const s = from + (to - from) * easeOutQuint(t);
          card.style.setProperty('--flash-scale', s.toFixed(4));
          if (t < 1) {
            scaleRafByCard.set(card, requestAnimationFrame(tick));
          } else {
            scaleRafByCard.delete(card);
          }
        };
        scaleRafByCard.set(card, requestAnimationFrame(tick));
      };

      const blobCornerPct = () => `${Math.floor(32 + Math.random() * 36)}%`;

      const randomBlobRadius = (el, prefix) => {
        for (let i = 1; i <= 8; i += 1) {
          el.style.setProperty(`${prefix}${i}`, blobCornerPct());
        }
      };

      const randomEllipse = (el, ew, eh) => {
        const w = `${Math.floor(72 + Math.random() * 52)}%`;
        const h = `${Math.floor(72 + Math.random() * 52)}%`;
        el.style.setProperty(ew, w);
        el.style.setProperty(eh, h);
      };

      const cancelFlashSticky = (card) => {
        const s = flashStickyByCard.get(card);
        if (s?.rafId != null) cancelAnimationFrame(s.rafId);
        flashStickyByCard.delete(card);
      };

      /** Nearest edge when entering = side user came from. */
      const getEntryEdge = (w, h, mx, my) => {
        const dTop = my;
        const dBottom = h - my;
        const dLeft = mx;
        const dRight = w - mx;
        let edge = 'top';
        let min = dTop;
        if (dBottom < min) {
          min = dBottom;
          edge = 'bottom';
        }
        if (dLeft < min) {
          min = dLeft;
          edge = 'left';
        }
        if (dRight < min) {
          edge = 'right';
        }
        return edge;
      };

      const getCardPadding = (card, rect) => {
        const cs = getComputedStyle(card);
        const pl = parseFloat(cs.paddingLeft) || 0;
        const pr = parseFloat(cs.paddingRight) || 0;
        const pt = parseFloat(cs.paddingTop) || 0;
        const pb = parseFloat(cs.paddingBottom) || 0;
        const avg = (pl + pr + pt + pb) / 4;
        const fallback = Math.min(rect.width, rect.height) * 0.1;
        return Math.max(10, avg || fallback);
      };

      /**
       * Glow is not centered on the cursor near the entry edge: it stays on that side until
       * the cursor moves inward past half the card padding, then eases toward cursor-centered.
       */
      const getBiasedTarget = (rect, mx, my, entryEdge, paddingPx, FLASH_HALF_) => {
        const w = rect.width;
        const h = rect.height;
        const cursorTx = mx - FLASH_HALF_;
        const cursorTy = my - FLASH_HALF_;
        const halfPad = Math.max(14, paddingPx * 0.5);

        let distIn = 0;
        if (entryEdge === 'left') distIn = mx;
        else if (entryEdge === 'right') distIn = w - mx;
        else if (entryEdge === 'top') distIn = my;
        else distIn = h - my;

        const t = Math.min(1, distIn / halfPad);
        const tSmooth = t * t * (3 - 2 * t);

        let tx = cursorTx;
        let ty = cursorTy;

        if (entryEdge === 'left') {
          const lockedTx = -FLASH_HALF_ * 0.52 + mx * 0.2;
          tx = lockedTx + (cursorTx - lockedTx) * tSmooth;
          ty = cursorTy;
        } else if (entryEdge === 'right') {
          const lockedTx = w - FLASH_HALF_ * 0.48 - (w - mx) * 0.2;
          tx = lockedTx + (cursorTx - lockedTx) * tSmooth;
          ty = cursorTy;
        } else if (entryEdge === 'top') {
          const lockedTy = -FLASH_HALF_ * 0.52 + my * 0.2;
          tx = cursorTx;
          ty = lockedTy + (cursorTy - lockedTy) * tSmooth;
        } else {
          const lockedTy = h - FLASH_HALF_ * 0.48 - (h - my) * 0.2;
          tx = cursorTx;
          ty = lockedTy + (cursorTy - lockedTy) * tSmooth;
        }

        return { tx, ty };
      };

      /** Glow center starts just outside that edge (card space), then eases toward biased target. */
      const getSpawnTranslate = (rect, mx, my, paddingPx, FLASH_HALF_) => {
        const w = rect.width;
        const h = rect.height;
        const edge = getEntryEdge(w, h, mx, my);
        const pad = FLASH_HALF_ * 0.48;
        let scx = mx;
        let scy = my;
        if (edge === 'top') {
          scy = -pad;
        } else if (edge === 'bottom') {
          scy = h + pad;
        } else if (edge === 'left') {
          scx = -pad;
        } else {
          scx = w + pad;
        }
        const { tx: targetTx, ty: targetTy } = getBiasedTarget(rect, mx, my, edge, paddingPx, FLASH_HALF_);
        return {
          spawnTx: scx - FLASH_HALF_,
          spawnTy: scy - FLASH_HALF_,
          targetTx,
          targetTy,
          entryEdge: edge
        };
      };

      const beginFlashlightFromEdge = (card, clientX, clientY, rect) => {
        const mx = clientX - rect.left;
        const my = clientY - rect.top;
        const paddingPx = getCardPadding(card, rect);
        const { spawnTx, spawnTy, targetTx, targetTy, entryEdge } = getSpawnTranslate(rect, mx, my, paddingPx, FLASH_HALF);
        cancelFlashSticky(card);
        flashStickyByCard.set(card, {
          tx: targetTx,
          ty: targetTy,
          cx: spawnTx,
          cy: spawnTy,
          vx: 0,
          vy: 0,
          rafId: null,
          entryEdge,
          paddingPx
        });
        card.style.setProperty('--translate-x', `${spawnTx}px`);
        card.style.setProperty('--translate-y', `${spawnTy}px`);
        scheduleFlashSticky(card);
      };

      const updateFlashlightTarget = (card, rect, clientX, clientY) => {
        const mx = clientX - rect.left;
        const my = clientY - rect.top;
        const s = flashStickyByCard.get(card);
        const edge = s?.entryEdge ?? getEntryEdge(rect.width, rect.height, mx, my);
        const paddingPx = s?.paddingPx ?? getCardPadding(card, rect);
        const { tx, ty } = getBiasedTarget(rect, mx, my, edge, paddingPx, FLASH_HALF);
        if (!s) {
          flashStickyByCard.set(card, {
            tx,
            ty,
            cx: tx,
            cy: ty,
            vx: 0,
            vy: 0,
            rafId: null,
            entryEdge: edge,
            paddingPx
          });
        } else {
          s.tx = tx;
          s.ty = ty;
        }
      };

      const scheduleFlashSticky = (card) => {
        const s = flashStickyByCard.get(card);
        if (!s || s.rafId != null) return;

        const tick = () => {
          const st = flashStickyByCard.get(card);
          if (!st || !card.classList.contains('flashlight-active')) {
            if (st) st.rafId = null;
            return;
          }

          const dx = st.tx - st.cx;
          const dy = st.ty - st.cy;
          const dist2 = dx * dx + dy * dy;
          const k = dist2 > STICKY_FAR_DIST2 ? STICKY_LERP_FAR : STICKY_LERP;

          // Fluid sticky motion: ease toward cursor with soft velocity carry
          st.vx = st.vx * STICKY_VEL_DAMP + dx * k;
          st.vy = st.vy * STICKY_VEL_DAMP + dy * k;
          st.cx += st.vx;
          st.cy += st.vy;

          card.style.setProperty('--translate-x', `${st.cx}px`);
          card.style.setProperty('--translate-y', `${st.cy}px`);

          if (dist2 > 0.35 || Math.abs(st.vx) + Math.abs(st.vy) > 0.08) {
            st.rafId = requestAnimationFrame(tick);
          } else {
            st.cx = st.tx;
            st.cy = st.ty;
            st.vx = 0;
            st.vy = 0;
            card.style.setProperty('--translate-x', `${st.cx}px`);
            card.style.setProperty('--translate-y', `${st.cy}px`);
            st.rafId = null;
          }
        };

        s.rafId = requestAnimationFrame(tick);
      };

      const randomizeFlashlightScatter = (card) => {
        randomBlobRadius(card, '--blob-a');
        randomBlobRadius(card, '--blob-b');
        card.style.setProperty('--blob-rot-a', `${randRange(-10, 10).toFixed(1)}deg`);
        card.style.setProperty('--blob-rot-b', `${randRange(-12, 12).toFixed(1)}deg`);

        randomEllipse(card, '--e1w', '--e1h');
        randomEllipse(card, '--e2w', '--e2h');
        randomEllipse(card, '--e3w', '--e3h');
        randomEllipse(card, '--e4w', '--e4h');
        randomEllipse(card, '--e5w', '--e5h');
        randomEllipse(card, '--e6w', '--e6h');
        randomEllipse(card, '--e7w', '--e7h');

        card.style.setProperty('--g1x', pct(23, 31));
        card.style.setProperty('--g1y', pct(28, 36));
        card.style.setProperty('--g2x', pct(66, 74));
        card.style.setProperty('--g2y', pct(30, 38));
        card.style.setProperty('--g3x', pct(42, 50));
        card.style.setProperty('--g3y', pct(64, 72));
        card.style.setProperty('--g4x', pct(58, 66));
        card.style.setProperty('--g4y', pct(52, 60));
        card.style.setProperty('--g5x', pct(18, 26));
        card.style.setProperty('--g5y', pct(54, 62));
        card.style.setProperty('--g6x', pct(38, 46));
        card.style.setProperty('--g6y', pct(44, 52));
        card.style.setProperty('--g7x', pct(62, 70));
        card.style.setProperty('--g7y', pct(46, 54));
        card.style.setProperty('--scatter-a-x', `${randRange(-36, 36)}px`);
        card.style.setProperty('--scatter-a-y', `${randRange(-36, 36)}px`);
        card.style.setProperty('--scatter-b-x', `${randRange(-56, 56)}px`);
        card.style.setProperty('--scatter-b-y', `${randRange(-56, 56)}px`);
      };

      const handleScroll = () => {
        isScrolling = true;
        activeCards.forEach((card) => {
          card.classList.remove('flashlight-active');
          cancelFlashScaleGrow(card);
          cancelFlashSticky(card);
        });
        activeCards.clear();

        clearTimeout(scrollThrottle);
        scrollThrottle = setTimeout(() => {
          isScrolling = false;
        }, 100);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      cards.forEach((card) => {
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

        card.addEventListener('mouseenter', (e) => {
          if (isScrolling) return;

          updateColors();
          randomizeFlashlightScatter(card);
          startFlashScaleGrow(card);

          card.classList.add('flashlight-initial-enter');

          const rect = card.getBoundingClientRect();
          beginFlashlightFromEdge(card, e.clientX, e.clientY, rect);

          card.classList.add('flashlight-active');
          activeCards.add(card);

          requestAnimationFrame(() => {
            card.classList.remove('flashlight-initial-enter');
          });
        });

        card.addEventListener('mouseleave', () => {
          cancelFlashScaleGrow(card);
          cancelFlashSticky(card);
          card.classList.remove('flashlight-active');
          activeCards.delete(card);
        });

        card.addEventListener('mousemove', (e) => {
          if (isScrolling) {
            card.classList.remove('flashlight-active');
            activeCards.delete(card);
            cancelFlashScaleGrow(card);
            cancelFlashSticky(card);
            return;
          }

          const rect = card.getBoundingClientRect();

          if (!card.classList.contains('flashlight-active')) {
            card.classList.add('flashlight-active');
            activeCards.add(card);
            updateColors();
            randomizeFlashlightScatter(card);
            startFlashScaleGrow(card);
            beginFlashlightFromEdge(card, e.clientX, e.clientY, rect);
            return;
          }

          updateFlashlightTarget(card, rect, e.clientX, e.clientY);
          scheduleFlashSticky(card);
        });
      });
    };

    // Initialize flashlight effect after cards are rendered
    setTimeout(addFlashlightEffect, 100);
  }, []);

  useEffect(() => {
    const palette = [
      { r: 34, g: 211, b: 238 },
      { r: 56, g: 189, b: 248 },
      { r: 99, g: 102, b: 241 },
      { r: 168, g: 85, b: 247 },
      { r: 236, g: 72, b: 153 },
      { r: 52, g: 211, b: 153 },
      { r: 251, g: 191, b: 36 },
      { r: 34, g: 211, b: 238 }
    ];
    const lightColor = { r: 100, g: 116, b: 139 };
    const lineColor = { r: 148, g: 163, b: 184 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;
    let waitId = 0;
    let cancelled = false;
    let lastTime = performance.now();
    let colorT = 0;

    const mixPaletteColor = (t) => {
      const span = palette.length - 1;
      const x = ((t % span) + span) % span;
      const index = Math.floor(x);
      const f = x - index;
      const from = palette[index];
      const to = palette[index + 1];
      return {
        r: Math.round(from.r + (to.r - from.r) * f),
        g: Math.round(from.g + (to.g - from.g) * f),
        b: Math.round(from.b + (to.b - from.b) * f)
      };
    };

    const applyParticleColors = (t, uniformRgb = null) => {
      const pJS = window.pJSDom?.[0]?.pJS;
      if (!pJS) return;
      pJS.particles.line_linked.color_rgb_line = uniformRgb || lineColor;
      const dots = pJS.particles.array;
      for (let i = 0; i < dots.length; i += 1) {
        if (!dots[i].color) continue;
        dots[i].color.rgb = uniformRgb || mixPaletteColor(t + i * 0.55);
      }
    };

    const tick = (now) => {
      if (cancelled) return;
      const isLight = document.documentElement.classList.contains('theme-light');
      if (isLight) {
        applyParticleColors(0, lightColor);
      } else if (prefersReducedMotion) {
        applyParticleColors(0);
      } else {
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;
        colorT += dt / 7;
        applyParticleColors(colorT);
      }
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (cancelled) return;
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    };

    if (window.pJSDom?.[0]?.pJS) {
      start();
    } else {
      waitId = window.setInterval(() => {
        if (window.pJSDom?.[0]?.pJS) {
          window.clearInterval(waitId);
          start();
        }
      }, 120);
    }

    return () => {
      cancelled = true;
      if (waitId) window.clearInterval(waitId);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
    <main id="overview" className="w-full pt-32 p-0 relative flex flex-col">
      {/* Hero Header */}
      <div className="text-center max-w-5xl mx-auto mb-10">


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
            className={`theme-email-input w-full sm:flex-1 bg-[#161616] border rounded-full px-6 py-3.5 text-base outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-neutral-600 shadow-lg h-[52px] text-white ${
              submitStatus === 'error' ? 'border-red-500' : 'border-white/10 focus:border-white/20'
            }`}
            disabled={isSubmitting}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="theme-get-in-touch-btn group flex overflow-hidden transition-colors duration-300 focus:ring-2 focus:ring-white/20 focus:outline-none border border-white/20 sm:w-auto bg-white/10 w-full h-[52px] rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
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
    </main>
  );
}

export default Body;
