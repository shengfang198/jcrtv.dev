import { useEffect } from 'react';

/**
 * Observes .animate-on-scroll / .underline-expand across the whole page.
 * Re-scans on DOM changes so production timing (e.g. OnRender) cannot miss elements.
 */
function useScrollReveal() {
  useEffect(() => {
    const observedAnimate = new WeakSet();
    const observedUnderline = new WeakSet();

    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
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
      { threshold: 0.35 }
    );

    const scan = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (observedAnimate.has(el)) return;
        observedAnimate.add(el);
        animateObserver.observe(el);
      });

      document.querySelectorAll('.underline-expand').forEach((el) => {
        if (observedUnderline.has(el)) return;
        observedUnderline.add(el);
        underlineObserver.observe(el);
      });
    };

    scan();
    const rafId = requestAnimationFrame(scan);
    const timeoutId = window.setTimeout(scan, 400);

    const mutationObserver = new MutationObserver(() => {
      scan();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      mutationObserver.disconnect();
      animateObserver.disconnect();
      underlineObserver.disconnect();
    };
  }, []);
}

export default useScrollReveal;
