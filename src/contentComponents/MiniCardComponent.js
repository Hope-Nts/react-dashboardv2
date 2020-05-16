import React from "react";
import { Column } from "simple-flexbox";
import styled from "styled-components";

const MainContainer = styled(Column)`
  background-color: var(--main-dark-blue);
  border: 1px solid var(--main-dark-blue);
  box-shadow: 5px 10px var(--main-dark-blue);
  border-radius: 8px;
  height: 70;
  max-width: 350;
  margin: 0px 20px 0px 20px;
  padding: 10px 10px 10px 10px;
  :hover {
    border-color: #351FF;
    color: var(--main-light-blue);
  }

  .title {
    color: #fff;
    font-size: 1em;
    line-height: 24px;
    letter-spacing: 0.4px;
    margin-bottom: 12;
    min-width: 102;
    text-align: center;
  }

  .value {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 40;
    letter-spacing: 1px;
    line-height: 50px;
    text-align: center;
  }
`;

const MiniCardComponent = (props) => {
  return (
    <MainContainer flexGrow={1} horizontal="center" vertical="center">
      <span className="value">{props.value}</span>
      <span className="title">{props.title}</span>
    </MainContainer>
  );
};

export default MiniCardComponent;
