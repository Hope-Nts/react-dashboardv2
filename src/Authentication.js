import React from 'react';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import LoanAppTab from "./pages/LoanApp";
import CreditTab from "./pages/CreditTab";
import CreditReportTab from "./pages/CreditReport";
import HelpTab from "./pages/Help";
import SettingsTab from "./pages/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import AnswersPage from "./contentComponents/helpComponents/PostWithReply";

const Authentication = () => {
return (
    <AuthProvider>
    <Router>
        <Switch>
          <Route   path="/signin" component={SignIn} />
          <PrivateRoute path="/" component={LandingPage} />
          <PrivateRoute path="/creditTab" component={CreditTab} />
          <PrivateRoute path="/loanApp" component={LoanAppTab} />
          <PrivateRoute path="/creditReport" component={CreditReportTab} />
          <PrivateRoute path="/help" component={HelpTab} />
          <PrivateRoute path="/settings" component={SettingsTab} />
          <PrivateRoute path="/posts/:id" component={AnswersPage} />
        </Switch>
    </Router>
  </AuthProvider>
  )
};

export default Authentication;