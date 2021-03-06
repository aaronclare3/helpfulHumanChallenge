import React, { useState } from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";

const Sidebar = ({ colorFilter, colors }) => {
  const [currentColor, setCurrentColor] = useState(null);
  const history = useHistory();

  const handleClick = (color) => {
    setCurrentColor(color);
    colorFilter(color);
  };

  const randomizeColor = () => {
    const rand = colors[Math.floor(Math.random() * colors.length)];
    history.push(`/${rand.hex}`);
  };

  const colorCategories = [
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
          <button onClick={randomizeColor} className='Sidebar-button'>
            Random Color
          </button>
        </div>
        <ul className='Sidebar-list'>
          {colorCategories.map((col) => (
            <li
              key={col}
              onClick={() => handleClick(col)}
              className='Sidebar-listItem'
              style={{ color: col === currentColor ? "black" : "" }}>
              {col}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
