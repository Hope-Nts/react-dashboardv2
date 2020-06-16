import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "../navigationComponents/header/Header";
import SideBar from "../navigationComponents/sidebar/SideBar";
import SettingsTab from "./Settings";
import DashBoard from "./Dashboard";
import CreditTab from "./CreditTab";
import LoanAppTab from "./LoanApp";
import CreditReportTab from "./CreditReport";
import HelpTab from "./Help";

const MainContainer = styled.div`
  display: flex;
  .main-content {
    flex: 1;
    height: 100%;
  }
`;

const LandingPage = () => {
  return (
    <Router>
      <Switch>
        <MainContainer>
          <SideBar />
          <div className="main-content">
            <Header />
            <Route exact path="/" component={DashBoard} />
            <Route path="/creditTab" component={CreditTab} />
            <Route path="/loanApp" component={LoanAppTab} />
            <Route path="/creditReport" component={CreditReportTab} />
            <Route path="/help" component={HelpTab} />
            <Route path="/settings" component={SettingsTab} />
          </div>
        </MainContainer>
      </Switch>
    </Router>
  );
};

export default LandingPage;
