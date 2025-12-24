import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  rounded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  icon,
  rounded = false,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:ring-4 focus:ring-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    accent: 'bg-gradient-to-r green-700 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-green-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-text hover:bg-neutral focus:ring-neutral',
  };

  const sizes = {
    sm: 'px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm',
    md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
    xl: 'px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl',
  };

  const buttonClasses = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    rounded ? 'rounded-full' : 'rounded-xl',
    className
  );

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props as any}
    >
      {loading && (
        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1 sm:mr-2" />
      )}
      {icon && !loading && <span className="mr-1 sm:mr-2 [&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-4 sm:[&>svg]:h-4">{icon}</span>}
      {children}
    </motion.button>
  );
};