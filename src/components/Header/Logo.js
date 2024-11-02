import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div id="logo-container" className={styles.logo}>
      <div id="logo-image" className={styles.image}>
        <i className="fa-brands fa-square-reddit"></i>
      </div>
      <span id="logo-title" className={styles.title}>
        Reduct
      </span>
    </div>
  );
}
