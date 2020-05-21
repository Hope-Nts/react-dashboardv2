import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { Link } from "react-router-dom";
import {
  BarGraphIcon,
  CreditIcon,
  LoanIcon,
  ReportIcon,
  InfoIcon,
  SettingsIcon,
} from "../../contentComponents/icons/ProjectIcons";

const NavContainer = styled.div`
  padding: 0 5px 0;
  width: 200px;
  flex: 0 auto;
  min-height: 100vh;
  height: 100%;
  color: dark-grey;
  background-color: var(--main-dark-blue);

  .logo {
    height: 60px;
    background-color: orange;
    margin-bottom: 80px;
  }

  .row {
    margin-bottom: 7px;
  }

  .spacer {
    height: 200px;
  }
`;

const NavItemContainer = styled(Link)`
  width: 100%;
  font-size: 1em;
  padding: 8px;
  :hover {
    background-color: rgb(255, 255, 255, 0.4);
    border-left: 3px solid #fff;
  }

  .text {
    display: inline-block;
    margin-left: 15px;
    padding-top: 5px;
    jusify: center;
  }
`;

const SideBar = () => {
  return (
    <NavContainer>
      <div className="logo">Logo</div>
      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/">
          <BarGraphIcon />
          <div className="text">DashBoard</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/creditTab">
          <CreditIcon />
          <div className="text">Calculate Credit</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/loanApp">
          <LoanIcon />
          <div className="text">Apply for Loan</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/creditReport">
          <ReportIcon />
          <div className="text">Credit Report</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/help">
          <InfoIcon />
          <div className="text">Help</div>
        </NavItemContainer>
      </Row>

      <div className="spacer"></div>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/home/settings">
          <SettingsIcon />
          <div className="text">Settings</div>
        </NavItemContainer>
      </Row>
    </NavContainer>
  );
};

export default SideBar;
