import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top for better performance
    // No smooth scroll, no delays - instant scroll for better Core Web Vitals
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
