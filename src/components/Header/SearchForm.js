import React from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <div id="search-form-container" className={styles.searchForm}>
      <input
        id="search-bar"
        className={styles.searchBar}
        type="text"
        placeholder="Search"
      />
      <div id="search-button" className={styles.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
