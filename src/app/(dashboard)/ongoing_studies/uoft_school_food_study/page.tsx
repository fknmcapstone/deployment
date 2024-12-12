/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import styles from "./page.module.css";

export default function UofTSchoolFoodStudy() {
  return (
    <div className={styles.pageContainer}>
      <nav className={styles.topTableOfContents}>
        <h2>University of Toronto, School Food Study</h2>
        <div className={styles.tocGrid}>
          <div className={styles.tocSection}>
            <div className={styles.tocHeader}>
              <span className={styles.tocNumber}>1</span>
              <h3>Informational Videos</h3>
            </div>
            <ul>
              <li>
                <a href="#elementary-video">
                  Study Overview (Elementary)
                </a>
              </li>
              <li>
                <a href="#highschool-video">
                  Study Overview (High School)
                </a>
              </li>
              <li>
                <a href="#food-record-video">
                  Food Record Instructions
                </a>
              </li>
              <li>
                <a href="#consent-video">
                  Consent Form Instructions
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.tocSection}>
            <div className={styles.tocHeader}>
              <span className={styles.tocNumber}>2</span>
              <h3>Student Information</h3>
            </div>
            <ul>
              <li>
                <a href="#student-benefits">
                  Benefits of Participating
                </a>
              </li>
              <li>
                <a href="#student-tasks">
                What will you be asked to do
                </a>
                <ul className={styles.subList}>
                  <li>
                    <a href="#grades-1-3">Grades 1-3</a>
                  </li>
                  <li>
                    <a href="#grades-4-8">Grades 4-8</a>
                  </li>
                  <li>
                    <a href="#grades-9-12">Grades 9-12</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.tocSection}>
            <div className={styles.tocHeader}>
              <span className={styles.tocNumber}>3</span>
              <h3>Parent Information</h3>
            </div>
            <ul>
              <li>
                <a href="#parent-benefits">
                  Benefits of Participating
                </a>
              </li>
              <li>
                <a href="#parent-tasks">
                  What will you be asked to do
                </a>
                <ul className={styles.subList}>
                  <li>
                    <a href="#parent-role">Parent</a>
                  </li>
                  <li>
                    <a href="#caregiver-role">Caregiver</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.tocSection}>
            <div className={styles.tocHeader}>
              <span className={styles.tocNumber}>4</span>
              <h3>Contact Information</h3>
            </div>
            <ul>
              <li>
                <a href="#contact">
                  Research Team Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <section id="videos" className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Videos</h2>
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

        <section id="student-info" className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Information for Students</h2>
            <div className={styles.headerLine} />
          </div>
          
          <div className={styles.infoCard}>
            <div id="student-benefits" className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <h3>Benefits of Participating</h3>
                <div className={styles.subHeaderLine} />
              </div>
              <div className={styles.contentBox}>
                {/* Benefits content */}
              </div>
            </div>

            <div id="student-tasks" className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <h3>What will you be asked to do</h3>
                <div className={styles.subHeaderLine} />
              </div>
              
              <div className={styles.gradeSection}>
                <div id="grades-1-3" className={styles.gradeBlock}>
                  <div className={styles.gradeHeader}>
                    <h4 className={styles.gradeLabel}>Grades 1-3</h4>
                  </div>
                  <div className={styles.contentBox}>
                    {/* Content for grades 1-3 */}
                  </div>
                </div>

                <div id="grades-4-8" className={styles.gradeBlock}>
                  <div className={styles.gradeHeader}>
                    <h4 className={styles.gradeLabel}>Grades 4-8</h4>
                  </div>
                  <div className={styles.contentBox}>
                    {/* Content for grades 4-8 */}
                  </div>
                </div>

                <div id="grades-9-12" className={styles.gradeBlock}>
                  <div className={styles.gradeHeader}>
                    <h4 className={styles.gradeLabel}>Grades 9-12</h4>
                  </div>
                  <div className={styles.contentBox}>
                    {/* Content for grades 9-12 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="parent-info" className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Information for Parents</h2>
            <div className={styles.headerLine} />
          </div>
          
          <div className={styles.infoCard}>
            <div id="parent-benefits" className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <h3>Benefits of Participating</h3>
                <div className={styles.subHeaderLine} />
              </div>
              <div className={styles.contentBox}>
                {/* Parent benefits content */}
              </div>
            </div>

            <div id="parent-tasks" className={styles.infoBlock}>
              <div className={styles.infoBlockHeader}>
                <h3>What will you be asked to do</h3>
                <div className={styles.subHeaderLine} />
              </div>
              
              <div className={styles.gradeSection}>
                <div id="parent-role" className={styles.gradeBlock}>
                  <div className={styles.gradeHeader}>
                    <h4 className={styles.gradeLabel}>Parent</h4>
                  </div>
                  <div className={styles.contentBox}>
                    {/* Parent specific content */}
                  </div>
                </div>
                
                <div id="caregiver-role" className={styles.gradeBlock}>
                  <div className={styles.gradeHeader}>
                    <h4 className={styles.gradeLabel}>Caregiver</h4>
                  </div>
                  <div className={styles.contentBox}>
                    {/* Caregiver specific content */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Contact Us</h2>
            <div className={styles.headerLine} />
          </div>
          
          <p className={styles.contactText}>
            If you or your child have any questions about participating in this study, 
            please contact the FKNM research team at{" "}
            <a href="mailto:childnutrition.research@utoronto.ca">
              childnutrition.research@utoronto.ca
            </a>
          </p>
        </section>
      </main>
    </div>
  );
} 