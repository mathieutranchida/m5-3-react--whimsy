import React, {useContext} from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Stats = () => {
    const {
        numOfRetweets,
        numOfLikes,
    } = useContext(TweetContext);

    return (
        <Wrapper>
            <Retweets>
                <Strong>{numOfRetweets}</Strong> Retweets
            </Retweets>
            <Likes>
                <Strong>{numOfLikes}</Strong> Likes
            </Likes>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
`;

const Retweets = styled.p`
    margin-right: 25px;
    color: rgb(101, 119, 134);
    font-size: 16px;
`;

const Likes = styled.p`
    color: rgb(101, 119, 134);
    font-size: 16px;
`;

const Strong = styled.strong`
    color: black;
`;

export default Stats;
