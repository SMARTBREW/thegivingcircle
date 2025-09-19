import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "0px 0px -100px 0px"
  });

  return { ref, isInView };
};

// Hook for staggered animations
export const useStaggeredAnimation = (delay = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });

  return { ref, isInView, delay };
};

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
