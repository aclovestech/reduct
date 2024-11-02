import React from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <div className={styles.searchForm}>
      <input className={styles.searchBar} type="text" placeholder="Search" />
      <div className={styles.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
