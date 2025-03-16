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

const ResearchMenu = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <div data-cy="nav_research_submenu" className={styles.navBarSubMenu}>
    <div>
      <div data-cy="nav_intake_visuals" className={styles.intakeVisualsNavItem}>
        Intake Visuals
        <div className={styles.intakeVisualsSubMenu}>
          <Link
            className={styles.marginBlock}
            data-cy="nav_sfps_general_information"
            href="/intake_visuals/SFPs_general_information/"
            onClick={onLinkClick}
          >
            SFPs General Information
          </Link>
          <Link
            className={styles.marginBlock}
            data-cy="nav_sfps_food_breakdown"
            href="/intake_visuals/SFPs_food_breakdown/"
            onClick={onLinkClick}
          >
            SFPs Food Breakdown
          </Link>
        </div>
      </div>
      <Separator />
      <div data-cy="nav_stakeholders" className={styles.intakeVisualsNavItem}>
        Stakeholders Perception
        <div className={styles.intakeVisualsSubMenu}>
          <Link
            className={styles.marginBlock}
            data-cy="nav_parents_preferences"
            href="/stakeholders_perception/parents_preferences/"
            onClick={onLinkClick}
          >
            Parents' Preferences
          </Link>
          <Link
            className={styles.marginBlock}
            data-cy="nav_parents_opinions"
            href="/stakeholders_perception/parents_opinions/"
            onClick={onLinkClick}
          >
            Parents' Opinions
          </Link>
        </div>
      </div>
    </div>
    <Separator />
      <Link
        className={styles.marginBlock}
        data-cy="nav_national_characteristics"
        href="/national_characteristics/"
        onClick={onLinkClick}
      >
        National Characteristics of SFPs
      </Link>
    <Separator />
    <div>
      <Link
        className={styles.marginBlock}
        data-cy="nav_measurement_tool_assessment"
        href="/measurement_tool_assessment/"
        onClick={onLinkClick}
      >
        Measurement Tool Assessment
      </Link>
      <Separator />
      <Link
        className={styles.marginBlock}
        data-cy="nav_sfp_components"
        href="/sfp_components/"
        onClick={onLinkClick}
      >
        SFP Components
      </Link>
    </div>
    <Separator />
  </div>
);

const OngoingStudiesMenu = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <div data-cy="nav_ongoing_studies_submenu" className={styles.navBarSubMenu}>
    <Link
      className={styles.marginBlock}
      data-cy="nav_impact_of_sfps"
      href="/ongoing_studies/uoft_school_food_study/"
      onClick={onLinkClick}
    >
      U of T, School Food Study
    </Link>
  </div>
);

const PublicationsMenu = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <div data-cy="nav_publications_submenu" className={styles.navBarSubMenu}>
    <Link
      className={styles.marginBlock}
      data-cy="nav_manuscripts"
      href="/manuscripts/"
      onClick={onLinkClick}
    >
      Manuscripts
    </Link>
    <Separator />
    <Link
      className={styles.marginBlock}
      data-cy="nav_presentations"
      href="/presentations/"
      onClick={onLinkClick}
    >
      Presentations
    </Link>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null); // Reset active submenu when toggling menu
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <>
      <div data-cy="nav_bar" className={styles.header}>
        <Link href="/" onClick={closeMenu}>
          <div data-cy="header_logo">
            <img
              src="/fknm_logo.png"
              alt="FKNM Logo"
              className={styles.headerLogo}
            />
          </div>
        </Link>
        <Link data-cy="header_title" href="/" onClick={closeMenu}>
          <p>Feeding Kids</p>
          <p>Nourishing Minds</p>
        </Link>

        <div className={styles.searchContainer}>
          <SearchAndJump />
        </div>

        <div className={styles.menuButtonContainer}>
          <button className={styles.menuButton} onClick={toggle} aria-label="Toggle menu">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#002A5C" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#002A5C" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div data-cy="nav_bar" className={`${styles.navigationbar} ${isOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.navigationbarContent}>
          <Link data-cy="nav_overview" href="/overview/" onClick={closeMenu}>
            <p>Overview</p>
          </Link>

          <div 
            data-cy="nav_research" 
            className={`${styles.researchNavItem} ${activeSubmenu === 'research' ? styles.active : ''}`}
            onClick={() => toggleSubmenu('research')}
          >
            Research
            <ResearchMenu onLinkClick={closeMenu} />
          </div>

          <div 
            data-cy="nav_ongoing_studies" 
            className={`${styles.researchNavItem} ${activeSubmenu === 'ongoing' ? styles.active : ''}`}
            onClick={() => toggleSubmenu('ongoing')}
          >
            Ongoing Studies
            <OngoingStudiesMenu onLinkClick={closeMenu} />
          </div>

          <Link data-cy="nav_news" href="/news/" onClick={closeMenu}>
            News
          </Link>

          <div 
            data-cy="nav_publications" 
            className={`${styles.researchNavItem} ${activeSubmenu === 'publications' ? styles.active : ''}`}
            onClick={() => toggleSubmenu('publications')}
          >
            Publications
            <PublicationsMenu onLinkClick={closeMenu} />
          </div>

          <Link data-cy="nav_about_fknm" href="/about_fknm/" onClick={closeMenu}>
            <p>About FKNM</p>
          </Link>

          <Link data-cy="nav_contact" href="/contact/" onClick={closeMenu}>
            <p>Contact</p>
          </Link>
        </div>
      </div>
      {isOpen && <div className={styles.backdrop} onClick={toggle} />}
    </>
  );
};

export default Navbar;
