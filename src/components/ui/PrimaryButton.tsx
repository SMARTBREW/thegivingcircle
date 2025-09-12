import React from 'react';
import { Users2 } from 'lucide-react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  href?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  href
}) => {
  const baseClasses = "group font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg rounded-full";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    secondary: "bg-white text-purple-600 hover:bg-gray-100 border border-purple-200",
    outline: "border border-white text-white hover:bg-white/10"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg",
    lg: "px-8 py-4 text-lg"
  };
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed hover:scale-100" 
    : "";
  
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const buttonContent = (
    <>
      {icon && icon}
      <span>{children}</span>
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={finalClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;
