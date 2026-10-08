import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'glass'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300';

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base font-semibold tracking-wide'
  };

  const variants = {
    primary: 'liquid-glass-btn-primary text-white shadow-lg shadow-indigo-600/25',
    secondary: 'liquid-glass-btn text-white hover:text-indigo-200',
    outline: 'liquid-glass-btn text-indigo-300 border-indigo-500/40 hover:text-white hover:border-indigo-400',
    glass: 'liquid-glass-btn text-slate-200 hover:text-white hover:border-indigo-400/40'
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

export default Button;
