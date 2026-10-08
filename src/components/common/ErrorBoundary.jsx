import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Something went wrong</h2>
            <p className="text-sm text-slate-300 mb-6">
              An unexpected error occurred while rendering the page. Please try refreshing or returning to the home page.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
