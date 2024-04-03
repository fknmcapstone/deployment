/* eslint-disable react/react-in-jsx-scope */
"use client";

import Link from "next/link";
import styles from "./page.module.css";

interface Page {
  dataAttr: string;
  href: string;
  name: string;
}

const pageList: Page[] = [
  {
    name: "School Food Programs",
    dataAttr: "nav_school_food_programs",
    href: "/school_food_programs/",
  },
  {
    name: "SFPs General Information",
    dataAttr: "nav_sfps_general_information",
    href: "/intake_visuals/SFPs_general_information/",
  },
  {
    name: "SFPs Food Breakdown",
    dataAttr: "nav_sfps_food_breakdown",
    href: "/intake_visuals/SFPs_food_breakdown/",
  },
  {
    name: "Parents' Preferences",
    dataAttr: "nav_parents_preferences",
    href: "/intake_visuals/parents_preferences/",
  },
  {
    name: "Parents' Opinions",
    dataAttr: "nav_parents_opinions",
    href: "/intake_visuals/parents_opinions/",
  },
  {
    name: "Measurement Tool Assessment",
    dataAttr: "nav_measurement_tool_assessment",
    href: "/measurement_tool_assessment/",
  },
  {
    name: "SFP Components",
    dataAttr: "nav_sfp_components",
    href: "/sfp_components/",
  },
  { name: "News", dataAttr: "nav_news", href: "/news/" },
  { name: "Manuscripts", dataAttr: "nav_manuscripts", href: "/manuscripts/" },
  {
    name: "Presentation",
    dataAttr: "nav_presentations",
    href: "/presentations/",
  },
  { name: "About FKNM", dataAttr: "nav_about_fknm", href: "/about_fknm/" },
];

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const pageElementsList = [];
  for (let i = 0; i < pageList.length; i++) {
    pageElementsList.push(
      <Link
        data-cy={pageList[i].dataAttr}
        href={pageList[i].href}
        onClick={toggle}
        className={styles.sidebarItem}
      >
        {pageList[i].name}
      </Link>
    );
    if (i != pageList.length - 1) {
      pageElementsList.push(<div className={styles.sidebarGridDivider} />);
    }
  }
  return (
    <div
      className={styles.backdrop}
      style={{
        overflow: isOpen ? "scroll" : "hidden",
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0" : "-100%"}`,
      }}
    >
      <div className={styles.closeButton} onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </div>
      <div className={styles.sidebarTitle}>Page Directory</div>
      <div className={styles.sidebarLine} />
      <div className={styles.sidebarGrid}>{pageElementsList}</div>
    </div>
  );
};

export default Sidebar;
