import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import NameBar from "./UserName";
import NotificationBell from "./NotificationBell";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import {auth} from '../../firebase'

const HeaderComponent = styled.div`
  padding: 0px 30px;
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
      <Row vertical="center" horizontal="space-between">
        <SearchBar />
        <Row vertical="center">
          <NotificationBell />
          <div className="spacer"></div>
          <Avatar
            className="image"
            url={auth.currentUser.photoURL}
          />
          <div className="spacer"></div>
          <Row vertical="center" style={{ height: "90px", zIndex: "1" }}>
            <NameBar name={auth.currentUser.displayName} />
          </Row>
        </Row>
      </Row>
    </HeaderComponent>
  );
}

export default Header;
