import React from "react";
import ColorList from "../components/ColorList";
import "./Main.css";

const Main = ({ colors, filteredColors }) => {
  return (
    <div className='Main'>
      {filteredColors.length > 0 ? (
        <ColorList colors={filteredColors} />
      ) : (
        <ColorList colors={colors} />
      )}
    </div>
  );
};

export default Main;
