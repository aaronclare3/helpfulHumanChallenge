import React, { useEffect, useState } from "react";
import LargeColor from "../components/LargeColor.js";
import "./ColorDetail.css";
import RelatedColors from "../components/RelatedColors";
import { Link } from "react-router-dom";
import { LOAD_COLOR } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

const ColorDetail = ({ match, colors }) => {
  const [color, setColor] = useState([]);
  const { loading, error, data } = useQuery(LOAD_COLOR, {
    variables: { hex: match.params.hex },
  });

  useEffect(() => {
    if (data) {
      setColor(data.getColor);
    }
  }, [data]);

  return (
    <div className='ColorDetail'>
      {color && (
        <>
          <LargeColor color={color} />
          <RelatedColors color={color} colors={colors} />
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
