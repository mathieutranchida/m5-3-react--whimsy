import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

import avatar from "../assets/carmen-sandiego.png";
import { TweetContext } from "../components/TweetContext";

const App = () => {
  return (
    <Wrapper>
      <Tweet/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
