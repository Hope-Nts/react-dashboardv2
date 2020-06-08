import React, { Component } from "react";
import styled from "styled-components";
import { HeartFilterIcon, BubbleFilterIcon } from "../icons/ProjectIcons";

const MainContainer = styled.div`
  margin: 0px 0px 0px 40px;
  ul {
    list-style: none;
  }
`;

const DiscussionButton = styled.button`
  background: var(--main-light-blue);
  border: none;
  cursor: pointer;
  color: #fff;

  :hover {
    color: var(--main-green);
  }

  .label {
    display: inline-block;
  }

  .label-spacer {
    display: inline-block;
    width: 10px;
  }
`;

const StartConversationButton = styled.button`
  background: var(--main-green);
  border-radius: 50px;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 10px 30px 10px 30px;
`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainContainer>
        <ul>
          <li>
            <StartConversationButton>
              Start A New Discussion
            </StartConversationButton>
          </li>
          <li>
            <DiscussionButton>
              <HeartFilterIcon style={{ display: "inline-block" }} />
              <div className="label-spacer"></div>
              <div className="label">Following</div>
            </DiscussionButton>
          </li>
          <li>
            <DiscussionButton>
              <BubbleFilterIcon />
              <div className="label-spacer"></div>
              <div className="label">All Topics</div>
            </DiscussionButton>
          </li>
        </ul>
      </MainContainer>
    );
  }
}

export default Filters;
