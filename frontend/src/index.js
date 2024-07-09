import React from 'react';
import ReactDOM from 'react-dom/client';
import { CMSFrontend } from './CMSFrontend';
import "./commons/css/styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CMSFrontend />
  </React.StrictMode>
);
