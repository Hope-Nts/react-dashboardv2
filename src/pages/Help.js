import React from "react";
import styled from "styled-components";
import Discussion from "../contentComponents/helpComponents/DiscussionComponent";
import QuestionForm from "../contentComponents/helpComponents/QuestionComponent";

const HelpTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 10px 10%;
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
        <h1>Ask a question below</h1>
        <QuestionForm />
        <Discussion />
        <Discussion />
        <Discussion />
      </div>
    </HelpTabContainer>
  );
};

export default HelpTab;
