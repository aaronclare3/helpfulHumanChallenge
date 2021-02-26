import React, { useEffect, useState } from "react";
import ColorItem from "./ColorItem";
import "./RelatedColors.css";

const RelatedColors = ({ color, colors }) => {
  const [similarColors, setSimilarColors] = useState([]);

  useEffect(() => {
    if (colors.length > 0) {
      const similar = colors.filter((col) => {
        return (
          col.colorCategory === color.colorCategory && col.hex !== color.hex
        );
      });
      setSimilarColors(similar);
    }
  }, [color, colors]);

  return (
    <div className='RelatedColors'>
      {similarColors.length > 0 &&
        similarColors.slice(0, 5).map((col) => {
          return <ColorItem key={col.hex} color={col} height={"200px"} />;
        })}
    </div>
  );
};

export default RelatedColors;
