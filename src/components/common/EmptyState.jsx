import React from 'react';
import { FolderSearch } from 'lucide-react';
import Button from './Button';

export function EmptyState({ 
  title = "No projects found", 
  description = "No items match your selected filter criteria. Try choosing a different category.",
  actionText,
  onAction 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 rounded-2xl glass-card text-center max-w-md mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-4 shadow-lg shadow-indigo-950/50">
        <FolderSearch className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-6">{description}</p>
      {actionText && onAction && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
