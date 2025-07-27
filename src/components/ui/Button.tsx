import React from 'react';
import { ButtonProps } from '@/types/api';

interface ButtonComponentProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonComponentProps> = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  width = 'auto',
  leftIcon,
  rightIcon
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm w-24',
    md: 'px-6 py-3 text-base w-32',
    lg: 'px-8 py-4 text-lg w-40',
    xl: 'px-10 py-5 text-xl w-56'
  };

  const widthClasses = {
    auto: '',
    sm: 'w-24',
    md: 'w-32',
    lg: 'w-40',
    xl: 'w-48',
    '2xl': 'w-56',
    '3xl': 'w-64',
    full: 'w-full'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };
  
  // Priority: fullWidth prop overrides width prop
  const finalWidthClass = fullWidth ? 'w-full' : widthClasses[width as keyof typeof widthClasses] || '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${finalWidthClass}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {leftIcon && (
        <span className={`mr-2 ${iconSizeClasses[size]}`}>
          {leftIcon}
        </span>
      )}
      {text}
      {rightIcon && (
        <span className={`ml-2 ${iconSizeClasses[size]}`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button; 