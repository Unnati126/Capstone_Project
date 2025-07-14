import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
//import { AuthProvider } from './context/AuthContext.jsx';
import AuthProvider from './context/AuthContext.jsx';

// This is the entry point for the React application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);