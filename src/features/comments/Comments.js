import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import {
  selectComments,
  selectIsLoading,
  selectVisibleComments,
} from "./commentsSlice";
import NoCommentsAvailable from "../../components/NoCommentsAvailable/NoCommentsAvailable";
import styles from "./Comments.module.css";

export default function Comments({ postInfo }) {
  const comments = useSelector(selectComments);
  // eslint-disable-next-line
  const isLoading = useSelector(selectIsLoading);
  const visibleComments = useSelector(selectVisibleComments);

  const commentsWithinPost = comments[postInfo.id];

  if (
    !commentsWithinPost ||
    !visibleComments.some((element) => element === postInfo.id)
  ) {
    return;
  }

  return (
    <div className={styles.comments}>
      {commentsWithinPost.length > 0 ? (
        commentsWithinPost.map((comment) => {
          return (
            <Comment
              key={comment.data.id}
              username={comment.data.author}
              timePosted={comment.data.created}
              commentBody={comment.data.body}
            />
          );
        })
      ) : (
        <NoCommentsAvailable />
      )}
    </div>
  );
}
