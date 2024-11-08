import React from "react";
import PostFooter from "../../components/PostFooter/PostFooter";
import Comments from "../comments/Comments";
import styles from "./Post.module.css";

export default function Post({ postInfo }) {
  const { title, url } = postInfo;

  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{title}</h2>
      <div className={styles.separator}></div>
      <img src={url} alt={url} className={styles.postImage} />
      <div className={styles.separator}></div>
      <PostFooter postInfo={postInfo} />
      <div className={styles.separator}></div>
      <Comments postInfo={postInfo} />
    </div>
  );
}
