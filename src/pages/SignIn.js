import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {signInWithGoogle} from '../firebase'

import styled from "styled-components";

class SignIn extends Component {
  state = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    newUsername: "",
    newPassword: "",
    tabIndex: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted;");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSignIn = (e) => {
    e.preventDefault();
    this.setState({
      userName: "",
      password: "",
    });
    console.log(this.state.password);
    console.log(this.state.userName);
  };

  onSignUp = (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      newUsername: "",
      newPassword: "",
    });
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.newPassword);
    console.log(this.state.email);
    console.log(this.state.newUsername);
  };

  render() {
    return (
      <MainContainer>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tab-list">
            <Link
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <p>Sign In</p>
            </Link>
            <Link
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <p>Sign Up</p>
            </Link>
          </TabList>
          <TabPanel className="panel">
            <InputContainer>
              <form>
                <input
                  name="userName"
                  className="inputArea"
                  placeholder="username"
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <input
                  name="password"
                  className="inputArea"
                  placeholder="password"
                  type="password"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <Btn onClick={(e) => this.onSignIn(e)}>SignIn</Btn>
              </form>
              <Btn onClick={signInWithGoogle}>SignIn with Google</Btn>
              <br />
              <Btn>Back</Btn>
            </InputContainer>
          </TabPanel>
          <TabPanel className="panel">
            <InputContainer>
              <form>
                <input
                  name="firstName"
                  placeholder="First Name"
                  className="inputArea"
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className="inputArea"
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <input
                  name="email"
                  placeholder="email!@example.com"
                  className="inputArea"
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <input
                  name="newUsername"
                  placeholder="username"
                  className="inputArea"
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <input
                  name="newPassWord"
                  placeholder="password"
                  className="inputArea"
                  type="password"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <Btn onClick={(e) => this.onSignUp(e)}>Sign Up</Btn>
              </form>
              <Btn>Back</Btn>
            </InputContainer>
          </TabPanel>
        </Tabs>
      </MainContainer>
    );
  }
}

export default SignIn;

const MainContainer = styled.div`
  padding: 100px;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--main-dark-blue);

  .tab-list {
    margin: 0px 0px 0px 429px;
    list-style: none;
  }

  .panel {
    text-align: center;
  }

  .tab-selected {
    border-bottom: 2px solid #fff;
    color: #fff;
  }

  .active {
    color: #fff;
  }
`;

const InputContainer = styled.div`
margin-top:10px;
.inputArea {
  color: #fff;
  padding: 5px;
  width: 250px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;

  ::placeholder {
    color: #fff;
  }`;

const Link = styled(Tab)`
  margin-right: 10px;
  display: inline-block;
  font-size: 2em;
  color: grey;

  :hover {
    cursor: pointer;
  }
`;

const Btn = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #fff;
  margin-top: 20px;
  color: grey;
`;
