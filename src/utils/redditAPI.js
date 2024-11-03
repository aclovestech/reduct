const BASE_URL = "https://www.reddit.com";
const SUBREDDITS_LIMIT = 25;
const POSTS_LIMIT = 25;

export const fetchTopSubreddits = async () => {
  const response = await fetch(
    `${BASE_URL}/subreddits.json?limit=${SUBREDDITS_LIMIT}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top subreddits");
  }

  return await response.json();
};

export const fetchPostsBySubreddit = async (subreddit) => {
  const response = await fetch(
    `${BASE_URL}/r/${subreddit}/top.json?limit=${POSTS_LIMIT}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
};

export const fetchCommentsByPostId = async (subreddit, postId) => {
  const response = await fetch(
    `${BASE_URL}/r/${subreddit}/comments/${postId}.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
};
