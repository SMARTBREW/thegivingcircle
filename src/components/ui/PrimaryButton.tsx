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
  const baseClasses = "group font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 rounded-full whitespace-nowrap";
  
  const variantClasses = {
    primary: "bg-green-700 text-white hover:bg-green-800 active:bg-green-900",
    secondary: "bg-white text-green-700 hover:bg-green-50 border border-green-200",
    outline: "border border-white text-white hover:bg-white/10"
  };
  
  const sizeClasses = {
    sm: "px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm",
    md: "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg",
    lg: "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg"
  };
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed hover:scale-100" 
    : "";
  
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const buttonContent = (
    <>
      {icon && <span className="[&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-4 sm:[&>svg]:h-4">{icon}</span>}
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
