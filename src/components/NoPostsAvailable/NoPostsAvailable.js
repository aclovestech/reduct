import React from "react";
import styles from "./NoPostsAvailable.module.css";

export default function NoPostsAvailable() {
  return (
    <div className={styles.noPostsAvailable}>
      <h2 className={styles.title}>No Posts Available</h2>
      <p className={styles.body}>
        It looks like there are currently no posts to display. This could mean
        that the subreddit has no posts with images, or your search query didn’t
        match any of the titles. Please try a different search term or check
        back later!
      </p>
    </div>
  );
}
