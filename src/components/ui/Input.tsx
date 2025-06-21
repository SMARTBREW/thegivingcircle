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
      'w-full px-4 py-3 rounded-xl border transition-all duration-200',
      'focus:ring-4 focus:ring-opacity-20 focus:outline-none',
      leftIcon && 'pl-12',
      rightIcon && 'pr-12',
      error
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
        : variantStyles[variant],
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';