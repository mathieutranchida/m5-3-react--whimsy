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

    // Exercise 2
    const date = moment().format(`LT - ll`);

    // Exercise 3
    let [numOfLikes, setNumOfLikes] = useState(460);
    let [numOfRetweets, setNumOfRetweets] = useState(65);
    let [isLiked, setIsLiked] = useState(false);
    let [isRetweeted, setIsRetweeted] = useState(false);

    // Exercise 4
    const handleToggleLike = () => {
        setIsLiked(() => {
            return !isLiked
        })
        if (isLiked == true) {
            setNumOfLikes(numOfLikes - 1);
        } else if (isLiked == false) {
            setNumOfLikes(numOfLikes + 1);
        }
    }

    const handleToggleRetweet = () => {
        setIsRetweeted(() => {
            return !isRetweeted
        })
        if (isRetweeted == true) {
            setNumOfRetweets(numOfRetweets - 1);
        } else if (isRetweeted == false) {
            setNumOfRetweets(numOfRetweets + 1);
        }
    }

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

                // Exercise 4
                handleToggleLike,
                handleToggleRetweet,
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};