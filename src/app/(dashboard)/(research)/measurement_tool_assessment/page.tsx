"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React from "react";
import {
  IoGlobeOutline,
  IoMapOutline,
  IoLocationOutline,
  IoBusinessOutline,
} from "react-icons/io5";

export default function MeasurementToolAssessment() {
  const [mapView, setMapView] = useState("world");
  const mapSrc = {
    world: "https://datawrapper.dwcdn.net/3l2tr/2/",
    "north-america": "https://datawrapper.dwcdn.net/gDOMc/1/",
    "south-america": "https://datawrapper.dwcdn.net/cl7ci/1/",
    europe: "https://datawrapper.dwcdn.net/2BLz1/1/",
  }[mapView];

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>School Food Environment Assessment</h1>
        <p className={styles.subtitle}>
          Advancing evidence-based research for inclusive and effective school
          food programs
        </p>
      </div>

      <section className={styles.overviewSection}>
        <div className={styles.overviewContent}>
          <h2>Shaping the Future of School Food Programs</h2>
          <p>
            Through evidence-based research and collaborative efforts,
            we&apos;re working to understand and improve school food
            environments across the globe. Our comprehensive assessment tools
            are helping shape feasible, inclusive, and effective national school
            food programs.
          </p>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapControls}>
          <button
            className={`${styles.mapButton} ${
              mapView === "world" ? styles.active : ""
            }`}
            onClick={() => setMapView("world")}
          >
            <IoGlobeOutline />
            <span>Global View</span>
          </button>
          <button
            className={`${styles.mapButton} ${
              mapView === "north-america" ? styles.active : ""
            }`}
            onClick={() => setMapView("north-america")}
          >
            <IoMapOutline />
            <span>North America</span>
          </button>
          <button
            className={`${styles.mapButton} ${
              mapView === "south-america" ? styles.active : ""
            }`}
            onClick={() => setMapView("south-america")}
          >
            <IoLocationOutline />
            <span>South America</span>
          </button>
          <button
            className={`${styles.mapButton} ${
              mapView === "europe" ? styles.active : ""
            }`}
            onClick={() => setMapView("europe")}
          >
            <IoBusinessOutline />
            <span>Europe</span>
          </button>
        </div>
        <div className={styles.mapDisplay}>
          <iframe
            title={`Food Environment Assessment - ${mapView
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}`}
            width="100%"
            height="100%"
            src={mapSrc}
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          />
        </div>
      </section>

      <section className={styles.findingsSection}>
        <h2>Key Research Findings</h2>
        <div className={styles.findingsGrid}>
          <div className={styles.findingCard}>
            <span className={styles.cardNumber}>01</span>
            <h3>Assessment Quality</h3>
            <p>
              89% of current tools are rated medium or low quality, highlighting
              opportunities for methodological advancement.
            </p>
          </div>
          <div className={styles.findingCard}>
            <span className={styles.cardNumber}>02</span>
            <h3>Environmental Focus</h3>
            <p>
              Physical environment emerges as the most explored dimension, while
              economic factors present opportunities for deeper investigation.
            </p>
          </div>
          <div className={styles.findingCard}>
            <span className={styles.cardNumber}>03</span>
            <h3>Canadian Context</h3>
            <p>
              Leading with high-quality assessment tools while addressing the
              critical balance of health promotion and universal access.
            </p>
          </div>
          <div className={styles.findingCard}>
            <span className={styles.cardNumber}>04</span>
            <h3>Research Scope</h3>
            <p>
              Analysis of 73 studies reveals strong emphasis on physical and
              sociocultural dimensions, identifying key areas for expansion.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.analysisSection}>
        <h2>Program Distribution Analysis</h2>
        <div className={styles.chartContainer}>
          <iframe
            title="Programs Distribution Analysis"
            src="https://datawrapper.dwcdn.net/yqHt4/2/"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </section>
    </main>
  );
}
