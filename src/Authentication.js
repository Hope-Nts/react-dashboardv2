import React from 'react';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import LoanAppTab from "./pages/LoanApp";
import CreditTab from "./pages/CreditTab";
import CreditReportTab from "./pages/CreditReport";
import HelpTab from "./pages/Help";
import SettingsTab from "./pages/Settings";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

const Authentication = ({ user, loading }) => {
  if (loading) return null;
  if(user) return (<Router>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/creditTab" component={CreditTab} />
    <Route path="/loanApp" component={LoanAppTab} />
    <Route path="/creditReport" component={CreditReportTab} />
    <Route path="/help" component={HelpTab} />
    <Route path="/settings" component={SettingsTab} />
    <Redirect to="/"/>
    </Switch>
  </Router>)
  else
    return (
        <Router>
    <Switch>
    <Route exact path="/signin" component={SignIn} />
    <Redirect to="/signin"/>
    </Switch>
  </Router>
    )
};

export default Authentication;