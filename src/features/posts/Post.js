import React from "react";
import PostFooter from "../../components/PostFooter/PostFooter";
import styles from "./Post.module.css";

export default function Post() {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>
        Hanni Pham for OLENS ahskdjhadhakdjhasdhakjdhsjadhjskahahdkahdjahk
      </h2>
      <hr className={styles.separator} />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hanni_OLENS_2.jpg/500px-Hanni_OLENS_2.jpg"
        alt="haha"
        className={styles.postImage}
      />
      <hr className={styles.separator} />
      <PostFooter />
    </div>
  );
}
