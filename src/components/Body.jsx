import React, { useCallback, useEffect, useRef, useState } from 'react';
import Profile from './Profile.jsx';
import Expertise from './Expertise.jsx';
import Projects from './Projects.jsx';
import Career from './Career.jsx';
import Footer from './Footer.jsx';
import moneyCashGif from '../assets/money-cash.gif';

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
  const [runnerStarted, setRunnerStarted] = useState(false);
  const [runnerGameOver, setRunnerGameOver] = useState(false);
  const [runnerScore, setRunnerScore] = useState(0);
  const [runnerHighScore, setRunnerHighScore] = useState(0);
  const RUNNER_TRACK_HEIGHT = 304;
  const RUNNER_GROUND_OFFSET = 24;
  const RUNNER_PLAYER_SIZE = 50;
  const RUNNER_TOP_PADDING = 4;
  const getTopSpawnY = (trackHeight) => {
    const playableHeight = trackHeight - RUNNER_GROUND_OFFSET;
    return Math.max(playableHeight - RUNNER_PLAYER_SIZE - RUNNER_TOP_PADDING, 0);
  };
  const DEFAULT_TOP_SPAWN_Y = getTopSpawnY(RUNNER_TRACK_HEIGHT);
  const [runnerObstacles, setRunnerObstacles] = useState([]);
  const RUNNER_FLY_FORCE = 8.2;
  const RUNNER_GRAVITY = 0.6;
  const runnerTrackRef = useRef(null);
  const runnerPlayerElRef = useRef(null);
  const runnerObstacleElsRef = useRef(new Map());
  const runnerRafRef = useRef(null);
  const runnerLastFrameRef = useRef(null);
  const runnerScoreLastUpdateRef = useRef(0);
  const runnerObstacleIdRef = useRef(0);
  const runnerStateRef = useRef({
    playerY: DEFAULT_TOP_SPAWN_Y,
    velocity: 0,
    obstacles: [],
    spawnCounter: 0,
    score: 0,
    isStarted: false,
    isGameOver: false
  });

  // Ensure the player starts at the right vertical offset (before the first "reset").
  useEffect(() => {
    const playerEl = runnerPlayerElRef.current;
    if (!playerEl) return;
    const y = runnerStateRef.current.playerY;
    playerEl.style.transform = `translateY(${-y}px)`;
  }, []);

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

    // Generate vibrant tones for richer flashlight glow
    const getRandomColor = () => {
      const colors = [18, 32, 48, 210, 262, 292, 328]; // orange to magenta-blue spectrum
      const hue = colors[Math.floor(Math.random() * colors.length)];
      const saturation = 92 + Math.floor(Math.random() * 7); // 92-98
      const lightness = 58 + Math.floor(Math.random() * 9); // 58-66
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Flashlight effect for cards — grows from small to full; random scatter each hover
    const addFlashlightEffect = () => {
      const cards = document.querySelectorAll('.flashlight-card');
      const FLASH_HALF = 690; // half of 1380px main glow (3× 460 base; matches CSS)
      let isScrolling = false;
      let scrollThrottle;
      let activeCards = new Set();
      const scaleRafByCard = new WeakMap();
      /** Smoothed follow: { tx, ty, cx, cy, rafId } — glow eases toward cursor */
      const flashStickyByCard = new WeakMap();
      const STICKY_LERP = 0.065;
      const STICKY_LERP_FAR = 0.11;
      const STICKY_FAR_DIST2 = 405000;

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
          const dist2 = (st.tx - st.cx) ** 2 + (st.ty - st.cy) ** 2;
          const k = dist2 > STICKY_FAR_DIST2 ? STICKY_LERP_FAR : STICKY_LERP;
          st.cx += (st.tx - st.cx) * k;
          st.cy += (st.ty - st.cy) * k;
          card.style.setProperty('--translate-x', `${st.cx}px`);
          card.style.setProperty('--translate-y', `${st.cy}px`);
          if (dist2 > 0.2) {
            st.rafId = requestAnimationFrame(tick);
          } else {
            st.cx = st.tx;
            st.cy = st.ty;
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

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resetRunnerState = useCallback(() => {
    const trackHeight = runnerTrackRef.current?.clientHeight || RUNNER_TRACK_HEIGHT;
    const playableHeight = trackHeight - RUNNER_GROUND_OFFSET;
    const startY = Math.max(playableHeight - RUNNER_PLAYER_SIZE - RUNNER_TOP_PADDING, 0);

    runnerObstacleElsRef.current.clear();
    runnerObstacleIdRef.current = 0;

    runnerStateRef.current = {
      playerY: startY,
      velocity: 0,
      obstacles: [],
      spawnCounter: 55,
      score: 0,
      isStarted: true,
      isGameOver: false
    };
    setRunnerStarted(true);
    setRunnerGameOver(false);
    setRunnerScore(0);
    setRunnerObstacles([]);

    // Update DOM once; the RAF loop will take over afterwards.
    if (runnerPlayerElRef.current) {
      runnerPlayerElRef.current.style.transform = `translateY(${-startY}px)`;
    }
  }, []);

  const flyRunner = useCallback(() => {
    const s = runnerStateRef.current;
    if (!s.isStarted || s.isGameOver) return;
    // Flap-style fly input for sustained airtime.
    s.velocity = RUNNER_FLY_FORCE;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!runnerStarted || runnerGameOver) {
          resetRunnerState();
          return;
        }
        flyRunner();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [runnerStarted, runnerGameOver, resetRunnerState, flyRunner]);

  useEffect(() => {
    if (!runnerStarted || runnerGameOver) return undefined;

    const GRAVITY = RUNNER_GRAVITY;
    const SPEED = 6; // px per "base frame" (roughly 60fps)
    const SCORE_PER_FRAME = 0.12;
    const BASE_FRAME_MS = 1000 / 60;
    const PLAYER_SIZE = RUNNER_PLAYER_SIZE;
    const PLAYER_X = 72;
    const TRACK_HEIGHT = RUNNER_TRACK_HEIGHT;
    const GROUND_OFFSET = RUNNER_GROUND_OFFSET;

    const enemyColors = [
      '#ef4444',
      '#f97316',
      '#eab308',
      '#22c55e',
      '#06b6d4',
      '#3b82f6',
      '#8b5cf6',
      '#ec4899'
    ];

    const isEdgeCollision = (a, b) => {
      const overlapX = a.left <= b.right && a.right >= b.left;
      const overlapY = a.bottom <= b.top && a.top >= b.bottom;
      return overlapX && overlapY;
    };

    const loop = (now) => {
      const s = runnerStateRef.current;
      if (!s.isStarted || s.isGameOver) return;

      const lastNow = runnerLastFrameRef.current ?? now;
      const dtMs = Math.min(50, Math.max(0, now - lastNow));
      const dtFrames = dtMs / BASE_FRAME_MS;
      runnerLastFrameRef.current = now;

      s.playerY += s.velocity * dtFrames;
      s.velocity -= GRAVITY * dtFrames;

      if (s.playerY < 0) {
        s.playerY = 0;
        s.velocity = 0;
      }

      const trackHeight = runnerTrackRef.current?.clientHeight || TRACK_HEIGHT;
      const playableHeight = trackHeight - GROUND_OFFSET;
      const maxPlayerY = Math.max(playableHeight - PLAYER_SIZE, 0);
      if (s.playerY > maxPlayerY) {
        s.playerY = maxPlayerY;
        s.velocity = 0;
      }

      s.spawnCounter -= dtFrames;
      let didSpawn = false;

      if (s.spawnCounter <= 0) {
        const isTallBlock = Math.random() < 0.35;
        const blockHeight = isTallBlock
          ? Math.floor(playableHeight * (0.42 + Math.random() * 0.12))
          : 26 + Math.floor(Math.random() * 20);
        const blockWidth = isTallBlock
          ? 30 + Math.floor(Math.random() * 18)
          : blockHeight;
        const trackWidth = runnerTrackRef.current?.clientWidth || 760;
        const randomColor = enemyColors[Math.floor(Math.random() * enemyColors.length)];
        const obstaclePosition = Math.random() < 0.5 ? 'bottom' : 'top';
        const adjustedHeight = obstaclePosition === 'top'
          ? Math.max(Math.floor(blockHeight * 0.7), 20)
          : blockHeight;

        const id = runnerObstacleIdRef.current++;
        s.obstacles.push({
          id,
          x: trackWidth + blockWidth,
          width: blockWidth,
          height: adjustedHeight,
          color: randomColor,
          position: obstaclePosition
        });

        s.spawnCounter = 46 + Math.floor(Math.random() * 44);
        didSpawn = true;
      }

      // Move obstacles + remove those that have passed the left edge.
      const oldLen = s.obstacles.length;
      for (let i = 0; i < s.obstacles.length; i += 1) {
        s.obstacles[i].x -= SPEED * dtFrames;
      }
      s.obstacles = s.obstacles.filter((o) => o.x + o.width > -10);
      const didRemove = s.obstacles.length !== oldLen;

      const trackWidth = runnerTrackRef.current?.clientWidth || 760;
      const playerRect = {
        left: PLAYER_X,
        right: PLAYER_X + PLAYER_SIZE,
        bottom: s.playerY,
        top: s.playerY + PLAYER_SIZE
      };

      const collidedWithBlock = s.obstacles.some((o) => {
        const obstacleRect = {
          left: o.x,
          right: o.x + o.width,
          bottom: o.position === 'top' ? playableHeight - o.height : 0,
          top: o.position === 'top' ? playableHeight : o.height
        };
        return isEdgeCollision(playerRect, obstacleRect);
      });

      const groundRect = {
        left: 0,
        right: trackWidth,
        bottom: -1,
        top: 0
      };
      const collidedWithGround = isEdgeCollision(playerRect, groundRect);

      if (collidedWithBlock || collidedWithGround) {
        s.isGameOver = true;
        setRunnerGameOver(true);
        setRunnerStarted(false);

        const finalScore = Math.floor(s.score);
        setRunnerScore(finalScore);
        if (finalScore > runnerHighScore) setRunnerHighScore(finalScore);
        return;
      }

      s.score += SCORE_PER_FRAME * dtFrames;

      // Update DOM positions directly to avoid per-frame React re-renders.
      if (runnerPlayerElRef.current) {
        runnerPlayerElRef.current.style.transform = `translateY(${-s.playerY}px)`;
      }
      for (let i = 0; i < s.obstacles.length; i += 1) {
        const o = s.obstacles[i];
        const el = runnerObstacleElsRef.current.get(o.id);
        if (el) el.style.left = `${o.x}px`;
      }

      if (now - runnerScoreLastUpdateRef.current > 100) {
        setRunnerScore(Math.floor(s.score));
        runnerScoreLastUpdateRef.current = now;
      }

      if (didSpawn || didRemove) {
        setRunnerObstacles([...s.obstacles]);
      }

      runnerRafRef.current = requestAnimationFrame(loop);
    };

    runnerLastFrameRef.current = null;
    runnerScoreLastUpdateRef.current = 0;
    runnerRafRef.current = requestAnimationFrame(loop);

    return () => {
      if (runnerRafRef.current) cancelAnimationFrame(runnerRafRef.current);
    };
  }, [runnerStarted, runnerGameOver, runnerHighScore]);

  // When obstacles are added/removed, their `left` needs to be set once so they don't render at an incorrect position.
  useEffect(() => {
    for (let i = 0; i < runnerObstacles.length; i += 1) {
      const o = runnerObstacles[i];
      const el = runnerObstacleElsRef.current.get(o.id);
      if (el) el.style.left = `${o.x}px`;
    }
  }, [runnerObstacles]);

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
    <main className="w-full pt-32 p-0 relative min-h-screen flex flex-col">
      {/* Hero Header */}
      <div className="text-center max-w-5xl mx-auto mb-24">


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
                  className="theme-minimize-btn text-neutral-600 hover:text-neutral-300 transition-colors"
                  onClick={() => setDesignReviewMinimized(!designReviewMinimized)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    {designReviewMinimized ? (
                      <path d="M9 12h6"/>
                    ) : (
                      <path d="M15 9L9 15"/>
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
                        className="theme-review-btn bg-white/5 text-white hover:bg-white/10 text-sm px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/5"
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
                  className="theme-minimize-btn text-neutral-600 hover:text-neutral-300 transition-colors"
                  onClick={() => setReferenceMinimized(!referenceMinimized)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    {referenceMinimized ? (
                      <path d="M9 12h6"/>
                    ) : (
                      <path d="M15 9L9 15"/>
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
            <div className="animate-on-scroll h-full bg-[#0C0D0F] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">Performance</div>
                  <button
                    className="theme-minimize-btn text-neutral-600 hover:text-neutral-300 transition-colors"
                    onClick={() => setGrowthMinimized(!growthMinimized)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      {growthMinimized ? (
                        <path d="M9 12h6"/>
                      ) : (
                        <path d="M15 9L9 15"/>
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
      </section>

      {/* Mini Runner Game */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="animate-on-scroll runner-card rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors bg-transparent">
            <div className="runner-card-surface bg-[#0C0D0F] p-8 pb-4 rounded-t-[2.5rem]">
              <div className="flex items-center justify-between mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                  Mini Game
                </div>
                <div className="text-sm text-neutral-400 font-medium">
                  Score: <span className="text-white">{runnerScore}</span> | Best: <span className="text-white">{runnerHighScore}</span>
                </div>
              </div>

              <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Flappy Bills</h3>
              <p className="text-neutral-400 mb-0">Press Play, then use Space or Up Arrow to fly.</p>
            </div>

            <div className="px-8">
            <div ref={runnerTrackRef} className="runner-track relative h-72 rounded-2xl border border-white/10 bg-transparent overflow-hidden">
              <div className="absolute bottom-6 left-0 right-0 h-[2px] bg-white/20" />
              <div
                ref={runnerPlayerElRef}
                className="runner-player absolute bottom-6 left-[72px] w-[50px] h-[50px]"
              >
                <img
                  src={moneyCashGif}
                  alt="Runner character"
                  className="w-full h-full object-contain runner-player-sprite"
                />
              </div>
              {runnerObstacles.map((obstacle) => (
                <div
                  key={obstacle.id}
                  ref={(el) => {
                    if (el) runnerObstacleElsRef.current.set(obstacle.id, el);
                    else runnerObstacleElsRef.current.delete(obstacle.id);
                  }}
                  className="runner-obstacle absolute rounded-sm"
                  style={{
                    width: `${obstacle.width}px`,
                    height: `${obstacle.height}px`,
                    ...(obstacle.position === 'top' ? { top: '0px' } : { bottom: '1.5rem' }),
                    backgroundColor: obstacle.color,
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '6px 6px'
                  }}
                />
              ))}
            </div>
            </div>

            <div className="runner-card-surface bg-[#0C0D0F] p-8 pt-5 rounded-b-[2.5rem]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!runnerStarted) {
                      resetRunnerState();
                    } else {
                      flyRunner();
                    }
                  }}
                  className="runner-play-btn px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
                >
                  {!runnerStarted ? (runnerGameOver ? 'Play Again' : 'Play') : 'Fly'}
                </button>
                {runnerGameOver && (
                  <span className="text-sm text-neutral-400">Game over. Press Play Again.</span>
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
