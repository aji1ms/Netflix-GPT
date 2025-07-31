import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </StrictMode>,
)
