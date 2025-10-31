'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

export function FadeIn({ children }: { children: ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={domRef} className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
      {children}
    </div>
  );
}
