import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from "./context/AuthContext";
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.Fragment>
);

