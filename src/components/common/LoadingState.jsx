import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingState({ message = "Loading intelligent content..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 min-h-[250px] rounded-2xl glass-card text-center">
      <div className="relative mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      </div>
      <p className="text-sm font-medium text-indigo-300 tracking-wide">{message}</p>
    </div>
  );
}

export default LoadingState;
