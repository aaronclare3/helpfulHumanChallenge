import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorDetail from "../pages/ColorDetail";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../pages/Main";
import "./App.css";
import axios from "axios";

const App = () => {
  const [colors, setColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);

  const colorFilter = (color) => {
    const updatedColors = colors.filter((col) => col.colorCategory === color);
    setFilteredColors(updatedColors);
  };

  useEffect(() => {
    const fetchColors = async () => {
      const result = await axios
        .get("http://localhost:4000/colors")
        .then((res) => res.data);
      setColors(result);
    };
    fetchColors();
  }, []);

  return (
    <div>
      <Router>
        <Sidebar colorFilter={colorFilter} />
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Main
                {...props}
                colors={colors}
                filteredColors={filteredColors}
              />
            )}
          />
          <Route exact path='/:hex' component={ColorDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
