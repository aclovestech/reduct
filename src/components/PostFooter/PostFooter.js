import React from "react";
import { formatTimePosted, formatCommentCount } from "../../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsByPostId,
  enableComments,
  disableComments,
  selectVisibleComments,
  selectComments,
} from "../../features/comments/commentsSlice";
import styles from "./PostFooter.module.css";

export default function PostFooter({ postInfo }) {
  const dispatch = useDispatch();
  const visibleComments = useSelector(selectVisibleComments);
  const comments = useSelector(selectComments);
  const { author, created, num_comments, subreddit, id } = postInfo;

  const formattedTime = formatTimePosted(created);
  const formattedCommentCount = formatCommentCount(num_comments);

  const handleOnCommentsClick = () => {
    if (visibleComments.some((element) => element === postInfo.id)) {
      dispatch(disableComments(postInfo.id));
    } else if (comments[postInfo.id]) {
      dispatch(enableComments(postInfo.id));
    } else {
      const postData = {
        subreddit,
        id,
      };

      dispatch(getCommentsByPostId(postData));
      dispatch(enableComments(postInfo.id));
    }
  };

  return (
    <div id="post-footer-container" className={styles.postFooter}>
      <div className={styles.postedBy}>
        <span>
          Posted by <span className={styles.username}>{author}</span>
        </span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.timePosted}>
        <span>{formattedTime}</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.comments} onClick={handleOnCommentsClick}>
        <i className="fa-regular fa-message"></i>
        <span className={styles.commentsCount}>{formattedCommentCount}</span>
      </div>
    </div>
  );
}
