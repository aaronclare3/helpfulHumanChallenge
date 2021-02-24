import React, { useEffect, useState } from "react";
import axios from "axios";
import LargeColor from "../components/LargeColor.js";
import "./ColorDetail.css";

const ColorDetail = ({ match }) => {
  const [color, setColor] = useState([]);

  useEffect(() => {
    const fetchColor = async (c) => {
      const result = await axios
        .get(`http://localhost:4000/colors/${c}`)
        .then((res) => res.data);
      setColor(result);
    };
    fetchColor(match.params.hex);
  }, [match.params.hex]);

  return (
    <div className='ColorDetail'>
      <div>{color.length > 0 && <LargeColor color={color[0]} />}</div>
    </div>
  );
};

export default ColorDetail;
