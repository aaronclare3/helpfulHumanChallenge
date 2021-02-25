import React, { useEffect, useState } from "react";
import axios from "axios";
import LargeColor from "../components/LargeColor.js";
import "./ColorDetail.css";
import RelatedColors from "../components/RelatedColors";
import { Link } from "react-router-dom";

const ColorDetail = ({ match, colors }) => {
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
      {color.length > 0 && (
        <>
          <LargeColor color={color[0]} />
          <RelatedColors color={color[0]} colors={colors} />
          <div className='ColorDetail-buttonContainer'>
            <Link to='/'>
              <button className='ColorDetail-button'>Clear</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ColorDetail;
