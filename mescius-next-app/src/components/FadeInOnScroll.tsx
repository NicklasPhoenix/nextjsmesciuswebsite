// src/components/FadeInOnScroll.tsx
'use client'; // This component uses hooks, so it's a client component

import { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './FadeInOnScroll.module.css';

type FadeInProps = {
  children: ReactNode;
};

export default function FadeInOnScroll({ children }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the element is in view, set isVisible to true
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current!);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
    >
      {children}
    </div>
  );
}