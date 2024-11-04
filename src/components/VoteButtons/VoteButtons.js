import React from "react";
import { formatVoteCount } from "../../utils/formatter";
import styles from "./VoteButtons.module.css";

export default function VoteButtons({ score }) {
  const formattedVoteCount = formatVoteCount(score);
  return (
    <div id="vote-buttons-container" className={styles.voteButtons}>
      <i className="fa-solid fa-arrow-up"></i>
      <p>{formattedVoteCount}</p>
      <i className="fa-solid fa-arrow-down"></i>
    </div>
  );
}
