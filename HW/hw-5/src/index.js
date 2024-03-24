import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RegistrationForm } from './RegistrationForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrationForm />
    <App />
  </React.StrictMode>
);