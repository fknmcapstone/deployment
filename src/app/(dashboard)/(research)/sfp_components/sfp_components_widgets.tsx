/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./page.module.css";
import React from "react";

export function SFPComponent({ quote }: { quote: string }) {
  return (
    <div className={styles.carouselSlide}>
      <div className={styles.componentRow}>
        <p className={styles.quotationsText}>{quote}</p>
      </div>
    </div>
  );
}
