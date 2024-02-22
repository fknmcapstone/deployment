/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

function Separator({ color = "black", height = 2 }) {
  return (
    <hr
      style={{
        backgroundColor: "#002253",
        marginInline: "10rem",
        marginBlockStart: "4rem",
        marginBlockEnd: "1rem",
        height: height,
        border: "none",
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "Feeding Kids, Nourishing Minds Dashboard",
  description: "ECE496 Capstone Project",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.landingPageContent}>
        <div className={styles.landingBlurbContainer}>
          <div data-cy="landing_text" className={styles.landingBlurb}>
          The Feeding Kids, Nourishing Minds (FKNM) School-Based Nutrition
          Research Initiative is a project funded by a donation from President’s
          Choice Children’s Charity. Through a landscape policy analysis and
          series of systematic reviews, a comprehensive overview of school meal
          and snack programs in Canada is being organised in an interactive
          dashboard including consideration of equity indicators. 
          <br />
          The impact of the COVID-19 pandemic, including changes
          in policies and programs, highlight the lessons learned and
          opportunities for leveraging these programs and improving resiliency in
          marginalized communities. The FKNM is informing the guidance of a
          framework for a national school food program policy.
          </div>

          <Link
            data-cy="covid_link"
            href="/covid_19_impacts/"
            className={styles.covid19Link}
          >
            Learn more about the impacts of COVID-19
          </Link>
        </div>
        <div data-cy="research_title" className={styles.researchTitle}>
          Our Research
        </div>
        <div className={styles.researchSection}>
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
                styles.sectionTitleLinkContainer,
                styles.sectionTitle,
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
            Sample text about what this page will show you. More on Current
            programs and things you can possibly learn Sample text about what
            this page will show you. More on Current programs and things you can
            possibly learn Sample text about what this page will show you. More
            on Current programs and things you can possibly learn{" "}
          </div>
        </div>
        <div className={styles.researchSection}>
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
          </div>

          <div data-cy="research_text" className={styles.sectionBlurb}>
            Sample text about what this page will show you. More on Current
            programs and things you can possibly learn Sample text about what
            this page will show you. More on Current programs and things you can
            possibly learn Sample text about what this page will show you. More
            on Current programs and things you can possibly learn{" "}
          </div>
        </div>
        <Separator />
        <div className={styles.collabContainer}>
          <a
            href="https://childnutrition.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/Lawson_logo.png"
              alt={
                "Logo of the University of Toronto's Joannah & Brian Lawson Centre for Child Nutrition"
              }
              width="300"
              height="300"
            ></Image>
          </a>
          <a
            href="https://cgen.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/CGEN_UT_Signature_P655_RGB.png"
              alt={
                "Logo of the University of Toronto's Centre for Global Engineering"
              }
              width="300"
              height="300"
            ></Image>
          </a>
          <a
            href="https://www.ece.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/ECE_UT_Signature_P655_RGB.png"
              alt={
                "Logo of the University of Toronto's Electrical & Computer Engineering Department"
              }
              width="300"
              height="300"
            ></Image>
          </a>
          <a
            href="https://www.engineering.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/FASE_UT_Signature_RGB_P655_RGB.png"
              alt={
                "Logo of the University of Toronto's Faculty of Applied Science and Engineering"
              }
              width="300"
              height="300"
            ></Image>
          </a>
        </div>
      </h1>
    </main>
  );
}
