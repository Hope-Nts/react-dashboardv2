import React from "react";
import styled from "styled-components";

const SettingsTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 10px;
`;

const SettingsTab = () => {
  return (
    <SettingsTabContainer>
      <div className="container">
        <div className="tab-content">
          <h1>Settings</h1>
        </div>
      </div>
    </SettingsTabContainer>
  );
};

export default SettingsTab;
