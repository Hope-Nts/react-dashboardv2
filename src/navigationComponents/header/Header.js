 import React, { Component } from 'react';
import styled from "styled-components";
import { Row } from "simple-flexbox";
import NameBar from "./UserName";
import NotificationBell from "./NotificationBell";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import {auth,firestore,} from '../../firebase'

const HeaderComponent = styled.div`
  padding: 0px 1%;
  margin 0;
  background: var(--main-dark-blue);
  width: 100%;
  height: 10%;

  .image{
    margin-right: 20px;
  }

  .spacer{
    width 30px;
  }
`;

class Header extends Component{
    state = {
    displayName: '',
    photoURL: '',
  };
  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }
  componentDidMount=async () =>{
    
    const snapshot = await this.userRef.get();
    this.setState({
      displayName:snapshot.data().displayName,
      email:snapshot.data().email,
      photoURL:snapshot.data().photoURL,
    });
  }

  render (){
    
    return(
    <HeaderComponent>
      <Row vertical="center" horizontal="space-between">
        <SearchBar />
        <Row vertical="center">
          <NotificationBell />
          <div className="spacer"></div>
          <Avatar
            className="image"
            url={this.state.photoURL}
          />
          <div className="spacer"></div>
          <Row vertical="center" style={{ height: "90px", zIndex: "1" }}>
            <NameBar name={this.state.displayName} />
          </Row>
        </Row>
      </Row>
    </HeaderComponent>
    )
  }
}

export default Header;
