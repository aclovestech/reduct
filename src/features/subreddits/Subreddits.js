import React, { useEffect } from "react";
import Subreddit from "./Subreddit";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopSubreddits,
  selectSubreddits,
  selectIsLoading,
  selectError,
  selectLastFetched,
} from "./subredditsSlice";
import {
  selectSelectedSubreddit,
  changeSelectedSubreddit,
} from "../posts/postsSlice";
import styles from "./Subreddits.module.css";

export default function Subreddits() {
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const lastFetched = useSelector(selectLastFetched);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const dispatch = useDispatch();

  useEffect(() => {
    const cachedSubreddits = localStorage.getItem("subreddits");
    const now = Date.now();

    if (
      !cachedSubreddits ||
      !lastFetched ||
      now - lastFetched > 60 * 5 * 1000
    ) {
      dispatch(getTopSubreddits());
    }

    if (!selectedSubreddit) {
      dispatch(changeSelectedSubreddit(subreddits[0].data["display_name"]));
    }
  }, [dispatch, subreddits]);

  return (
    <div className={styles.subreddits}>
      <h3>Subreddits</h3>
      {subreddits.map((subreddit) => {
        return (
          <Subreddit
            key={subreddit.data["display_name"]}
            avatar={subreddit.data["icon_img"]}
            subredditName={subreddit.data["display_name"]}
          />
        );
      })}
    </div>
  );
}
