/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feeding Kids, Nourishing Minds Dashboard",
  description: "ECE496 Capstone Project",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landingPageContent}>
        <section className={styles.landingBlurbContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTagline}>
              Nourishing Young Minds, One Meal at a Time
            </h1>
            <p className={styles.heroSubheading}>
              Explore data-driven insights and programs empowering child
              nutrition
            </p>
            <div className={styles.ctaContainer}>
              <Link href="/school_food_programs/">
                <button className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                  Explore Dashboard
                </button>
              </Link>
              <Link href="/about_fknm/">
                <button
                  className={`${styles.ctaButton} ${styles.ctaSecondary}`}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.researchSection}>
          <div
            className={styles.schoolFoodSectionImg}
            title="Globe container opened up with 2 apples sitting inside"
          ></div>
          <Link
            data-cy="school_food_programs_link"
            href={"/school_food_programs/"}
          >
            <div
              className={[
                styles.sectionTitleLinkContainer0,
                styles.sectionTitle0,
                styles.sectionLink,
              ].join(" ")}
            >
              {"School Food Programs"}
              <svg className={styles.linkArrow} viewBox="0 -100 800 600">
                <path
                  fill="#d32a32"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                  stroke="#d32a32"
                  strokeWidth="100"
                />
              </svg>
            </div>
          </Link>
          <div
            data-cy="school_food_programs_text"
            className={styles.sectionBlurb}
          >
            Explore national data on an interactive map and learn more about
            Canadian school food and nutrition interventions, policies and
            programs and their effects on diets and nutritional status. Current
            works of literature are synthesized and appraised, offering insight
            and uncovering important evidence gaps that require careful
            examination for future evaluations.
          </div>
        </section>
        <section className={styles.researchSection}>
          <div
            className={styles.researchSectionImg}
            title="Several lunch containers with food in them on a table with piled notebooks"
          ></div>

          <div className={[styles.sectionTitleLinkContainer].join(" ")}>
            <p className={styles.sectionTitle}>Research</p>
            <Link data-cy="intake_visuals_link" href={"/intake_visuals/"}>
              <p className={styles.sectionLink}>
                {"Intake Visuals "}
                <svg className={styles.linkArrow} viewBox="0 -100 800 600">
                  <path
                    fill="#d32a32"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    stroke="#d32a32"
                    strokeWidth="100"
                  />
                </svg>
              </p>
            </Link>
            <Link
              data-cy="measurement_tool_assessment_link"
              href={"/measurement_tool_assessment/"}
            >
              <p className={styles.sectionLink}>
                {"Measurement Tool Assessment "}
                <svg className={styles.linkArrow} viewBox="0 -100 800 600">
                  <path
                    fill="#d32a32"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    stroke="#d32a32"
                    strokeWidth="100"
                  />
                </svg>
              </p>
            </Link>
            <Link data-cy="sfp_components_link" href={"/sfp_components/"}>
              <p className={styles.sectionLink}>
                {"SFP Components "}
                <svg className={styles.linkArrow} viewBox="0 -100 800 600">
                  <path
                    fill="#d32a32"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    stroke="#d32a32"
                    strokeWidth="100"
                  />
                </svg>
              </p>
            </Link>
          </div>

          <div data-cy="research_text" className={styles.sectionBlurb}>
            Explore data directly related to the school food environments and
            student eating behaviours at school. Gain insights into the impact
            of various school food programs and initiatives on dietary habits
            and overall well-being.These pages bring together the qualitative
            and quantitative data collected by the FKNM team.
          </div>
        </section>
      </div>
    </main>
  );
}
