import React from "react";
import "./LargeColor.css";

const LargeColor = ({ color }) => {
  return (
    <div className='LargeColor' style={{ background: "#" + color.hex }}>
      {color.hex}
    </div>
  );
};

export default LargeColor;
