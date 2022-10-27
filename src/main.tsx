import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/reset.css';
import './styles/normailize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactGA from 'react-ga';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './ErrorBoundary';

const GA_TRACKING_ID = { development: 'G-SX59LH5T59', production: 'G-5YDJ48WT3K' };

ReactGA.initialize(
  window.location.href.includes('dev') ? GA_TRACKING_ID.development : GA_TRACKING_ID.production,
);

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root container missing in index.html');

const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
