/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import "./globals.css";
import Image from "next/image";
import styles from "./(landing_page)/page.module.css";
import Link from "next/link";
import { Providers } from "./providers";
import Navbar from "./(landing_page)/navbar";
import { useEffect, useState } from "react";
import Sidebar from "./(landing_page)/sidebar";
import localFont from "next/font/local";
const TradeGothic = localFont({ src: "./TradeGothic.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en" className={TradeGothic.className}>
      <body>
        <Providers>
          <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
              <div data-cy="header" className={styles.header}>
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
                  <p>
                    Feeding Kids,
                    <br className={styles.headerBreak} />
                    Nourishing Minds
                  </p>
                </Link>

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
              <Navbar />
              <Sidebar isOpen={isOpen} toggle={toggle} />
            </nav>

            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
