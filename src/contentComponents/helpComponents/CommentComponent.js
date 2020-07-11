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

const belongsToCurrentUser = (postAuthor) => {
  if (!auth.currentUser.uid) return false;
  return auth.currentUser.uid === postAuthor.uid;
};

const Comment = ({id,content,user}) => {
  return (
    <MainContainer>
      <div className="picture">
        <img src={user ? user.currentUser.user.photoURL : Picture} alt="" width="80" />
      </div>
      <div className="content">
        <div className="heading">
          <h2 style={{ marginBottom: "2px", display: "inline-block" }}>
            {user.currentUser.user.displayName}
          </h2>
          <DiscussionButton className="optionsBtn">
            <MoreIcon />
          </DiscussionButton>
        </div>
        <h5 style={{ marginTop: "0" }}>{moment(user.currentUser.user.createdAt.toDate()).calendar()}</h5>
        <p className="message">
          {content}
        </p>
      </div>
    </MainContainer>
  );
};

export default Comment;
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
