import React from "react";
import InputTab from "../contentComponents/inputTab";
import styled from "styled-components";

const home = {
  color: "black",
};

const InputContainer = styled.div`
  margin: 30%;
`;

const SignIn = () => {
  return (
    <InputContainer>
      <InputTab placeholder="name" />
      <InputTab placeholder="password" />
    </InputContainer>
  );
};

export default SignIn;
