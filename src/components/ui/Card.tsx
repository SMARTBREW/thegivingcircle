import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'accent';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  variant = 'default',
  onClick,
}) => {
  const baseClasses = 'rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white border-gray-100',
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-100',
    accent: 'bg-gradient-to-br from-accent-50 to-accent-100 border-accent-100',
  };
  
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6 md:p-8',
    lg: 'p-6 sm:p-8 md:p-10',
  };

  const Component = onClick ? motion.div : 'div';
  const motionProps = onClick ? {
    whileHover: { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
    whileTap: { scale: 0.98 },
    className: clsx(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      hover && 'hover:shadow-2xl cursor-pointer',
      className
    ),
    onClick,
  } : {
    className: clsx(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className
    )
  };

  return (
    <Component {...motionProps}>
      {children}
    </Component>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={clsx('mb-3 sm:mb-4', className)}>
    {children}
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={clsx(className)}>
    {children}
  </div>
);