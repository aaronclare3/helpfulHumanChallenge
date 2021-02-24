import React from "react";
import "./ColorItem.css";

const ColorItem = ({ color }) => {
  return (
    <div className='ColorItem'>
      <div className='ColorItem-color' style={{ background: `#${color.hex}` }}>
        {color.hex}, {color.colorCategory}
      </div>
      <div className='ColorItem-detail'>hello</div>
    </div>
  );
};

export default ColorItem;
