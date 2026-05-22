import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { WatchlistProvider } from './context/WatchlistProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </StrictMode>
);
