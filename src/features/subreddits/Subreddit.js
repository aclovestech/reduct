import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectedSubreddit } from "../posts/postsSlice";
import styles from "./Subreddit.module.css";

export default function Subreddit({ avatar, subredditName }) {
  const dispatch = useDispatch();

  const handleSubredditSelection = () => {
    dispatch(changeSelectedSubreddit(subredditName));
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
