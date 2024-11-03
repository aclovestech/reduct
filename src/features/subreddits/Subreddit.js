import React from "react";
import styles from "./Subreddit.module.css";

export default function Subreddit() {
  return (
    <div className={styles.subreddit}>
      <img
        src="https://api.dicebear.com/9.x/adventurer/svg?seed=Mason"
        alt="avatar"
      />
      <h4>Subreddit name</h4>
    </div>
  );
}
