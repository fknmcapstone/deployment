/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "../page.module.css";
import data from "../publications.json";
import {
  citationsList,
  sortPublications,
  yearBtnList,
} from "../citations_year_buttons";
import { ToTopButton } from "../../common_elements";

const sources: { [key: string]: { [key: string]: string }[] } =
  sortPublications(data.manuscripts);

export default function Manuscripts() {
  return (
    <main className={styles.main}>
      <ToTopButton />
      <title>Manuscripts</title>
      <p data-cy="manuscripts_title" className={styles.publicationsTitle}>
        Manuscripts
      </p>
      <div className={styles.yearBtnList}>{yearBtnList(sources)}</div>
      {citationsList(sources)}
    </main>
  );
}
