"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import styles from "./page.module.css";
import Image from "next/image";


function ProfileCard({ name, imageURL, content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className={styles.cardButton}>
        <div className={styles.cardContent}>
          <Image
            src={imageURL}
            alt={name}
            className={styles.profileImage}
            width={120}
            height={120}
            priority
          />
          <div className={styles.profileName}>{name}</div>
        </div>
      </Button>
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className={styles.modalHeader}>
            <Image
              src={imageURL}
              alt={name}
              className={styles.profileImage}
              width={120}
              height={120}
              priority
            />
            <div className={styles.modalHeader}>{name}</div>
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalText}>{content}</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function AboutFKNM() {
  const peopleData = require("./people.json");

  return (
    <main className={styles.main}>
      <div className={styles.heading} data-cy="what_is_header">
        What is Feeding Kids, Nourishing Minds?
      </div>
      <div className={styles.textContent} data-cy="what_is_text">
        The Feeding Kids, Nourishing Minds (FKNM) School-Based Nutrition
        Research Initiative is a project funded by a donation from President’s
        Choice Children’s Charity. The FKNM is informing the guidance of a
        framework for a national school food program policy.
      </div>

      <div className={styles.heading} data-cy="about_the_header">
        About the Feeding Kids, Nourishing Minds Dashboard
      </div>
      <div className={styles.textContent} data-cy="about_the_text">
        The Feeding Kids, Nourishing Minds (FKNM) School-Based Nutrition
        Research Initiative is a project funded by a donation from President’s
        Choice Children’s Charity. Through a landscape policy analysis and
        series of systematic reviews, a comprehensive overview of school meal
        and snack programs in Canada is being organised in an interactive
        dashboard including consideration of equity indicators. Key stakeholders
        (e.g., schools, schoolboards, teachers, funding agencies) have been
        engaged to identify facilitators, barriers and user groups of school
        food programs and essential dashboard indicators needed to inform
        program design. The impact of the COVID-19 pandemic, including changes
        in policies and programs, highlight the lessons learned and
        opportunities for leveraging these programs and improving resiliency in
        marginalized communities. The FKNM is informing the guidance of a
        framework for a national school food program policy.
      </div>

      <div className={styles.heading} data-cy="meet_header">
        Meet The Team
      </div>
      <Accordion
        variant="splitted"
        selectionMode="multiple"
        className={styles.accordion}
      >
        {Object.entries(peopleData).map(([committee, members], index) => (
          <AccordionItem
            key={index}
            aria-label={committee}
            title={committee}
            className={styles.accordionItem}
            data-cy={committee.toLowerCase().replace(/ /g, "_")}
          >
            <div className={styles.popover}>
              {members.map((person: any, index: number) => (
                <ProfileCard
                  key={index}
                  name={person.name}
                  imageURL={person.imageUrl}
                  content={person.content}
                />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      <hr className={styles.separator} data-cy="separator" />

      <div className={styles.collabContainer} data-cy="collab_container">
        <a
          href="https://childnutrition.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="collab_link_1"
        >
          <Image
            className={styles.logo}
            src="/Lawson_logo.png"
            alt="Logo of the University of Toronto's Joannah & Brian Lawson Centre for Child Nutrition"
            width="300"
            height="300"
          />
        </a>
        <a
          href="https://cgen.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="collab_link_2"
        >
          <Image
            className={styles.logo}
            src="/CGEN_UT_Signature_P655_RGB.png"
            alt="Logo of the University of Toronto's Centre for Global Engineering"
            width="300"
            height="300"
          />
        </a>
        <a
          href="https://www.ece.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="collab_link_3"
        >
          <Image
            className={styles.logo}
            src="/ECE_UT_Signature_P655_RGB.png"
            alt="Logo of the University of Toronto's Electrical & Computer Engineering Department"
            width="300"
            height="300"
          />
        </a>
        <a
          href="https://www.engineering.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="collab_link_4"
        >
          <Image
            className={styles.logo}
            src="/FASE_UT_Signature_RGB_P655_RGB.png"
            alt="Logo of the University of Toronto's Faculty of Applied Science and Engineering"
            width="300"
            height="300"
          />
        </a>
      </div>
    </main>
  );
}
