import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import {
  selectFilteredPosts,
  selectIsLoading,
  selectError,
  selectSelectedSubreddit,
  getPostsBySubreddits,
} from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Posts.module.css";

export default function Posts() {
  const posts = useSelector(selectFilteredPosts);
  // eslint-disable-next-line
  const isLoading = useSelector(selectIsLoading);
  // eslint-disable-next-line
  const error = useSelector(selectError);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(getPostsBySubreddits(selectedSubreddit));
    }
  }, [dispatch, selectedSubreddit]);

  return (
    <div id="posts-container" className={styles.posts}>
      {posts.map((post) => {
        return <Card key={post.data.id} postInfo={post.data} />;
      })}
    </div>
  );
}
