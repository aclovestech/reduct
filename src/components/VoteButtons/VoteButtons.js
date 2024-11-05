import React, { useState } from "react";
import { formatVoteCount } from "../../utils/formatter";
import styles from "./VoteButtons.module.css";

export default function VoteButtons({ score }) {
  const formattedVoteCount = formatVoteCount(score);
  const [isNeutral, setIsNeutral] = useState(true);
  const [didUpvote, setDidUpvote] = useState(false);
  const [didDownvote, setDidDownvote] = useState(false);

  const handleUpvote = () => {
    if (isNeutral || didDownvote) {
      setIsNeutral(false);
      setDidUpvote(true);
      setDidDownvote(false);
    } else {
      setIsNeutral(true);
      setDidUpvote(false);
      setDidDownvote(false);
    }
  };

  const handleDownvote = () => {
    if (isNeutral || didUpvote) {
      setIsNeutral(false);
      setDidUpvote(false);
      setDidDownvote(true);
    } else {
      setIsNeutral(true);
      setDidUpvote(false);
      setDidDownvote(false);
    }
  };

  const determineVoteCountColor = () => {
    if (isNeutral) {
      return styles.neutral;
    } else if (didUpvote) {
      return styles.upvote;
    } else if (didDownvote) {
      return styles.downvote;
    }
  };

  return (
    <div id="vote-buttons-container" className={styles.voteButtons}>
      <i
        className={`${
          didUpvote ? styles.upvote : styles.neutral
        } fa-solid fa-arrow-up`}
        onClick={handleUpvote}
      ></i>
      <p className={determineVoteCountColor()}>{formattedVoteCount}</p>
      <i
        className={`${
          didDownvote ? styles.downvote : styles.neutral
        } fa-solid fa-arrow-down`}
        onClick={handleDownvote}
      ></i>
    </div>
  );
}
