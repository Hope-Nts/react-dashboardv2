import React from "react";
import styled from "styled-components";
import ProgressBar from "../contentComponents/creditReportComponents/ProgressBarChart";
import Chart from "../contentComponents/dashboardComponents/DashboardChart";
import TotalCreditChart from "../contentComponents/creditReportComponents/TotalCreditScoreChart";

const CreditReportContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 30px;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0px;
`;

const ContentContainer = styled.div`
  background-color: var(--main-dark-blue);
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  margin: 0px 10px 0px 10px;

  .progressBar {
    text-align: center;
    margin-left: 120px;
  }

  .title {
    text-align: left;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

const CreditReportTab = () => {
  return (
    <CreditReportContainer>
      <ContentContainer>
        <TotalCreditChart />
      </ContentContainer>
    </CreditReportContainer>
  );
};

export default CreditReportTab;

/*<div className="title">Overall</div>
        <div className="progressBar">
          <ProgressBar score="655" />
        </div> */
