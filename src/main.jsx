import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createHead, UnheadProvider } from '@unhead/react/client';
import App from './App';
import ErrorBoundary from './components/common/ErrorBoundary';
import './index.css';

// Initialize Unhead instance for dynamic SEO document head management
const head = createHead();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <UnheadProvider value={head}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UnheadProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

