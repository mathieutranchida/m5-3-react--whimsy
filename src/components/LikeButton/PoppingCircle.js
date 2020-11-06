import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { TweetContext } from "../TweetContext";

const PoppingCircle = ({ size, color}) => {
    return (
        <Wrapper style={
            {width: size,
            height: size,
            background: color} 
        }/>
    )
}

const PoppingCircleTransformAnnimation = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const PoppingCircleOpacityAnnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    animation: ${PoppingCircleTransformAnnimation} 500ms forwards, ${PoppingCircleOpacityAnnimation} 900ms forwards;
    border-radius: 50%;
`;

export default PoppingCircle;