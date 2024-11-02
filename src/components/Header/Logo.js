import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.image}>
        <i className="fa-brands fa-square-reddit"></i>
      </div>
      <span className={styles.title}>Reduct</span>
    </div>
  );
}
