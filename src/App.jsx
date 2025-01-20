import React from 'react';
import Sidebar from './components/Sidebar';

import Portfolio from './components/Portfolio';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="page-content-wrapper">
       
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
