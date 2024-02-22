import Link from "next/link";
import styles from "./page.module.css";

function Separator({ height = 1 }) {
  return (
    <hr
      style={{
        backgroundColor: "white",
        marginBlock: "0.8rem",
        height: height,
        border: "none",
      }}
    />
  );
}

const Navbar = ({ width }: { width: number }) => {
  return (
    <>
      <div
        data-cy="nav_bar"
        className={styles.navigationbar}
        style={{ display: width < 1024 ? "none" : "block" }}
      >
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
              <Link data-cy="nav_intake_visuals" href="/intake_visuals/">
                Intake Visuals
              </Link>
              <Separator />
              <Link
                data-cy="nav_measurement_tool_assessment"
                href="/measurement_tool_assessment/"
              >
                Measurement Tool Assessment
              </Link>
              <Separator />
              <Link data-cy="nav_sfp_components" href="/sfp_components/">
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
