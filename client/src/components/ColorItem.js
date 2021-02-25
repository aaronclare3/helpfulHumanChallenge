import React from "react";
import "./ColorItem.css";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const ColorItem = ({ color, height }) => {
  const copyToClip = () => {
    setTimeout(function () {
      alert("Copied to clipboard!");
    }, 1);
    navigator.clipboard.writeText("#" + color.hex);
  };

  return (
    <div>
      <div className='ColorItem' style={{ height: height }}>
        <Link
          style={{
            textDecoration: "none",
            background: `#${color.hex}`,
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
          }}
          to={`/${color.hex}`}>
          <div className='ColorItem-color'></div>
        </Link>
        <Tooltip title='Copy to Clipboard' arrow>
          <div onClick={copyToClip} className='ColorItem-detail'>
            #{color.hex}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default ColorItem;
