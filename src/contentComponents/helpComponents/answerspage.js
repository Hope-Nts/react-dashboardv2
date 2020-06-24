import React from "react";
import styled from "styled-components";
import ReplyPost from "./PostWithReply";
import Comment from "./CommentComponent";

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

const AnswersPage = () => {
  return (
    <HelpTabContainer>
      <div className="post-container">
        <h1>Post</h1>
        <ReplyPost />
        <h3>Comments/Replies</h3>
        <Comment />
        <Comment />
      </div>
    </HelpTabContainer>
  );
};

export default AnswersPage;
