import React from "react";
import Subreddit from "./Subreddit";
import styles from "./Subreddits.module.css";

export default function Subreddits() {
  return (
    <div className={styles.subreddits}>
      <Subreddit />
    </div>
  );
}
