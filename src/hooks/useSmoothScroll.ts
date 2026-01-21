import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Store Lenis instance globally so ScrollToTop can access it
declare global {
  interface Window {
    lenisInstance?: Lenis | null;
  }
}

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only initialize on desktop (screen width > 768px)
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop) {
      // Initialize Lenis for smooth scrolling
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Store globally for ScrollToTop component
      window.lenisInstance = lenisRef.current;

      // Animation frame loop
      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Handle resize
      const handleResize = () => {
        if (window.innerWidth <= 768 && lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
          window.lenisInstance = null;
        } else if (window.innerWidth > 768 && !lenisRef.current) {
          lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          });
          window.lenisInstance = lenisRef.current;
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        lenisRef.current?.destroy();
        lenisRef.current = null;
        window.lenisInstance = null;
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return lenisRef.current;
};
