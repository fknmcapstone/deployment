import styles from "../page.module.css";
import data from "../publications.json";
import {
  citationsList,
  sortPublications,
  yearBtnList,
} from "../citations_year_buttons";

let sources: { [key: string]: { [key: string]: string }[] } = sortPublications(
  data.manuscripts
);

export default function Manuscripts() {
  return (
    <main className={styles.main}>
      <p data-cy="manuscripts_title" className={styles.publicationsTitle}>
        Manuscripts
      </p>
      <div className={styles.yearBtnList}>{yearBtnList(sources)}</div>
      {citationsList(sources)}
    </main>
  );
}
