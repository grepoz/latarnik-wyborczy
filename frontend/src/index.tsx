import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const defaultRouting = process.env.REACT_APP_DEFAULT_ROUTING_PATH || '';

root.render(
  <React.StrictMode>
      <BrowserRouter basename={defaultRouting}>
            <App />
      </BrowserRouter>
  </React.StrictMode>
);
