import React from "react";
import styled from "styled-components";
import MiniCardComponent from "../contentComponents/dashboardComponents/MiniCardComponent";
import Chart from "../contentComponents/dashboardComponents/DashboardChart";
import { Row } from "simple-flexbox";
import OtherStatistics from "../contentComponents/dashboardComponents/OtherStatisticsCard";

const DashBoardContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  padding: 1%;

  .cardContainer {
    display: flex;
    margin: 0% 0% 3% 0%;
  }
`;

const DashBoard = () => {
  const data = {
    newCredit: 54,
    length: 65,
    owed: 46,
    history: 26,
    creditUsed: 43,
    utilisation: 13,
    score: 655,
  };

  return (
    <DashBoardContainer>
      <div className="cardContainer">
        <MiniCardComponent title="Credit Card Utilization" value={`${24}%`} />
        <MiniCardComponent title="Payment History" value={`${99}%`} />
        <MiniCardComponent title="Derogatory Marks" value="1" />
        <MiniCardComponent
          title="Age of Credit History"
          value={`${6}yrs ${9}ms`}
        />
      </div>
      <Row>
        <Chart />
        <OtherStatistics {...data} />
      </Row>
    </DashBoardContainer>
  );
};

export default DashBoard;

//Main Content Container
