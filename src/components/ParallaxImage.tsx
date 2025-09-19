import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useScrollAnimation';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  children?: React.ReactNode;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  children
}) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: offset }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {children}
      </motion.div>
    </div>
  );
};
