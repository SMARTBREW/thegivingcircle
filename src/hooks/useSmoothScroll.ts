import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

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
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        lenisRef.current?.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return lenisRef.current;
};
