import React from "react";
import styled from "styled-components";
import MiniCardComponent from "../contentComponents/MiniCardComponent";

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
      <div style={{ display: "flex" }}>
        <MiniCardComponent title="Credit Card Utilization" value="24%" />
        <MiniCardComponent title="Payment History" value="99%" />
        <MiniCardComponent title="Derogatory Marks" value="1" />
        <MiniCardComponent title="Age of Credit History" value="6yrs 7ms" />
      </div>
    </DashBoardContainer>
  );
};

export default DashBoard;

//Main Content Container
