import React from "react";
import styled from "styled-components";

const LoanAppTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const LoanAppTab = () => {
  return (
    <LoanAppTabContainer>
      <div className="container">
        <div className="tab-content">
          <h1>LoanApp</h1>
        </div>
      </div>
    </LoanAppTabContainer>
  );
};

export default LoanAppTab;
