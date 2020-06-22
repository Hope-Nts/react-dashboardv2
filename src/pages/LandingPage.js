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
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .main-content {
    width: 85%;
    float: right;
    height: 100%;
    min-height: 100vh;
  }
  .side-bar {
    min-height: 100vh;
    height: 100%;
    width: 15%;
    float: left;
  }
`;

const LandingPage = () => {
  return (
    <Router>
      <Switch>
        <MainContainer>
          <div className="side-bar">
            <SideBar />
          </div>

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
