import React, { Component } from "react";
import styled from "styled-components";
import Picture from "../../navigationComponents/sidebar/Logo.png";
import { HeartIcon, BubbleIcon, MoreIcon } from "../icons/ProjectIcons";

const MainContainer = styled.div`
  background: var(--main-dark-blue);
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  display: flex;
  .content {
    flex: 5;
  }

  .picture {
    flex: 1;
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

class Discussion extends Component {
  state = {
    picture: "",
    title: "",
    timeStamp: "",
    content: "",
    likes: 0,
    comments: 0,
  };
  render() {
    return (
      <MainContainer>
        <div className="picture">
          <img src={Picture} alt="" width="80" />
        </div>
        <div className="content">
          <div className="heading">
            <h2 style={{ marginBottom: "2px", display: "inline-block" }}>
              Credit Score Evaluation
            </h2>
            <DiscussionButton className="optionsBtn">
              <MoreIcon />
            </DiscussionButton>
          </div>
          <h5 style={{ marginTop: "0" }}>1hr ago</h5>
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
          <div style={{ float: "right" }}>
            <Counter>{this.state.comments}</Counter>
            <DiscussionButton>
              <BubbleIcon />
            </DiscussionButton>
            <div className="spacer"></div>
            <Counter>{this.state.likes}</Counter>
            <DiscussionButton>
              <HeartIcon />
            </DiscussionButton>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default Discussion;
