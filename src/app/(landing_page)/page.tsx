/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
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
              <Link href="/overview/">
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
          <div className={styles.imageContainer}>
            <Image
              src="/stock_school_food_programs.webp"
              alt="Globe container opened up with 2 apples sitting inside"
              width={600}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className={styles.sectionTitle0}>Overview</h2>
            <Link data-cy="overview_link" href={"/overview/"}>
              <div className={styles.sectionLink}>
                National School Food Programs
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
            <div data-cy="overview_text" className={styles.sectionBlurb}>
              Explore national data on an interactive map and learn more about
              Canadian school food and nutrition interventions, policies and
              programs and their effects on diets and nutritional status. Current
              works of literature are synthesized and appraised, offering insight
              and uncovering important evidence gaps that require careful
              examination for future evaluations.
            </div>
          </div>
        </section>

        <section className={styles.researchSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/stock_research.webp"
              alt="Several lunch containers with food in them on a table with piled notebooks"
              width={600}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className={styles.sectionTitle0}>Research</h2>
            <Link 
              data-cy="intake_visuals_link" 
              href={"/intake_visuals/SFPs_general_information/"}
            >
              <div className={styles.sectionLink}>
                SFPs General Info
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
            <Link
              data-cy="measurement_tool_assessment_link"
              href={"/measurement_tool_assessment/"}
            >
              <div className={styles.sectionLink}>
                Measurement Tool
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
            <Link data-cy="sfp_components_link" href={"/sfp_components/"}>
              <div className={styles.sectionLink}>
                SFP Components
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
            <div data-cy="research_text" className={styles.sectionBlurb}>
              Explore data directly related to the school food environments and
              student eating behaviours at school. Gain insights into the impact
              of various school food programs and initiatives on dietary habits
              and overall well-being. These pages bring together the qualitative
              and quantitative data collected by the FKNM team.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
