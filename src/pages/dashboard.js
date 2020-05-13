import React from "react";
import styled from "styled-components";
//import MiniCard from "../dashboardComponents/MiniCard";

const DashBoardContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <h1>DashBoard</h1>
      {/*<MiniCard title="money" value="25" />*/}
    </DashBoardContainer>
  );
};

export default DashBoard;

//Main Content Container
