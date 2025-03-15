import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerContent}>
          {/* Left Column - Logos */}
          <div className={styles.logosSection}>
            <a
              href="https://childnutrition.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/Lawson_logo.png"
                alt="Logo of the University of Toronto's Joannah & Brian Lawson Centre for Child Nutrition"
                width="400"
                height="800"
              />
            </a>
            <a
              href="https://cgen.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/CGEN_UT_Signature_P655_RGB.png"
                alt="Logo of the University of Toronto's Centre for Global Engineering"
                width="400"
                height="800"
              />
            </a>
          </div>

          {/* Right Column - Social Links and Address */}
          <div className={styles.rightContent}>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/school/university-of-toronto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://x.com/uoftmedicine" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/uoftmedicine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/UofTMedicine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              {/* <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a> */}
              <a
                href="https://www.youtube.com/channel/UCz0-cY52F-7-tAW35-sgdGg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>

            <div className={styles.addressSection}>
              <h2>Joannah & Brian Lawson Centre for Child Nutrition</h2>
              <h2>University of Toronto</h2>
              <p>Medical Sciences Building, Room 5271</p>
              <p>Toronto, ON M5S 1A8</p>
              <p>child.nutrition@utoronto.ca</p>
            </div>
          </div>
        </div>

        {/* Land Acknowledgement */}
        <div className={styles.landAcknowledgement}>
          <h3>Traditional Land Acknowledgement</h3>
          <p>
            We wish to acknowledge this land on which the University of Toronto
            operates. For thousands of years it has been the traditional land of
            the Huron-Wendat, the Seneca, and the Mississaugas of the Credit.
            Today, this meeting place is still the home to many Indigenous
            people from across Turtle Island and we are grateful to have the
            opportunity to work on this land.
          </p>
        </div>
      </div>
    </footer>
  );
}
