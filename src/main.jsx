import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router.jsx';
import ShopContext from './components/ShopContext.jsx';
import './cssModules/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContext.Provider>
      <Router></Router>
    </ShopContext.Provider>
  </React.StrictMode>
);
