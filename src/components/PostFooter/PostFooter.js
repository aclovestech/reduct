import React from "react";
import { formatTimePosted, formatCommentCount } from "../../utils/formatter";
import styles from "./PostFooter.module.css";

export default function PostFooter({ postInfo }) {
  const { author, created, num_comments } = postInfo;

  const formattedTime = formatTimePosted(created);
  const formattedCommentCount = formatCommentCount(num_comments);

  return (
    <div id="post-footer-container" className={styles.postFooter}>
      <span className={styles.postedBy}>
        Posted by <span className={styles.username}>{author}</span>
      </span>
      <hr className={styles.separator} />
      <span className={styles.timePosted}>{formattedTime}</span>
      <hr className={styles.separator} />
      <div className={styles.comments}>
        <i className="fa-regular fa-message"></i>
        <span className={styles.commentsCount}>{formattedCommentCount}</span>
      </div>
    </div>
  );
}
