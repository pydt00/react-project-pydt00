
import { createRoot } from 'react-dom/client';
import App from './App';
import { WatchlistProvider } from './context/WatchlistProvider';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </BrowserRouter>
);
