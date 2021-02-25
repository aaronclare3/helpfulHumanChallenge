import React from "react";
import "./LargeColor.css";

const LargeColor = ({ color }) => {
  return (
    <div className='LargeColor'>
      <div
        className='LargeColor-color'
        style={{ background: "#" + color.hex }}></div>
      <div className='LargeColor-detail'>#{color.hex}</div>
    </div>
  );
};

export default LargeColor;
