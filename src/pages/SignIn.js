import React, { useCallback,useState,useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {signInWithGoogle,auth} from '../firebase'


import styled from "styled-components";

const SignIn = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const onSignIn =  useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth
          .signInWithEmailAndPassword(email.value, password.value);
      
      } catch (error) {
        alert(error);
      }
    },
    []
  );
  const onSignUp =  useCallback(
    async event => {
      event.preventDefault();
      const {firstName, lastName,email, password } = event.target.elements;
      const displayName = firstName.value+" "+lastName.value;
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value,
        );
    
        user.updateProfile({ displayName });
      } catch (error) {
        alert(error);
      }
    },
    []
  );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      return <Redirect to="/" />;
    }
    return (
      <MainContainer>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(tabIndex) => setTabIndex(tabIndex)}
        >
          <TabList className="tab-list">
            <Link
              className={`${
                tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <p>Sign In</p>
            </Link>
            <Link
              className={`${
               tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <p>Sign Up</p>
            </Link>
          </TabList>
          <TabPanel className="panel">
            <InputContainer>
              <form onSubmit={onSignIn}>
                <input
                  id="email"
                  placeholder="email!@example.com"
                  className="inputArea"
                  type="text"
                />
                <br />
                <br />
                <input
                  id="password"
                  className="inputArea"
                  placeholder="password"
                  type="password"
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
              <form onSubmit={onSignUp}>
                <input
                  id="firstName"
                  placeholder="First Name"
                  className="inputArea"
                  type="text"
                />
                <br />
                <br />
                <input
                  id="lastName"
                  placeholder="Last Name"
                  className="inputArea"
                  type="text"
                />
                <br />
                <br />
                <input
                  id="email"
                  placeholder="email!@example.com"
                  className="inputArea"
                  type="text"
                />
                <br />
                <br />
                <input
                  id="password"
                  placeholder="password"
                  className="inputArea"
                  type="password"
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

export default withRouter(SignIn);

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
