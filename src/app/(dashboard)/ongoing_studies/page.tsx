"use client";

import React from "react";
import styles from "./page.module.css";
import { ToTopButton } from "../common_elements";

export default function OngoingStudies() {
  return (
    <main className={styles.main}>
      <ToTopButton />
      <title>Ongoing Studies</title>
      <div className={styles.content}>
        <h1>Ongoing Studies</h1>
      </div>
    </main>
  );
}
