import React from "react";
import styles from "./PostFooter.module.css";

export default function PostFooter() {
  return (
    <div id="post-footer-container" className={styles.postFooter}>
      <span className={styles.postedBy}>
        Posted by <span className={styles.username}>hanni-pham-enjoyer-96</span>
      </span>
      <hr className={styles.separator} />
      <span className={styles.timePosted}>6 hours ago</span>
      <hr className={styles.separator} />
      <div className={styles.comments}>
        <i className="fa-regular fa-message"></i>
        <span className={styles.commentsCount}>100</span>
      </div>
    </div>
  );
}
