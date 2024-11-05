import React from "react";
import { formatTimePosted } from "../../utils/formatter";
import styles from "./Comment.module.css";

export default function Comment({ username, timePosted, commentBody }) {
  const formattedTimePosted = formatTimePosted(timePosted);

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <div className={styles.userInfo}>
          <i className="fa-brands fa-reddit-alien"></i>
          <span className={styles.username}>{username}</span>
        </div>
        <span className={styles.timePosted}>{formattedTimePosted}</span>
      </div>
      <p className={styles.commentBody}>{commentBody}</p>
    </div>
  );
}
