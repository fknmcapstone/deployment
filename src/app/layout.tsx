/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./(landing_page)/navbar";
import { useState } from "react";
import Sidebar from "./(landing_page)/sidebar";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const TradeGothic = localFont({ src: "./TradeGothic.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html
      lang="en"
      className={TradeGothic.className}
      style={{
        overflow: isOpen ? "hidden" : "scroll",
        height: isOpen ? "100%" : "none",
      }}
    >
      <body>
        <Providers>
          <section>
            <nav>
              <Navbar />
              <Sidebar isOpen={isOpen} toggle={toggle} />
            </nav>
            {children}
          </section>
          <SpeedInsights />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
