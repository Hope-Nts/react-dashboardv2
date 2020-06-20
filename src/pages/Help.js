import React from "react";
import styled from "styled-components";
import Discussion from "../contentComponents/helpComponents/DiscussionComponent";
import Filters from "../contentComponents/helpComponents/FIlterComponent";

const HelpTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px;
  display: flex;

  .post-container {
    flex: 3;
  }

  .link-container {
    flex: 1;
  }
`;

const HelpTab = () => {
  return (
    <HelpTabContainer>
      <div className="post-container">
        <Discussion />
        <Discussion />
        <Discussion />
      </div>
      <div classNam="link-container">
        <Filters />
      </div>
    </HelpTabContainer>
  );
};

export default HelpTab;
