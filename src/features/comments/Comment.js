import React from "react";
import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <div className={styles.userInfo}>
          <img
            className={styles.userAvatar}
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian"
            alt=""
          />
          <span className={styles.username}>username</span>
        </div>
        <span className={styles.timePosted}>2 days ago</span>
      </div>
      <p className={styles.commentBody}>keklol this is my comment haha</p>
    </div>
  );
}
