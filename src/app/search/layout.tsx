import React from "react";
import Link from "next/link";
import styles from "./search-layout.module.css";

export const metadata = {
  title: "Search Results",
  description: "Search results for content across the site",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.searchLayout}>
      <header className={styles.searchHeader}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Research</span>
            </div>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/overview" className={styles.navLink}>
              Overview
            </Link>
            <Link href="/intake_visuals/SFPs_general_information" className={styles.navLink}>
              Research
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.searchMain}>{children}</main>
      <footer className={styles.searchFooter}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} University of Toronto Research. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 