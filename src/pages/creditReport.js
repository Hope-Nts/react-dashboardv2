import React from "react";
import styled from "styled-components";

const CreditReportContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const CreditReportTab = () => {
  return (
    <CreditReportContainer>
      <h1>CreditReportTab</h1>
    </CreditReportContainer>
  );
};

export default CreditReportTab;
