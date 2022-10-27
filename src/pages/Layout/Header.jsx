import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Root>
      <img src="./images/logo.png" alt="loding.. logo" />
      <button>Clone now</button>
    </Root>
  );
}

export default Header;

const Root=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
button{
  background-color:#4A3AFF;
  border-radius: 100px;
  padding: 4px 20px;
  color: white;
}
`