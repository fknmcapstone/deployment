"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      data-cy="return_to_top_button"
      className={styles.returnToTopButton}
      style={{ display: isVisible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <svg viewBox="-8 -8 40 40" fill="none">
        <path
          d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
          fill="#626262"
          stroke="#626262"
          strokeWidth="1"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default ToTopButton;
