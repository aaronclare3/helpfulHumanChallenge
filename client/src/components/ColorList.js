import React from "react";
import ColorItem from "./ColorItem";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  return (
    <div className='ColorList'>
      {colors.length > 0 &&
        colors.map((col) => {
          return <ColorItem key={col._id} color={col} />;
        })}
    </div>
  );
};

export default ColorList;
