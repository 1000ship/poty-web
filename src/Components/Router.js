import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Theater from "Routes/Theater";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/search/:query" component={Search} />
    <Route path="/video/" component={Theater} />
  </Router>
);
