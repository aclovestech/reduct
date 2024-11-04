import React from "react";
import styles from "./Subreddit.module.css";

export default function Subreddit({ avatar, subredditName }) {
  return (
    <div className={styles.subreddit}>
      {avatar ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <i className="fa-brands fa-reddit-alien"></i>
      )}

      <h4>{subredditName}</h4>
    </div>
  );
}
