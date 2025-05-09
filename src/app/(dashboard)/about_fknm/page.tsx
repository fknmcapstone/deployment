/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import styles from "./page.module.css";
import Image from "next/image";

interface Person {
  name: string;
  subtitle: string;
  imageURL: string;
  content: string;
}

interface PeopleData {
  [committee: string]: Person[];
}

function ProfileCard({ name, subtitle, imageURL, content }: Person) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className={styles.cardButton}
        data-cy="profile_card"
      >
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
          <div className={styles.profileSubTitle}>{subtitle}</div>
        </div>
      </Button>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        className={styles.modal}
        placement="top-center"
        scrollBehavior="outside"
        data-cy="profile_modal"
      >
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
            <div className={styles.modalSubheader}>{subtitle}</div>
          </ModalHeader>
          <ModalBody>
            <p className={styles.modalText}>{content}</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function AboutFKNM() {
  const peopleData: PeopleData = require("./people.json");

  return (
    <main className={styles.main}>
      <title>About FKNM</title>
      <div className={styles.heading} data-cy="what_is_header">
        What is Feeding Kids, Nourishing Minds?
      </div>
      <h1 className={styles.textContent} data-cy="what_is_text">
        The Feeding Kids, Nourishing Minds (FKNM) School-Based Nutrition
        Research Initiative is a project funded by a donation from President’s
        Choice Children’s Charity. The FKNM is informing the guidance of a
        framework for a national school food program policy.
      </h1>

      <div className={styles.heading} data-cy="about_the_header">
        About the Feeding Kids, Nourishing Minds Dashboard
      </div>
      <div className={styles.textContent} data-cy="about_the_text">
        The Feeding Kids, Nourishing Minds (FKNM) School-Based Nutrition
        Research Initiative is a project funded by a donation from President’s
        Choice Children’s Charity. Through a landscape policy analysis and
        series of systematic reviews, a comprehensive overview of school meal
        and snack programs in Canada is being organised in an interactive
        dashboard including consideration of equity indicators.
        <br />
        <br />
        Key stakeholders (e.g., schools, schoolboards, teachers, funding
        agencies) have been engaged to identify facilitators, barriers and user
        groups of school food programs and essential dashboard indicators needed
        to inform program design. The impact of the COVID-19 pandemic, including
        changes in policies and programs, highlight the lessons learned and
        opportunities for leveraging these programs and improving resiliency in
        marginalized communities. <br />
        <br />
        The FKNM is informing the guidance of a framework for a national school
        food program policy.
      </div>

      <div className={styles.heading} data-cy="meet_header">
        Meet The Team
      </div>
      <Accordion
        variant="light"
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
                  subtitle={person.subtitle}
                  name={person.name}
                  imageURL={person.imageUrl}
                  content={person.content}
                />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}