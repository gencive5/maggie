import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import MobileParallax from "./components/MobileParallax";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="wrapperr">
        <Sidebar />
        <div className="page-content-wrapper">
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
      </div>

      <MobileParallax />
    </Router>
  );
}

export default App;
