import React from 'react';

export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm bg-violet-950/40 text-violet-300 border-violet-500/20 ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
