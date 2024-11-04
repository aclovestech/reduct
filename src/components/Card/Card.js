import React from "react";
import VoteButtons from "../VoteButtons/VoteButtons";
import Post from "../../features/posts/Post";
import styles from "./Card.module.css";

export default function Card({ postInfo }) {
  return (
    <div className={styles.card}>
      <VoteButtons score={postInfo.score} />
      <Post postInfo={postInfo} />
    </div>
  );
}
