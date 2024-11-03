import React from "react";
import Subreddit from "./Subreddit";
import styles from "./Subreddits.module.css";

export default function Subreddits() {
  return (
    <div className={styles.subreddits}>
      <h3>Subreddits</h3>
      <Subreddit />
      <Subreddit />
      <Subreddit />
    </div>
  );
}
