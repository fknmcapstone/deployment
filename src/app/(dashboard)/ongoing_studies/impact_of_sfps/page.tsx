"use client";

import React from "react";
import styles from "./page.module.css";
import ToTopButton from "../../common_elements";

export default function ImpactOfSFPs() {
  return (
    <main className={styles.main}>
      <ToTopButton />
      <title>Impact of SFPs</title>
      <div className={styles.content}>
        <h1 data-cy="impact_title">Impact of SFPs</h1>
        {/* Add content for Impact of SFPs here */}
      </div>
    </main>
  );
} 