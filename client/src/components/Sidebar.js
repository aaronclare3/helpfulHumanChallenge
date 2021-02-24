import React from "react";
import "./Sidebar.css";

const Sidebar = ({ colorFilter }) => {
  const handleClick = (color) => {
    console.log("clicking");
    colorFilter(color);
  };
  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Brown",
    "Gray",
  ];
  return (
    <div className='Sidebar'>
      <div>
        <div className='Sidebar-buttonContainer'>
          <button className='Sidebar-button'>Random Color</button>
        </div>
        <ul className='Sidebar-list'>
          {colors.map((col) => (
            <li
              key={col}
              onClick={() => handleClick(col)}
              className='Sidebar-listItem'>
              {col}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
