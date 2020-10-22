import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MainHaikaiScreen from './containers/MainHaikaiScreen';

export default function AppRouter(props){
  return (
    <Router>
      <Switch>
        <Route exact path="/visualHaiku">
          <MainHaikaiScreen theme={props.theme}></MainHaikaiScreen>
        </Route>
      </Switch>
    </Router>
  )
}
