import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorDetail from "../pages/ColorDetail";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../pages/Main";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/:hex' component={ColorDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
