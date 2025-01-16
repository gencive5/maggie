import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './styles/style.css';
import './styles/stylecarousel.css';
import './styles/simplesidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);