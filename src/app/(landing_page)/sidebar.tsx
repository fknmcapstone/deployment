"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <div
      className={styles.backdrop}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0" : "-100%"}`,
      }}
    >
      <div className={styles.closeButton} onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </div>
      <div className={styles.sidebarTitle}>Pages</div>
      <Link
        href="/school_food_programs/"
        onClick={toggle}
        className={styles.sidebarItem}
      >
        School Food Programs
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_intake_visuals"
        href="/intake_visuals/"
      >
        Intake Visuals
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_measurement_tool_assessment"
        href="/measurement_tool_assessment/"
      >
        Measurement Tool Assessment
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_sfp_components"
        href="/sfp_components/"
      >
        SFP Components
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_news"
        href="/news/"
      >
        News
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_manuscripts"
        href="/manuscripts/"
      >
        Manuscripts
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_presentations"
        href="/presentations/"
      >
        Presentations
      </Link>
      <Link
        className={styles.sidebarItem}
        onClick={toggle}
        data-cy="nav_about_fknm"
        href="/about_fknm/"
      >
        About FKNM
      </Link>
    </div>
  );
};

export default Sidebar;
