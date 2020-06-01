import React from "react";
import styled from "styled-components";

const CreditTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const CreditTab = () => {
  return <CreditTabContainer></CreditTabContainer>;
};

export default CreditTab;
