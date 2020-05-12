import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import NameBar from "./headerComponents/NameComponent";
import NotificationBell from "./headerComponents/NotificationBell";
import Avatar from "./headerComponents/Avatar";
import SearchBar from "./headerComponents/searchBar";

const HeaderComponent = styled.div`
  padding: 20px 30px;
  margin 0;
  background: var(--main-dark-blue);
  width: 100%;
  height: 70px;

  .image{
    margin-right: 20px;
  }

  .spacer{
    width 30px;
  }
`;

function Header(props) {
  return (
    <HeaderComponent>
      <Row vertical="center" horizontal="space-between" W>
        <SearchBar />
        <Row vertical="center">
          <NotificationBell />
          <div className="spacer"></div>
          <Avatar
            className="image"
            url={"https://avatars3.githubusercontent.com/u/21162888?s=460&v=4"}
          />
          <div className="spacer"></div>
          <Row vertical="center">
            <NameBar name={"John Doe"} />
          </Row>
        </Row>
      </Row>
    </HeaderComponent>
  );
}

export default Header;
