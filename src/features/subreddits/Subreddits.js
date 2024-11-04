import React, { useEffect } from "react";
import Subreddit from "./Subreddit";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopSubreddits,
  selectSubreddits,
  selectIsLoading,
  selectError,
} from "./subredditsSlice";
import styles from "./Subreddits.module.css";

export default function Subreddits() {
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopSubreddits());
  }, [dispatch]);

  return (
    <div className={styles.subreddits}>
      <h3>Subreddits</h3>
      {subreddits.map((subreddit) => {
        console.log(subreddit.data);
        return (
          <Subreddit
            avatar={subreddit.data["icon_img"]}
            subredditName={subreddit.data["display_name"]}
          />
        );
      })}
    </div>
  );
}
