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
  padding: 0 10px 0;
  width: 250px;
  flex: 0 auto;
  height: 100%;
  min-height: 100vh;
  color: dark-grey;
  background-color: var(--main-dark-blue);

  .logo {
    height: 60px;
    background-color: orange;
    margin-bottom: 50px;
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
        <NavItemContainer to="/">
          <BarGraphIcon />
          <div className="text">DashBoard</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/">
          <CreditIcon />
          <div className="text">Calculate Credit</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/">
          <LoanIcon />
          <div className="text">Apply for Loan</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/">
          <ReportIcon />
          <div className="text">Credit Report</div>
        </NavItemContainer>
      </Row>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/">
          <InfoIcon />
          <div className="text">Help</div>
        </NavItemContainer>
      </Row>

      <div className="spacer"></div>

      <Row className="row" horizontal="center" vertical="center">
        <NavItemContainer to="/">
          <SettingsIcon />
          <div className="text">Settings</div>
        </NavItemContainer>
      </Row>
    </NavContainer>
  );
};

export default SideBar;
