import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error from "./pages/Error";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
