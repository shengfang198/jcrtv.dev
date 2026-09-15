import { useEffect } from 'react';

/**
 * Observes .animate-on-scroll / .underline-expand across the whole page.
 * Uses a strict intersection check and keyframe-friendly class toggling
 * so the ease-up plays when the section enters view (including on OnRender).
 */
function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observedAnimate = new WeakSet();
    const observedUnderline = new WeakSet();

    const reveal = (el) => {
      if (el.classList.contains('animate')) return;
      // Force starting styles to commit before the reveal class (helps production CSS timing)
      void el.offsetWidth;
      el.classList.add('animate');
    };

    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          animateObserver.unobserve(entry.target);
        });
      },
      {
        threshold: [0.15, 0.25],
        rootMargin: '0px 0px -12% 0px'
      }
    );

    const underlineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.width = '100%';
          entry.target.classList.add('wave-animated');
          underlineObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.4, rootMargin: '0px 0px -8% 0px' }
    );

    const scan = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (observedAnimate.has(el)) return;
        observedAnimate.add(el);

        if (reducedMotion) {
          el.classList.add('animate');
          return;
        }

        animateObserver.observe(el);
      });

      document.querySelectorAll('.underline-expand').forEach((el) => {
        if (observedUnderline.has(el)) return;
        observedUnderline.add(el);
        underlineObserver.observe(el);
      });
    };

    // Wait for layout + stylesheets so the hidden starting state is applied first
    const start = () => {
      scan();
      requestAnimationFrame(() => {
        requestAnimationFrame(scan);
      });
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
      // Fallback if load is slow but DOM is ready
      window.setTimeout(start, 0);
    }

    let scanTimer = 0;
    const mutationObserver = new MutationObserver(() => {
      window.clearTimeout(scanTimer);
      scanTimer = window.setTimeout(scan, 80);
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.clearTimeout(scanTimer);
      window.removeEventListener('load', start);
      mutationObserver.disconnect();
      animateObserver.disconnect();
      underlineObserver.disconnect();
    };
  }, []);
}

export default useScrollReveal;
