import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6
}) => {
  const { ref, isInView } = useScrollAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, opacity: 0 };
      case 'down':
        return { y: -60, opacity: 0 };
      case 'left':
        return { x: 60, opacity: 0 };
      case 'right':
        return { x: -60, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 };
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
        return { x: 0, opacity: 1 };
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
