import moment from "moment";
import React, { useEffect, useState } from "react";
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

const ReplyPost = ({
  id,
  title,
  content,
  user,
  createdAt,
  hearts,
  comments,...props
}) => {
  const [ct, setCt] = useState('');
  function handleChange(event){
     setCt(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onCreate({content:ct});
    setCt('');
  };
  return (
    <MainContainer>
      <div className="picture">
      <img src={user ? user.photoURL : Picture} alt="" width="80" />
      </div>
      <div className="content">
        <div className="heading">
          <h2 style={{ marginBottom: "2px", display: "inline-block" }}>
        {title}
          </h2>
          <DiscussionButton className="optionsBtn">
            <MoreIcon />
          </DiscussionButton>
        </div>
        <h5 style={{ marginTop: "0" }}>{user ? user.displayName : "anonymous"}</h5>
        <h5 style={{ marginTop: "0" }}>{moment(createdAt.toDate()).calendar()}</h5>
        <p className="message">
          {content}
        </p>
        <div style={{ float: "left" }}>
          <ReplyPostForm>
            <textarea id="content" placeholder="Reply....." value={ct} onChange={handleChange}></textarea>
          </ReplyPostForm>
        </div>
        <div style={{ float: "right" }}>
          <ReplyPostButton style={{ marginRight: "5px" }} onClick={handleSubmit}>
            Reply
          </ReplyPostButton>
          <Counter>{comments}</Counter>
          <DiscussionButton>
            <BubbleIcon />
          </DiscussionButton>
          <div className="spacer"></div>
          <Counter>{Number(hearts)}</Counter>
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
