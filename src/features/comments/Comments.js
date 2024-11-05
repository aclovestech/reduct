import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import {
  selectComments,
  selectIsLoading,
  selectVisibleComments,
} from "./commentsSlice";
import styles from "./Comments.module.css";

export default function Comments({ postInfo }) {
  const comments = useSelector(selectComments);
  // eslint-disable-next-line
  const isLoading = useSelector(selectIsLoading);
  const visibleComments = useSelector(selectVisibleComments);

  if (
    !comments[postInfo.id] ||
    !visibleComments.some((element) => element === postInfo.id)
  ) {
    return;
  }

  return (
    <div className={styles.comments}>
      {comments[postInfo.id].map((comment) => {
        return (
          <Comment
            key={comment.data.id}
            username={comment.data.author}
            timePosted={comment.data.created}
            commentBody={comment.data.body}
          />
        );
      })}
    </div>
  );
}
