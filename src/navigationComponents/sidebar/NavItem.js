import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled(Link)`
  width: 100%;
  margin: 20px 0 20px;
  font-size: 1em;
  padding: 10px 15px 10px;

  .text {
    display: inline-block;
    margin-left: 20px;
    padding-top: 5px;
    justify: center;
  }
`;

const NavItem = (icon, title) => {
  return (
    <NavContainer>
      <Fragment>{icon}</Fragment>
      <div className="text">{title}</div>
    </NavContainer>
  );
};

export default NavItem;
