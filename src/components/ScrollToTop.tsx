import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure page content is rendered
    const timer = setTimeout(() => {
      // Check if Lenis is available (smooth scroll library)
      const lenisInstance = window.lenisInstance;
      
      if (lenisInstance) {
        // Use Lenis scrollTo with smooth behavior
        lenisInstance.scrollTo(0, { 
          duration: 1.2, // Smooth scroll duration
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        // Fallback to native scrollTo with smooth behavior
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Smooth scroll animation
        });
      }
    }, 100); // Small delay to ensure page content is rendered

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
