'use client';

import { useEffect, useState } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { setRef, isIntersecting };
}
