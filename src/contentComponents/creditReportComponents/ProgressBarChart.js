import React from "react";
import styled from "styled-components";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MainContainer = styled.div`
  text-align: center;
  background-color: var(--main-dark-blue);
  width: 300px;
`;

const ProgressBar = (props) => {
  return (
    <MainContainer>
      <CircularProgressbar
        value={props.score}
        text={`${props.score}`}
        strokeWidth={5}
        maxValue={1000}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: "var(--main-blue)",
        })}
      />
    </MainContainer>
  );
};

export default ProgressBar;
