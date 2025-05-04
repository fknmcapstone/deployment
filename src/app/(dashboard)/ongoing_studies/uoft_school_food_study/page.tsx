"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function UofTSchoolFoodStudy() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.brandBar}>
            <div className={styles.uoftLogo}>
              <Image 
                src="/images/uoft_logo.png"
                alt="University of Toronto Logo"
                width={50}
                height={50}
                className={styles.uoftImage}
              />
              <span>University of Toronto</span>
            </div>
            <div className={styles.facultyName}>Joannah & Brian Lawson Center for Child Nutrition</div>
          </div>
          <h1 className={styles.pageTitle}>School Food Programs</h1>
          <p className={styles.heroSubtitle}>Research study on nutrition and food programs in schools</p>
        </div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <section id="overview" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2>Study Overview</h2>
              <div className={styles.headerLine} />
            </div>
            <div className={styles.overviewCard}>
              <p>
                The University of Toronto School Food Programs study examines the impact of nutrition 
                on student health and academic performance. Our research aims to improve food programs 
                in schools across Ontario.
              </p>
            </div>
          </section>

          <section id="videos" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2>Instructional Videos</h2>
              <div className={styles.headerLine} />
            </div>
            
            <div className={styles.videoGrid}>
              <div id="elementary-video" className={styles.videoCard}>
                <h3>Study Overview Video (Elementary)</h3>
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VW0hKAEIn4I"
                    title="Elementary School Study Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div id="highschool-video" className={styles.videoCard}>
                <h3>Study Overview Video (High School)</h3>
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SWM1_sSlQb8"
                    title="High School Study Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div id="food-record-video" className={styles.videoCard}>
                <h3>Food Record Instructional Video</h3>
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3xV2JYCzU7Q"
                    title="3 Day Food Record Instructions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div id="consent-video" className={styles.videoCard}>
                <h3>Consent Form Instructional Video</h3>
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/EGnMxq-VUPc"
                    title="Consent Form Instructions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2>Contact Us</h2>
              <div className={styles.headerLine} />
            </div>
            
            <div className={styles.contactCard}>
              <p className={styles.contactText}>
                If you or your child have any questions about participating in this study, 
                please contact the FKNM research team at{" "}
                <a href="mailto:childnutrition.research@utoronto.ca" className={styles.emailLink}>
                  childnutrition.research@utoronto.ca
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 