import React, { Component } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Mon",
    pv: 67,
    amt: 2400,
  },
  {
    name: "Tue",
    pv: 40,
    amt: 2210,
  },
  {
    name: "Wed",
    pv: 76,
    amt: 2290,
  },
  {
    name: "Thu",
    pv: 30,
    amt: 2000,
  },
  {
    name: "Fri",
    pv: 42,
    amt: 2181,
  },
];

const data1 = [
  {
    name: "Mon",
    pv: 61,
    amt: 2400,
  },
  {
    name: "Tue",
    pv: 65,
    amt: 2210,
  },
  {
    name: "Wed",
    pv: 23,
    amt: 2290,
  },
  {
    name: "Thu",
    pv: 30,
    amt: 2000,
  },
  {
    name: "Fri",
    pv: 62,
    amt: 2181,
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

class CreditCardUtilisationChart extends Component {
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
            <TabPanel>
              <LineChart
                width={400}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="10" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#32CD32"
                  strokeWidth={2}
                />
              </LineChart>
            </TabPanel>
            <TabPanel>
              <LineChart
                width={450}
                height={350}
                data={data1}
                margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="10" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#32CD32"
                  strokeWidth={2}
                />
              </LineChart>
            </TabPanel>
          </div>
        </Tabs>
      </MainContainer>
    );
  }
}

export default CreditCardUtilisationChart;
