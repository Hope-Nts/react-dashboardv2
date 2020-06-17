import React from "react";
import styled from "styled-components";
import ProgressBar from "../contentComponents/creditReportComponents/ProgressBarChart";
import TotalCreditChart from "../contentComponents/creditReportComponents/TotalCreditScoreChart";
import CreditCardUtilisationChart from "../contentComponents/creditReportComponents/CreditCardUtilisationChart";
import CreditCardHistoryChart from "../contentComponents/creditReportComponents/CreditHistory";

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
      <RowContainer>
        <ContentContainer>
          <div className="title">Overall</div>
          <div className="progressBar">
            <ProgressBar score="655" />
          </div>
        </ContentContainer>
        <ContentContainer>
          <TotalCreditChart />
        </ContentContainer>
      </RowContainer>
      <RowContainer>
        <ContentContainer>
          <CreditCardUtilisationChart />
        </ContentContainer>
        <ContentContainer>
          <CreditCardHistoryChart />
        </ContentContainer>
      </RowContainer>
    </CreditReportContainer>
  );
};

export default CreditReportTab;

const data = [
  {
    expense: "Amazon",
    time: "10:00",
    day: "3 Jan",
    amount: 7.99,
  },
  {
    expense: "Spotify",
    time: "10:00",
    day: "3 Jan",
    amount: 7.99,
  },
  {
    expense: "AppleMusic",
    time: "10:00",
    day: "3 Jan",
    amount: 7.99,
  },
  {
    expense: "Amazon",
    time: "10:00",
    day: "3 Jan",
    amount: 7.99,
  },
];

/**/
