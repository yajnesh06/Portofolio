
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with improved settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1, // Linear interpolation factor for smoother scrolling
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    // Reset scroll position on component mount
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Function to scroll to a specific element
  const scrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (element && lenisRef.current) {
      // Cast the element to HTMLElement to satisfy TypeScript
      lenisRef.current.scrollTo(element as HTMLElement);
    }
  };

  return <div className="smooth-scroll">{children}</div>;
};

export default SmoothScroll;
