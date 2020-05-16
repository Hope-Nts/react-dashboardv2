import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import InputTab from "../contentComponents/inputTab";
import styled from "styled-components";

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

const InputContainer = styled.div``;

const Link = styled(Tab)`
  margin-right: 10px;
  display: inline-block;
  font-size: 2em;
  color: grey;

  :hover {
    cursor: pointer;
  }
`;

const SignInBtn = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #fff;
  margin-top: 20px;
  color: grey;
`;

const BackBtn = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #fff;
  margin-top: 20px;
  color: grey;
`;

class SignIn extends Component {
  state = {
    tabIndex: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted;");
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
                <InputTab placeholder="email@example.com" />
                <InputTab placeholder="password" />
                <SignInBtn type="submit" value="Continue" />
              </form>
              <BackBtn>Back</BackBtn>
            </InputContainer>
          </TabPanel>
          <TabPanel className="panel">
            <InputContainer>
              <form>
                <InputTab placeholder="First Name" />
                <InputTab placeholder="Last Name" />
                <InputTab placeholder="email!@example.com" />
                <InputTab placeholder="password" />
                <SignInBtn type="submit" value="Continue" />
              </form>
            </InputContainer>
          </TabPanel>
        </Tabs>
      </MainContainer>
    );
  }
}

export default SignIn;
