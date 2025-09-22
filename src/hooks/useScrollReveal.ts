import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1, rootMargin = '0px 0px -100px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejar de observar para mejor performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin, // Se activa cuando está 100px antes de ser visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};