import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const props = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 287,
      friction: 12,
      velocity: 4,
    },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default ScaleIn;
