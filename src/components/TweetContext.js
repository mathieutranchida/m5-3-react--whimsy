//Move the tweet data to the that provider and make it available to the App via the value attribute.

import React from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
    const tweetContents = "Where in the world am I?";
    const displayName = "Carmen Sandiego ✨";
    const username = "carmen-sandiego";
    const avatarSrc = avatar;
    const isRetweetedByCurrentUser = false;
    const isLikedByCurrentUser = false;
    const [isHovered, setIsHovered] = React.useState(false);
    const date = moment().format(`LT - ll`);

    return (
        <TweetContext.Provider
            value={{
                tweetContents,
                displayName,
                username,
                avatarSrc,
                isRetweetedByCurrentUser,
                isLikedByCurrentUser,
                isHovered,
                setIsHovered,
                date,
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};