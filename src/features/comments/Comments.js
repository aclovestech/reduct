import React from "react";
import Comment from "./Comment";
import styles from "./Comments.module.css";

export default function Comments() {
  return (
    <div className={styles.comments}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
