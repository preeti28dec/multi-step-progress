import React from "react";
import styled from "styled-components";
import Home from "./home";
// import ProgressBar from "./progressBar";
export default function LoginPage() {
  return (
    <>
      <Root>
        {/* <ProgressBar /> */}
        <Home />
      </Root>
    </>
  );
}
const Root = styled.div`
  max-width: 1530px;
  width: 100%;
  margin: 20px auto;
`;
