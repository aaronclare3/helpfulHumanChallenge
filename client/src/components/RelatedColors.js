import React, { useEffect, useState } from "react";
import ColorItem from "./ColorItem";
import "./RelatedColors.css";

const RelatedColors = ({ color, colors }) => {
  const [similarColors, setSimilarColors] = useState([]);

  useEffect(() => {
    if (color && colors.length > 0) {
      const similar = colors.filter((col) => {
        return (
          col.colorCategory === color.colorCategory && col._id !== color._id
        );
      });
      setSimilarColors(similar);
    }
  }, [color, colors]);

  return (
    <div className='RelatedColors'>
      {similarColors.length > 0 &&
        similarColors.slice(0, 5).map((col) => {
          return <ColorItem key={col._id} color={col} />;
        })}
    </div>
  );
};

export default RelatedColors;
