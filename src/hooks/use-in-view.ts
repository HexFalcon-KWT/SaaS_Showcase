import { useEffect, useRef, useState, useMemo } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  /**
   * Only trigger once when element comes into view
   * @default true
   */
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element is in the viewport
 * Useful for lazy loading components below the fold
 *
 * @example
 * const { ref, isInView } = useInView({ threshold: 0.1 });
 * return <div ref={ref}>{isInView && <HeavyComponent />}</div>
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, ...restOptions } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Memoize observer options to prevent recreating observer on every render
  const observerOptions = useMemo(
    () => ({
      threshold,
      ...restOptions,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [threshold, JSON.stringify(restOptions)]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        // If triggerOnce is true, disconnect observer after first trigger
        if (inView && triggerOnce) {
          observer.disconnect();
        }
      },
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, observerOptions]);

  return { ref, isInView };
}
