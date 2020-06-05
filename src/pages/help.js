import React from "react";
import styled from "styled-components";
import Discussion from "../contentComponents/helpComponents/DiscussionComponent";

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
      <Discussion />
    </HelpTabContainer>
  );
};

export default HelpTab;
