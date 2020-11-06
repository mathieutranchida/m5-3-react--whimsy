//Move the tweet data to the that provider and make it available to the App via the value attribute.

import React, {useState} from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
    // Exercise 1
    const tweetContents = "Where in the world am I?";
    const displayName = "Carmen Sandiego ✨";
    const username = "carmen-sandiego";
    const avatarSrc = avatar;
    // const isRetweetedByCurrentUser = false;
    // const isLikedByCurrentUser = false;
    const [isHovered, setIsHovered] = React.useState(false);

    // Exercise 2
    const date = moment().format(`LT - ll`);

    // Exercise 3
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    return (
        <TweetContext.Provider
            value={{
                // Exercise 1
                tweetContents,
                displayName,
                username,
                avatarSrc,
                // isRetweetedByCurrentUser,
                // isLikedByCurrentUser,
                isHovered,
                setIsHovered,

                // Exercise 2
                date,

                // Exercise 3
                numOfLikes,
                setNumOfLikes,
                numOfRetweets,
                setNumOfRetweets,
                isLiked,
                setIsLiked,
                isRetweeted,
                setIsRetweeted,
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};