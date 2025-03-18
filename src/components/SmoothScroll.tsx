
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true, // Changed from 'smooth' to 'smoothWheel'
      wheelMultiplier: 1, // Changed from 'mouseMultiplier' to 'wheelMultiplier'
      touchMultiplier: 2,
      infinite: false,
    });

    // Get scroll value for animations
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to call lenis.raf
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Configure ScrollTrigger to use Lenis's scroll position
    gsap.ticker.lagSmoothing(0);

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useEffect(() => {
    // Reveal animation for elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          element.classList.add('active');
        },
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
