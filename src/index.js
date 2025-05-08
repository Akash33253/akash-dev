import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { FetchProvider } from './context/FetchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
    </ThemeProvider>
  </React.StrictMode>
);


