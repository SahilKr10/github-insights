import React from "react";
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../components/Search";
import Trending from "../components/Trending";

const Layout = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/Trending" component={Trending} />
        </Switch>
      </Router>
    </>
  );
};

export default Layout;