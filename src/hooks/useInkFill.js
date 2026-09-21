import { useEffect } from 'react';

const INK_SELECTOR = [
  '.ink-fill-btn',
  '.theme-get-in-touch-btn',
  '.theme-action-btn',
  '.theme-review-btn',
  '.runner-play-btn',
  '.ecommerce-option-btn',
].join(', ');

const EXIT_MS = 300;

function clearInkTimers(el) {
  window.clearTimeout(el._inkExitTimer);
}

function snapToBottom(el) {
  el.classList.add('ink-reset');
  el.classList.remove('ink-in', 'ink-exit');
  void el.offsetWidth;
}

function fill(el) {
  if (!el || el.classList.contains('project-modal-nav-btn')) {
    return;
  }
  if (el.classList.contains('ink-in') && !el.classList.contains('ink-exit')) {
    return;
  }
  el._inkHovering = true;
  clearInkTimers(el);
  snapToBottom(el);
  requestAnimationFrame(() => {
    if (!el._inkHovering) {
      return;
    }
    el.classList.remove('ink-reset');
    el.classList.add('ink-in');
  });
}

function resetAfterExit(el) {
  snapToBottom(el);
  requestAnimationFrame(() => {
    el.classList.remove('ink-reset');
  });
}

function exit(el) {
  if (!el || el.classList.contains('project-modal-nav-btn')) {
    return;
  }
  el._inkHovering = false;
  if (el.classList.contains('is-active') || el.classList.contains('ink-exit')) {
    return;
  }
  if (!el.classList.contains('ink-in')) {
    snapToBottom(el);
    requestAnimationFrame(() => {
      el.classList.remove('ink-reset');
    });
    return;
  }
  clearInkTimers(el);
  el.classList.add('ink-exit');
  el._inkExitTimer = window.setTimeout(() => {
    resetAfterExit(el);
  }, EXIT_MS);
}

export default function useInkFill() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      return undefined;
    }

    const cleanups = [];

    function bind(el) {
      if (el.dataset.inkBound === '1' || el.classList.contains('project-modal-nav-btn')) {
        return;
      }
      el.dataset.inkBound = '1';
      const onEnter = () => fill(el);
      const onLeave = () => exit(el);
      el.addEventListener('pointerenter', onEnter);
      el.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        clearInkTimers(el);
        el.removeEventListener('pointerenter', onEnter);
        el.removeEventListener('pointerleave', onLeave);
        delete el.dataset.inkBound;
      });
    }

    function scan() {
      document.querySelectorAll(INK_SELECTOR).forEach(bind);
    }

    scan();
    const observer = new MutationObserver(scan);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
