import React from 'react';
import ReactDOM from 'react-dom/client';
import { CMSApp } from './CMSApp';
import { Provider } from 'react-redux';
import { store } from './components/common/store';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <CMSApp />
    </Provider>
  </React.StrictMode>
);
