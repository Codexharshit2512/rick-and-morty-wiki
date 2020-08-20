import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import CharacterPage from "../screens/CharacterPage";
import ErrorPage from "../components/ErrorPage";

const routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/characters" component={CharacterPage} />
        <Route component = {ErrorPage}/>
      </Switch>
    </div>
  </Router>
);
export default routes;
