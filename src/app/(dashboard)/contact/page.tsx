/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaBuilding, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response:", { status: response.status, result });

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Message sent successfully! We will get back to you soon.",
      });

      // Safely reset the form
      if (form instanceof HTMLFormElement) {
        form.reset();
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>
          Have a question or want to participate in our research? We'd love to 
          hear from you.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.formSection}>
            <h2>Send us a message</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  required
                  rows={4}
                ></textarea>
              </div>

              <div className={styles.formFooter}>
                <button
                  type="submit"
                  className={`${styles.submitButton} ${isSubmitting ? styles.sending : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
                {submitStatus.type && (
                  <div
                    className={`${styles.submitStatus} ${styles[submitStatus.type]}`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <p className={styles.disclaimer}>
                  By submitting this form you agree to our{" "}
                  <a href="https://www.utoronto.ca/privacy">terms and conditions</a> and our{" "}
                  <a href="https://www.utoronto.ca/privacy">privacy policy</a>.
                </p>
              </div>
            </form>
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaBuilding />
              </div>
              <div className={styles.infoContent}>
                <h3>Organization</h3>
                <p>Joannah & Brian Lawson Centre for Child Nutrition</p>
                <p>University of Toronto</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h3>Location</h3>
                <p>Medical Sciences Building</p>
                <p>Room 5271</p>
                <p>Toronto, ON M5S 1A8</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h3>Contact</h3>
                <a href="mailto:childnutrition.research@utoronto.ca">
                  childnutrition.research@utoronto.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
