# Reduct
*A React + Redux client for browsing image-heavy Reddit communities.*

## Features  
- **Browse Subreddits**: Search and view posts from popular image-focused communities (e.g., r/pics, r/aww).  
- **Responsive Design**: Clean, card-based UI built with **CSS Flexbox** for seamless mobile/desktop viewing.  
- **Nested Comments**: Dive into discussions with collapsible comment threads.  
- **State Management**: Robust data handling with **Redux** (slices for posts, comments, votes).  

## Tech Stack  
- **Frontend**: React, Redux, Redux Thunk, CSS Flexbox  
- **API**: Reddit JSON API

## How It Works
- Fetches posts from Reddit’s API based on user-selected subreddits.
- Uses Redux Thunk to handle asynchronous API calls and state updates.
- Implements responsive layouts with CSS Flexbox for dynamic grid displays.
