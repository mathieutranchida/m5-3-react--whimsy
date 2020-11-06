import React, { useContext } from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

import { TweetContext } from "../TweetContext";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6;

  const { isLiked } = useContext(TweetContext);

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Foreground>
        {isLiked ? (
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        ) : (
          <Heart width={heartSize} isToggled={isLiked} />
        )}
      </Foreground>
      <Background>
        {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
`;

export default LikeButton;
