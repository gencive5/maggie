import React, { useState } from 'react';
import "../App.css";
import sidebar from "/assets/images/sidebar2.png";


const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`wrapper ${isToggled ? 'toggled' : ''}`}>
      
      <div className="sidebar-wrapper" data-rate="0.3">
      <img src={sidebar} className="d-block"/>
        
      </div>
    </div>
  );
};

export default Sidebar;
