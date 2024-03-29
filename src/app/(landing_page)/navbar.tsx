/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import styles from "./page.module.css";

// eslint-disable-next-line react/prop-types
function Separator({ height = 1 }) {
  return (
    <hr
      style={{
        backgroundColor: "white",
        height: height,
        border: "none",
      }}
    />
  );
}

const Navbar = () => {
  return (
    <>
      <div data-cy="nav_bar" className={styles.navigationbar}>
        <div className={styles.navigationbarContent}>
          <Link
            data-cy="nav_school_food_programs"
            href="/school_food_programs/"
          >
            <p>School Food Programs</p>
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
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_parents_preferences"
                    href="/intake_visuals/parents_preferences/"
                  >
                    Parents' Preferences
                  </Link>
                  <Separator />
                  <Link
                    className={styles.marginBlock}
                    data-cy="nav_parents_opinions"
                    href="/intake_visuals/parents_opinions/"
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
              <Link data-cy="nav_manuscripts" href="/manuscripts/">
                Manuscripts
              </Link>
              <Separator />
              <Link data-cy="nav_presentations" href="/presentations/">
                Presentations
              </Link>
              <Separator />
            </div>
          </div>
          <Link data-cy="nav_about_fknm" href="/about_fknm/">
            About FKNM
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
