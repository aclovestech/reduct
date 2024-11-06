import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts } from "../../features/posts/postsSlice";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPosts(searchInput));
    setSearchInput("");
  };

  return (
    <div id="search-form-container">
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          id="search-bar"
          className={styles.searchBar}
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search"
        />
        <i
          className={`${styles.searchButton} fa-solid fa-magnifying-glass`}
          onClick={handleSubmit}
        ></i>
      </form>
    </div>
  );
}
