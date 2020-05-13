import React from "react";
import styled from "styled-components";

const HelpTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const HelpTab = () => {
  return (
    <HelpTabContainer>
      <div className="container">
        <div className="tab-content">
          <h1>Help</h1>
        </div>
      </div>
    </HelpTabContainer>
  );
};

export default HelpTab;
