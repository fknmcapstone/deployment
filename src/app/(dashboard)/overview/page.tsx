/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client";
// This directive is required due to a bug with NextUI Accordion
// See: https://github.com/nextui-org/nextui/issues/1403

import styles from "./page.module.css";

export default function CurrentPrograms() {
  return (
    <main className={styles.main}>
      <title>Overview</title>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Canadian School Food Programs</h1>
          <div className={styles.subtitle}>
            A Systematic Review of Nutrition & Health Impact
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🎯</div>
              <div className={styles.highlightText}>
                Analyzing impacts on student nutrition and education
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>📊</div>
              <div className={styles.highlightText}>
                Comprehensive data from across provinces
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>📚</div>
              <div className={styles.highlightText}>
                Focus on evidence-based education programs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mapSection}>
        <div id={styles.map}>
          <iframe
            data-cy="chart_frame"
            title="School Food Programs"
            width="100%"
            height="100%"
            src="https://flo.uri.sh/visualisation/20806345/embed"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
          <div className={styles.greyRectangle} />
        </div>
      </div>

      <div className={styles.statsSection}>
        <h3>📊 Quick Facts</h3>
        <div className={styles.factsGrid}>
          <div className={styles.factItem}>
            <span className={styles.factNumber}>100+</span>
            <span className={styles.factLabel}>Programs Analyzed</span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factNumber}>10</span>
            <span className={styles.factLabel}>
              Provinces/Territories Covered
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factNumber}>500+</span>
            <span className={styles.factLabel}>Total Schools Impacted</span>
          </div>
        </div>
      </div>
    </main>
  );
}
