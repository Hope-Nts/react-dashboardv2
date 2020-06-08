import React, { Component } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const MainContainer = styled.div`
  padding: 0px 10px 10px 10px;
  width: 450px;
  border-radius: 8px;
  margin-right: 20px;

  .panelContainer {
    padding: 10px;
    border-radius: 8px;
    background-color: var(--main-dark-blue);
    width: 450px;
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
    margin: 0px 0px 0px 300px;
    width: 110px;
    border-radius: 100px;
    list-style: none;
  }

  .title {
    float: left;
  }

  .toggle-area {
    width: 450px;
    margin-bottom: 0px;
    background-color: var(--main-dark-blue);
  }

  .active {
    background-color: var(--main-dark-blue);
    color: #fff;
  }

  .expenses {
    margin-left: -40px;
    flex: 1;
    li {
      margin: 30px 0;
      list-style: none;
    }
  }

  .expense-title {
    font-weight: bold;
    font-size: 1.3em;
  }

  .dates {
    margin-left: 0px;
    flex: 1;
    li {
      margin: 50px 0;
      list-style: none;
    }
  }

  .price {
    margin-right: -80px;
    font-weight: bold;
    flex: 1;
    li {
      margin: 50px 0;
      list-style: none;
    }
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

class CreditHistoryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  render() {
    return (
      <MainContainer>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <div className="title">Card Utilisation</div>
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
            <TabPanel style={{ display: "flex" }}>
              <div className="expenses">
                <ul>
                  <li>
                    <div className="expense-title">Netflix</div>10:00am
                  </li>
                  <li>
                    <div className="expense-title">Spotify</div>10:00am
                  </li>
                  <li>
                    <div className="expense-title">Apple Music</div>12:05pm
                  </li>
                  <li>
                    <div className="expense-title">Amzon Prime</div>08:00am
                  </li>
                </ul>
              </div>

              <div className="dates">
                <ul>
                  <li> 3 Jan</li>
                  <li>15 Jan</li>
                  <li>30 Jan</li>
                  <li>30 Jan</li>
                </ul>
              </div>

              <div className="price">
                <ul>
                  <li>{`$ ${"7.80"}`}</li>
                  <li>{`$ ${"10.20"}`}</li>
                  <li>{`$ ${"230.00"}`}</li>
                  <li>{`$ ${"40.20"}`}</li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel style={{ display: "flex" }}>
              <div className="expenses">
                <ul>
                  <li>
                    <div className="expense-title">Netflix</div>10:00am
                  </li>
                  <li>
                    <div className="expense-title">Spotify</div>10:00am
                  </li>
                  <li>
                    <div className="expense-title">Apple Music</div>12:05pm
                  </li>
                  <li>
                    <div className="expense-title">Amzon Prime</div>08:00am
                  </li>
                </ul>
              </div>

              <div className="dates">
                <ul>
                  <li> 3 Jan</li>
                  <li>15 Jan</li>
                  <li>30 Jan</li>
                  <li>30 Jan</li>
                </ul>
              </div>

              <div className="price">
                <ul>
                  <li>{`$ ${"7.80"}`}</li>
                  <li>{`$ ${"10.20"}`}</li>
                  <li>{`$ ${"230.00"}`}</li>
                  <li>{`$ ${"40.20"}`}</li>
                </ul>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </MainContainer>
    );
  }
}

export default CreditHistoryChart;
