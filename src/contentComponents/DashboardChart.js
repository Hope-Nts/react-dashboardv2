import React, { Component } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const MainContainer = styled.div`
  padding: 0px 10px 10px 10px;
  width: 720px;
  border-radius: 8px;
  margin-right: 20px;

  .panelContainer {
    padding: 10px;
    border-radius: 8px;
    background-color: var(--main-dark-blue);
    width: 720px;
  }

  .spacer {
    display: inline-block;
    width: 10px;
    margin: 0px;
  }

  .toggle {
    color: black;
    background-color: grey;
    text-align: center;
    padding: 1px 0px 0px 0px;
    margin: 0px 0px 0px 600px;
    width: 110px;
    border-radius: 100px;
    list-style: none;
  }

  .toggle-area {
    width: 750px;
    margin-bottom: 10px;
    background-color: var(--main-light-blue);
  }

  .active {
    background-color: var(--main-dark-blue);
    color: #fff;
  }
`;

const Link = styled(Tab)`
  height: 25px;
  display: inline-block;
  color: dark-grey;
  padding: 4px;
  background-color: grey;
  border-radius: 100px;
  margin: 0px;
  font-size: 1em;

  :hover {
    cursor: pointer;
  }
`;

class Chart extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <MainContainer>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <div className="toggle-area">
            <TabList className="toggle ">
              <Link
                className={`${
                  this.state.tabIndex === 0 ? "tab-selected active" : null
                }`}
              >
                Daily
              </Link>
              <Link
                className={`${
                  this.state.tabIndex === 1 ? "tab-selected active" : null
                }`}
              >
                Monthly
              </Link>
            </TabList>
          </div>
          <div className="panelContainer">
            <TabPanel>
              <h1>Daily</h1>
            </TabPanel>
            <TabPanel>
              <h1>Monthly</h1>
            </TabPanel>
          </div>
        </Tabs>
      </MainContainer>
    );
  }
}

export default Chart;
