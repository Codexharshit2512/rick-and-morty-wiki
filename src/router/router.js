import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import CharacterPage from "../screens/CharacterPage";
import SeasonPage from '../screens/SeasonPage.js';
import ErrorPage from '../components/ErrorPage';
import Loader from "../components/loader/Loader";

const routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/characters" component={CharacterPage} />
        <Route exact path="/loader" component={Loader} />
        <Route exact path="/seasons/:id" component={SeasonPage} />   
        <Route component={ErrorPage} /> 
      </Switch>
    </div>
  </Router>
);
export default routes;
