import React from 'react';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
