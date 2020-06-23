import React, { Component } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Length Of Credit History",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Amount Owed",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Payment History",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Type Of Credit Used",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Credit Card Utilisation",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "New Credit",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const data1 = [
  {
    subject: "Length Of Credit History",
    A: 120,
    B: 50,
    fullMark: 150,
  },
  {
    subject: "Amount Owed",
    A: 70,
    B: 30,
    fullMark: 150,
  },
  {
    subject: "Payment History",
    A: 106,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Type Of Credit Used",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Credit Card Utilisation",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "New Credit",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const MainContainer = styled.div`
  padding: 0px 10px 10px 10px;
  width: 70%;
  border-radius: 8px;
  margin-right: 20px;

  .panelContainer {
    padding: 10px;
    border-radius: 8px;
    background-color: var(--main-dark-blue);
    width: 100%;
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
    margin: 0% 0% 0% 80%;
    width: 110px;
    border-radius: 100px;
    list-style: none;
  }

  .toggle-area {
    width: 100%;
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
              <ResponsiveContainer width="90%" height={450}>
                <RadarChart outerRadius={150} data={data}>
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#fff", fontSize: 15 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    legendType="circle"
                    name="Progress"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    legendType="circle"
                    name="Goal"
                    dataKey="B"
                    stroke="#4ad991"
                    fill="#4ad991"
                    fillOpacity={0.6}
                  />
                  <Legend verticalAlign="top" align="right" layout="vertical" />
                </RadarChart>
              </ResponsiveContainer>
            </TabPanel>
            <TabPanel>
              <ResponsiveContainer width="90%" height={450}>
                <RadarChart outerRadius={150} data={data1}>
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#fff", fontSize: 15 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    legendType="circle"
                    name="Progress"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    legendType="circle"
                    name="Goal"
                    dataKey="B"
                    stroke="#4ad991"
                    fill="#4ad991"
                    fillOpacity={0.6}
                  />
                  <Legend verticalAlign="top" align="right" layout="vertical" />
                </RadarChart>
              </ResponsiveContainer>
            </TabPanel>
          </div>
        </Tabs>
      </MainContainer>
    );
  }
}

export default Chart;
