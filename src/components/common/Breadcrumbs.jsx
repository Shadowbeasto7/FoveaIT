import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 py-2 px-4 rounded-full glass-card inline-flex items-center space-x-2 text-xs text-slate-400">
      <Link to="/" className="hover:text-indigo-400 transition-colors inline-flex items-center">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-500/50" />
            {isLast ? (
              <span className="text-indigo-300 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.url} className="hover:text-indigo-400 transition-colors truncate max-w-[150px] sm:max-w-none">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
