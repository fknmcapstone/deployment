/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import styles from "./page.module.css";
import SearchAndJump from "../components/SearchAndJump";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Separator() {
  return <div className={styles.separator} />;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div data-cy="nav_bar" className={styles.header}>
        <Link href="/">
          <div data-cy="header_logo">
            <img
              src="/fknm_logo.png"
              alt="FKNM Logo"
              className={styles.headerLogo}
            />
          </div>
        </Link>
        <Link data-cy="header_title" href="/">
          <p>Feeding Kids</p>
          <p>Nourishing Minds</p>
        </Link>

        <SearchAndJump />

        <div className={styles.menuButtonContainer}>
          <div className={styles.menuButton} onClick={toggle}>
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div data-cy="nav_bar" className={styles.navigationbar}>
        <div className={styles.navigationbarContent}>
          <Link data-cy="nav_overview" href="/overview/">
            <p>Overview</p>
          </Link>

          <div data-cy="nav_research" className={styles.researchNavItem}>
            Research
            <div
              data-cy="nav_research_submenu"
              className={styles.navBarSubMenu}
            >
              <div
                data-cy="nav_intake_visuals"
                className={styles.intakeVisualsNavItem}
              >
                Intake Visuals
                <div
                  data-cy="nav_intake_visuals_submenu"
                  className={styles.intakeVisualsSubMenu}
                >
                  <div className={styles.triangleLeft} />
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_sfps_general_information"
                    href="/intake_visuals/SFPs_general_information/"
                  >
                    SFPs General Information
                  </Link>
                  <Separator />
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_sfps_food_breakdown"
                    href="/intake_visuals/SFPs_food_breakdown/"
                  >
                    SFPs Food Breakdown
                  </Link>
                  <Separator />
                </div>
              </div>
              <Separator />
              <div
                data-cy="nav_intake_visuals"
                className={styles.intakeVisualsNavItem}
              >
                Stakeholders Perception
                <div
                  data-cy="nav_intake_visuals_submenu"
                  className={styles.intakeVisualsSubMenu}
                >
                  <div className={styles.triangleLeft} />
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_parents_preferences"
                    href="/stakeholders_perception/parents_preferences/"
                  >
                    Parents' Preferences
                  </Link>
                  <Separator />
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_parents_opinions"
                    href="/stakeholders_perception/parents_opinions/"
                  >
                    Parents' Opinions
                  </Link>
                  <Separator />
                </div>
              </div>
              <Separator />
              <Link
                className={styles.marginBlock}
                data-cy="nav_measurement_tool_assessment"
                href="/measurement_tool_assessment/"
              >
                Measurement Tool Assessment
              </Link>
              <Separator />
              <Link
                className={styles.marginBlock}
                data-cy="nav_sfp_components"
                href="/sfp_components/"
              >
                SFP Components
              </Link>
              <Separator />
              <Link
                className={styles.marginBlock}
                data-cy="nav_national_characteristics"
                href="/national_characteristics/"
              >
                National Characteristics of SFPs
              </Link>
              <Separator />
            </div>
          </div>

          <div data-cy="nav_ongoing_studies" className={styles.researchNavItem}>
            Ongoing Studies
            <div
              data-cy="nav_ongoing_studies_submenu"
              className={styles.navBarSubMenu}
            >
              <Link
                className={styles.marginBlock}
                data-cy="nav_impact_of_sfps"
                href="/ongoing_studies/uoft_school_food_study/"
              >
                University of Toronto, School Food Study
              </Link>
              <Separator />
            </div>
          </div>

          <Link data-cy="nav_news" href="/news/">
            News
          </Link>
          <div data-cy="nav_publications" className={styles.researchNavItem}>
            Publications
            <div
              data-cy="nav_publications_submenu"
              className={styles.navBarSubMenu}
            >
              <Link
                className={styles.marginBlock}
                data-cy="nav_manuscripts"
                href="/manuscripts/"
              >
                Manuscripts
              </Link>
              <Separator />
              <Link
                className={styles.marginBlock}
                data-cy="nav_presentations"
                href="/presentations/"
              >
                Presentations
              </Link>
              <Separator />
            </div>
          </div>
          <Link data-cy="nav_about_fknm" href="/about_fknm/">
            <p>About FKNM</p>
          </Link>
          <Link data-cy="nav_contact" href="/about_fknm/contact/">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
