import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Posts.module.css";

export default function Posts() {
  return (
    <div id="posts-container" className={styles.posts}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
