import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport it gets the class "visible"
 * (which triggers the CSS .reveal or .reveal-stagger transition).
 */
export function useReveal<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
