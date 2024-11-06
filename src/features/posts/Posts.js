import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import NoPostsAvailable from "../../components/NoPostsAvailable/NoPostsAvailable";
import {
  selectFilteredPosts,
  selectIsLoading,
  selectSelectedSubreddit,
  getPostsBySubreddits,
} from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Posts.module.css";

export default function Posts() {
  const filteredPosts = useSelector(selectFilteredPosts);
  // eslint-disable-next-line
  const isLoading = useSelector(selectIsLoading);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(getPostsBySubreddits(selectedSubreddit));
    }
  }, [dispatch, selectedSubreddit]);

  return (
    <div id="posts-container" className={styles.posts}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => {
          return <Card key={post.data.id} postInfo={post.data} />;
        })
      ) : (
        <NoPostsAvailable />
      )}
    </div>
  );
}
