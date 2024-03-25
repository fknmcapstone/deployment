/* eslint-disable react/react-in-jsx-scope */
import styles from "../page.module.css";
import data from "../publications.json";
import {
  citationsList,
  sortPublications,
  yearBtnList,
} from "../citations_year_buttons";
import ToTopButton from "../../common_elements";

const sources: { [key: string]: { [key: string]: string }[] } =
  sortPublications(data.presentations);

export default function Presentations() {
  return (
    <main className={styles.main}>
      <ToTopButton />
      <p data-cy="presentations_title" className={styles.publicationsTitle}>
        Presentations
      </p>
      <div className={styles.yearBtnList}>{yearBtnList(sources)}</div>
      {citationsList(sources)}
    </main>
  );
}
