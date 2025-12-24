import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'primary' | 'accent';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, variant = 'primary', className, ...props }, ref) => {
    const variantStyles = {
      primary: 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
      accent: 'border-gray-300 focus:border-accent-500 focus:ring-accent-500',
    };

    const inputClasses = clsx(
      'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border transition-all duration-200',
      'text-sm sm:text-base',
      'focus:ring-2 sm:focus:ring-4 focus:ring-opacity-20 focus:outline-none',
      leftIcon && 'pl-10 sm:pl-12',
      rightIcon && 'pr-10 sm:pr-12',
      error
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
        : variantStyles[variant],
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs sm:text-sm font-medium text-text mb-1.5 sm:mb-2 break-words">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600 break-words">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500 break-words">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';