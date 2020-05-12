import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./navigationComponents/header/Header";
import SideBar from "./navigationComponents/sidebar/SideBar";

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <Route
        path="/"
        render={(props) => (
          <Fragment>
            <MainContainer>
              <SideBar />
              <Header />
            </MainContainer>
          </Fragment>
        )}
      />
    </Router>
  );
}

export default App;
