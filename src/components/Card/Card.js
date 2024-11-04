import React from "react";
import Post from "../../features/posts/Post";
import VoteButtons from "../VoteButtons/VoteButtons";
import styles from "./Card.module.css";

export default function Card({ postInfo }) {
  return (
    <div className={styles.card}>
      <VoteButtons score={postInfo.score} />
      <Post postInfo={postInfo} />
    </div>
  );
}
