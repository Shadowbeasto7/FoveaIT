import React from 'react';

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'left', // 'left' | 'center'
  className = ''
}) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div>
        {subtitle && (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400 block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mt-4 text-gray-400 max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
