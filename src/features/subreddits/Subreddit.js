import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPosts,
  selectFilteredPosts,
  selectSelectedSubreddit,
  changeSelectedSubreddit,
  resetFilteredPosts,
} from "../posts/postsSlice";
import styles from "./Subreddit.module.css";

export default function Subreddit({ avatar, subredditName }) {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const filteredPosts = useSelector(selectFilteredPosts);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const handleSubredditSelection = () => {
    dispatch(changeSelectedSubreddit(subredditName));

    const arePostsIdentical =
      JSON.stringify(posts) === JSON.stringify(filteredPosts);

    if (selectedSubreddit === subredditName && !arePostsIdentical) {
      dispatch(resetFilteredPosts());
    }
  };

  return (
    <div className={styles.subreddit} onClick={handleSubredditSelection}>
      {avatar ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <i className="fa-brands fa-reddit-alien"></i>
      )}
      <h4>{subredditName}</h4>
    </div>
  );
}
