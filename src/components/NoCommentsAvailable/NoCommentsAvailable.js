import React from "react";
import styles from "./NoCommentsAvailable.module.css";

export default function NoCommentsAvailable() {
  return (
    <div className={styles.noCommentsAvailable}>
      <h3 className={styles.title}>No comments available</h3>
      <p className={styles.body}>
        Currently, there are no comments to display for this post. Feel free to
        check back again later!
      </p>
    </div>
  );
}
