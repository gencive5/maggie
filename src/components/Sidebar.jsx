import React, { useState } from 'react';
import "../App.css";


const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`wrapper ${isToggled ? 'toggled' : ''}`}>
      <button onClick={handleToggle} className="btn btn-primary">
        Toggle Sidebar
      </button>
      <div className="sidebar-wrapper">
        <div className="sidebar-heading">Simple Sidebar</div>
        <ul className="list-group">
          <li className="list-group-item">Link 1</li>
          <li className="list-group-item">Link 2</li>
          <li className="list-group-item">Link 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
