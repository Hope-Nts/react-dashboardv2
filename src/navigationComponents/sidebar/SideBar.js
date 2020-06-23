import React, { Component } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
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
  width: 15%;
  flex: 0 auto;
  min-height: 100vh;
  color: dark-grey;
  background-color: var(--main-dark-blue);

  .active {
    background-color: rgb(255, 255, 255, 0.4);
    border-left: 5px solid var(--main-green);
  }

  .logo {
    height: 140px;
    margin-bottom: 20px;
    padding-top: -10px;
  }

  .row {
    margin-bottom: 7px;
  }

  .spacer {
    height: 304px;
  }
`;

const NavItemContainer = styled(Link)`
  width: 100%;
  font-size: 1em;
  padding: 8px;
  :hover {
    background-color: rgb(255, 255, 255, 0.4);
    border-left: 5px solid var(--main-green);
  }

  .text {
    display: inline-block;
    margin-left: 15px;
    padding-top: 5px;
    jusify: center;
  }
`;

class SideBar extends Component {
  state = {
    page: "",
  };
  render() {
    return (
      <NavContainer>
        <div className="logo">
          <img
            src={Logo}
            alt=""
            height="130"
            width="130"
            style={{ marginLeft: 20, marginTop: -25 }}
          />
        </div>
        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            className={this.state.page === "dashboard" ? "active" : null}
            to="/"
            onClick={() => this.setState({ page: "dashboard" })}
          >
            <BarGraphIcon />
            <div className="text">DashBoard</div>
          </NavItemContainer>
        </Row>

        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            to="/creditTab"
            className={this.state.page === "credit" ? "active" : null}
            onClick={() => this.setState({ page: "credit" })}
          >
            <CreditIcon />
            <div className="text">Calculate Credit</div>
          </NavItemContainer>
        </Row>

        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            to="/loanApp"
            className={this.state.page === "loan" ? "active" : null}
            onClick={() => this.setState({ page: "loan" })}
          >
            <LoanIcon />
            <div className="text">Apply for Loan</div>
          </NavItemContainer>
        </Row>

        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            to="/creditReport"
            className={this.state.page === "report" ? "active" : null}
            onClick={() => this.setState({ page: "report" })}
          >
            <ReportIcon />
            <div className="text">Credit Report</div>
          </NavItemContainer>
        </Row>

        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            to="/help"
            className={this.state.page === "help" ? "active" : null}
            onClick={() => this.setState({ page: "help" })}
          >
            <InfoIcon />
            <div className="text">Help</div>
          </NavItemContainer>
        </Row>

        <div className="spacer"></div>

        <Row className="row" horizontal="center" vertical="center">
          <NavItemContainer
            to="/settings"
            className={this.state.page === "settings" ? "active" : null}
            onClick={() => this.setState({ page: "settings" })}
          >
            <SettingsIcon />
            <div className="text">Settings</div>
          </NavItemContainer>
        </Row>
      </NavContainer>
    );
  }
}

export default SideBar;
