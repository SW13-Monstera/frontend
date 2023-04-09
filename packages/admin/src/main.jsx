import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from './ErrorBoundary';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
