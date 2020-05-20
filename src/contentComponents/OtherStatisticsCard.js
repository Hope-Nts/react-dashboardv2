import React, { Component } from "react";
import styled from "styled-components";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MainContainer = styled.div`
  background-color: var(--main-light-blue);
  color: #fff;
  width: 350px;

  .header {
    font-size: 1.2em;
    margin-bottom: 14px;
  }

  .list-container {
    ul {
      list-style: none;
    }
  }

  .labels {
    margin-left: -40px;
    float: left;
    li {
      margin: 0px 0px 30px 0;
    }
  }

  .stats {
    float: right;
    li {
      margin: 0px 0px 30px 0;
    }
  }

  .content {
    background-color: var(--main-dark-blue);
    border-radius: 10px;
    color: #fff;
    width: 350px;
    padding: 20px;
  }

  .progressbar-container {
    text-align: center;
    padding: 10px;
  }
  .progressBar {
    width: 100px;
  }
`;

const OtherStatistics = (props) => {
  return (
    <MainContainer>
      <div className="header">Other Statistics</div>
      <div className="content">
        <div className="list-container">
          <div className="labels">
            <ul>
              <li>New Credit</li>
              <li> Length of Credit History</li>
              <li>Amount Owed</li>
              <li>Payment History </li>
              <li>Type of Credit used </li>
              <li>Credit Card Utilisation </li>
            </ul>
          </div>

          <div className="stats">
            <ul>
              <li>{`${props.newCredit}%`}</li>
              <li>{`${props.length}%`}</li>
              <li>{`${props.owed}%`}</li>
              <li>{`${props.history}%`}</li>
              <li>{`${props.creditUsed}%`}</li>
              <li>{`${props.utilisation}%`}</li>
            </ul>
          </div>
        </div>

        <div className="progressbar-container">
          <div className="progressBar">
            <CircularProgressbar
              value={props.score}
              text={`${props.score}`}
              strokeWidth={5}
              maxValue={1000}
              styles={buildStyles({
                strokeLinecap: "butt",
              })}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

/*textColor: "red",
  pathColor: "turquoise",
  trailColor: "gold",*/

export default OtherStatistics;
