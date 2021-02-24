import React from "react";
import "./ColorItem.css";
import { Link } from "react-router-dom";
const ColorItem = ({ color }) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/${color.hex}`}>
        <div className='ColorItem'>
          <div
            className='ColorItem-color'
            style={{ background: `#${color.hex}` }}></div>
          <div className='ColorItem-detail'>#{color.hex}</div>
        </div>
      </Link>
    </div>
  );
};

export default ColorItem;
