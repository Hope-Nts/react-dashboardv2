import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import {
  BarGraphIcon,
  CreditIcon,
  LoanIcon,
  ReportIcon,
  InfoIcon,
  SettingsIcon,
} from "../../contentComponents/icons/ProjectIcons";

const NavContainer = styled.div`
  width: 200px;
  flex: 0 auto;
  height: 100%;
  min-height: 100vh;
  color: dark-grey;
  background-color: (main-dark-blue);
`;

const SideBar = () => {
  return (
    <NavContainer>
      <h1>sidebar</h1>
    </NavContainer>
  );
};

export default SideBar;
