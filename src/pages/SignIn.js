import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {signInWithGoogle,auth} from '../firebase'


import styled from "styled-components";

class SignIn extends Component {
  state = {
    user: null,
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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

  onSignIn = async (e) => {
    e.preventDefault();
    const {email,password}=this.state;
    console.log(email)
    console.log(password)
    try {
      const user  = await auth.signInWithEmailAndPassword(
        email,
        password,
      )

    } catch (error) {
      console.log(error);
    } 
  };

  onSignUp = async (e) => {
    e.preventDefault();
    const {firstName,lastName,email,password}=this.state;
    console.log(email)
    const displayName = firstName+" "+lastName;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
  
      user.updateProfile({ displayName });
    } catch (error) {
      alert(error);
    }
  
    this.setState({email: '', password: '' });
  };

  render() {
    if(this.state!=null){

    }
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
              <form onSubmit={this.onSignIn}>
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
                  name="password"
                  className="inputArea"
                  placeholder="password"
                  type="password"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <Btn  type="submit">SignIn</Btn>
              </form>
              <Btn onClick={signInWithGoogle}>SignIn with Google</Btn>
              <br />
              <Btn>Back</Btn>
            </InputContainer>
          </TabPanel>
          <TabPanel className="panel">
            <InputContainer>
              <form onSubmit={this.onSignUp}>
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
                  name="newPassWord"
                  placeholder="password"
                  className="inputArea"
                  type="password"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <Btn type="submit">Sign Up</Btn>
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
