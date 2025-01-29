import React from 'react';
import "../App.css";
import sidebar from "/assets/images/sidebar2.png";

const Sidebar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <img src={sidebar} className="d-block" alt="Sidebar" />
      </div>
    </div>
  );
};

export default Sidebar;
