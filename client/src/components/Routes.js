import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorDetail from "../pages/ColorDetail";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../pages/Main";
import { useQuery } from "@apollo/client";

import { LOAD_COLORS } from "../GraphQL/Queries";

const Routes = () => {
  const [colors, setColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [searchedColors, setSearchedColors] = useState(null);

  const { error, loading, data } = useQuery(LOAD_COLORS);

  const colorFilter = (color) => {
    const updatedColors = colors.filter((col) => col.colorCategory === color);
    setFilteredColors(updatedColors);
  };

  useEffect(() => {
    if (data) {
      setColors(data.getAllColors);
    }
  }, [data]);

  const passUpdatedList = (list) => {
    setSearchedColors(list);
  };

  return (
    <Router>
      {colors && <Sidebar colorFilter={colorFilter} colors={colors} />}
      {colors && <Header colors={colors} passUpdatedList={passUpdatedList} />}
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <Main
              {...props}
              colors={colors}
              filteredColors={filteredColors}
              searchedColors={searchedColors}
            />
          )}
        />
        <Route
          exact
          path='/:hex'
          render={(props) => <ColorDetail {...props} colors={colors} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
