import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div>
        <div className='Sidebar-buttonContainer'>
          <button className='Sidebar-button'>Random Color</button>
        </div>
        <ul className='Sidebar-list'>
          <li className='Sidebar-listItem'>Red</li>
          <li className='Sidebar-listItem'>Orange</li>
          <li className='Sidebar-listItem'>Yellow</li>
          <li className='Sidebar-listItem'>Green</li>
          <li className='Sidebar-listItem'>Blue</li>
          <li className='Sidebar-listItem'>Purple</li>
          <li className='Sidebar-listItem'>Brown</li>
          <li className='Sidebar-listItem'>Gray</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
