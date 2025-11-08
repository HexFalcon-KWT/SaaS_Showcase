import { useEffect, useRef, useState } from "react";

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
      {
        threshold,
        ...restOptions,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, restOptions]);

  return { ref, isInView };
}
