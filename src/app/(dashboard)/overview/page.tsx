/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client";
// This directive is required due to a bug with NextUI Accordion
// See: https://github.com/nextui-org/nextui/issues/1403

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function CurrentPrograms() {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Handle Datawrapper iframe resizing
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === 'object' && event.data['datawrapper-height']) {
        const iframes = document.querySelectorAll('iframe');
        for (const key in event.data['datawrapper-height']) {
          for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === event.source) {
              const height = event.data['datawrapper-height'][key] + 'px';
              iframes[i].style.height = height;
              setMapLoaded(true);
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
        <h2 className={styles.mapTitle}>Geographic Distribution of School Food Programs</h2>
        <p className={styles.mapDescription}>
          Click on regions to see detailed information.
        </p>
        <div id={styles.map}>
          <iframe 
            title="Canadian School Food Programs" 
            aria-label="Map" 
            id="datawrapper-chart-ryRrf" 
            src="https://datawrapper.dwcdn.net/ryRrf/7/" 
            scrolling="no" 
            frameBorder="0" 
            style={{ border: "none", width: "100%", maxWidth: "100%" }} 
            height="519" 
            data-external="1"
            loading="lazy"
            onLoad={() => setMapLoaded(true)}
          />
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
