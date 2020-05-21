import React, { Component } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const data = [
  {
    name: "Feb",
    uv: 700,
  },
  {
    name: "Mar",
    uv: 400,
  },
  {
    name: "Apr",
    uv: 500,
  },
  {
    name: "May",
    uv: 678,
  },
  {
    name: "Jun",
    uv: 509,
  },
];

const data1 = [
  {
    name: "Feb",
    uv: 600,
  },
  {
    name: "Mar",
    uv: 320,
  },
  {
    name: "Apr",
    uv: 550,
  },
  {
    name: "May",
    uv: 632,
  },
  {
    name: "Jun",
    uv: 509,
  },
];
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
    margin-bottom: 10px;
    background-color: var(--main-dark-blue);
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

class TotalCreditChart extends Component {
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
          <div className="title">Total Credit Score</div>
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
              <BarChart
                width={450}
                height={310}
                data={data}
                barGap="1"
                barSize="1"
              >
                <CartesianGrid strokeDasharray="10" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis
                  type="number"
                  ticks={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
                  domain={[100, 1000]}
                />
                <Tooltip />
                <Legend />
                <Label />
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0.09" stopColor="grey" />
                    <stop offset="0.9" stopColor="green" />
                    <stop offset="1" stopColor="blue" />
                  </linearGradient>
                </defs>
                <Bar dataKey="uv" fill="url(#colorUv)" barSize={10} />
              </BarChart>
            </TabPanel>
            <TabPanel>
              <BarChart
                width={450}
                height={310}
                data={data1}
                barGap="1"
                barSize="1"
              >
                <CartesianGrid strokeDasharray="10" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis
                  type="number"
                  ticks={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
                  domain={[100, 1000]}
                />
                <Tooltip />
                <Legend />
                <Label />
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0.09" stopColor="grey" />
                    <stop offset="0.9" stopColor="green" />
                    <stop offset="1" stopColor="blue" />
                  </linearGradient>
                </defs>
                <Bar dataKey="uv" fill="url(#colorUv)" barSize={10} />
              </BarChart>
            </TabPanel>
          </div>
        </Tabs>
      </MainContainer>
    );
  }
}

export default TotalCreditChart;
