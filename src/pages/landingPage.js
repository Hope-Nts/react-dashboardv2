import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "../navigationComponents/header/Header";
import SideBar from "../navigationComponents/sidebar/SideBar";
import SettingsTab from "./settings";
import DashBoard from "./dashboard";
import CreditTab from "./creditTab";
import LoanAppTab from "./loanApp";
import CreditReportTab from "./creditReport";
import HelpTab from "./help";

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
            <Route exact path="/home/" component={DashBoard} />
            <Route path="/home/creditTab" component={CreditTab} />
            <Route path="/home/loanApp" component={LoanAppTab} />
            <Route path="/home/creditReport" component={CreditReportTab} />
            <Route path="/home/help" component={HelpTab} />
            <Route path="/home/settings" component={SettingsTab} />
          </div>
        </MainContainer>
      </Switch>
    </Router>
  );
};

export default LandingPage;
