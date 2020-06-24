import React from "react";
import moment from "moment";
import { firestore, auth } from "../../firebase";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Picture from "../../navigationComponents/sidebar/Logo.png";
import { HeartIcon, BubbleIcon, MoreIcon } from "../icons/ProjectIcons";

const MainContainer = styled.div`
  background: var(--main-dark-blue);
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0px 20px 0px;
  width: 100%;
  display: flex;
  .content {
    flex: 5;
  }

  .picture {
    flex: 1;
    img {
      border-radius: 50%;
    }
  }

  .spacer {
    display: inline-block;
    width: 10px;
  }

  .message {
    width: 80%;
    padding-bottom: 5px;
    margin-top: -15px;
    border-bottom: 2px solid #fff;
  }

  .heading {
    display: inline-block;
    width: 100%;
  }

  .optionsBtn {
    float: right;
    display: inline-block;
  }
`;

const DiscussionButton = styled.button`
  background: var(--main-dark-blue);
  border: none;
  display: inline-block;
  cursor: pointer;
`;
const Counter = styled.div`
  display: inline-block;
`;

const ReplyPostButton = styled.button`
  background: var(--main-green);
  border-radius: 30px;
  padding: 10px 20px;
  border: none;
  color: #fff;
  font-weight: 900;
  display: inline-block;
  cursor: pointer;
`;

const ReplyPostForm = styled.form`
  textarea {
    padding: 5px;
    font-size: 1.25em;
    width: 600px;
    height: 70px;
    outline: none;
    resize: none;
    color: #fff;
    background: var(--main-dark-blue);
    border: 1px solid grey;
    border-radius: 15px;

    ::placeholder {
      font-family: Helvetica;
      font-size: 1.3em;
    }
  }
`;

const belongsToCurrentUser = (postAuthor) => {
  if (!auth.currentUser.uid) return false;
  return auth.currentUser.uid === postAuthor.uid;
};

const ReplyPost = () => {
  return (
    <MainContainer>
      <div className="picture">
        <img src="" alt="" width="80" />
      </div>
      <div className="content">
        <div className="heading">
          <h2 style={{ marginBottom: "2px", display: "inline-block" }}>
            title
          </h2>
          <DiscussionButton className="optionsBtn">
            <MoreIcon />
          </DiscussionButton>
        </div>
        <h5 style={{ marginTop: "0" }}>username</h5>
        <h5 style={{ marginTop: "0" }}>date</h5>
        <p className="message">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div style={{ float: "left" }}>
          <ReplyPostForm>
            <textarea placeholder="Reply....."></textarea>
          </ReplyPostForm>
        </div>
        <div style={{ float: "right" }}>
          <ReplyPostButton style={{ marginRight: "5px" }}>
            Reply
          </ReplyPostButton>
          <Counter>0</Counter>
          <DiscussionButton>
            <BubbleIcon />
          </DiscussionButton>
          <div className="spacer"></div>
          <Counter>0</Counter>
          <DiscussionButton>
            <HeartIcon />
          </DiscussionButton>
        </div>
      </div>
    </MainContainer>
  );
};

export default ReplyPost;
const QuestionPostButton = styled.button`
  background: var(--main-blue);
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  color: #fff;
  font-weight: 900;
  display: inline-block;
  cursor: pointer;
`;
