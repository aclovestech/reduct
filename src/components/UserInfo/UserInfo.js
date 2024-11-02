import React from "react";
import styles from "./UserInfo.module.css";

export default function UserInfo() {
  return (
    <div id="user-info-container" className={styles.userInfo}>
      <img alt="" className={styles.userImage} />
      <span className={styles.username}>hannipham_enjoyer96</span>
    </div>
  );
}
