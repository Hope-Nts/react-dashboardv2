import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home/" component={LandingPage} />
        <Route exact path="/home/" component={LandingPage} />
        <Route path="/home/creditTab" component={LandingPage} />
        <Route path="/home/loanApp" component={LandingPage} />
        <Route path="/home/creditReport" component={LandingPage} />
        <Route path="/home/help" component={LandingPage} />
        <Route path="/home/settings" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
