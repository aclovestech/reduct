import React from "react";
import styles from "./VoteButtons.module.css";

export default function VoteButtons() {
  return (
    <div id="vote-buttons-container" className={styles.voteButtons}>
      <i className="fa-solid fa-arrow-up"></i>
      <p>100</p>
      <i className="fa-solid fa-arrow-down"></i>
    </div>
  );
}
