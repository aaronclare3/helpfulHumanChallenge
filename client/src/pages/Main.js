import React, { useEffect, useState } from "react";
import axios from "axios";
import ColorList from "../components/ColorList";
import "./Main.css";

const Main = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await axios
        .get("http://localhost:4000/colors")
        .then((res) => res.data);
      setColors(result);
    };
    fetchColors();
  }, []);

  return <div className='Main'>{colors && <ColorList colors={colors} />}</div>;
};

export default Main;
