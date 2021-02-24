import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await axios("http://localhost:4000/colors").then(
        (res) => res.data
      );
      setColors(result);
    };
    fetchColors();
  }, []);

  return <div>hi</div>;
};

export default Main;
