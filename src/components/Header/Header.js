import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header id="header-container" className={styles.header}>
      <Logo />
      <SearchForm />
    </header>
  );
}
