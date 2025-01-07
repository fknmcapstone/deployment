/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";

// Returns a map where the key is the year and the value is a list of manuscripts associated with that year
// Each manuscript has a citation string and a link string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sortPublications(data: any): {
  [key: string]: { [key: string]: string }[];
} {
  const yearToCitationsMap: { [key: string]: { [key: string]: string }[] } = {};

  // Creates a generic type, essentially it is okay for the type to be "any"
  type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];

  (Object.entries(data) as Entries<typeof data>).map(([, year]) => {
    (Object.entries(year) as Entries<typeof year>).map(([y, citationData]) => {
      yearToCitationsMap[y] = citationData;
    });
  });
  return yearToCitationsMap;
}

export function yearBtnList(sources: {
  [key: string]: { [key: string]: string }[];
}) {
  return Object.keys(sources)
    .reverse()
    .map((year) => {
      return (
        <Link key={year} href={"#year_" + year} className={styles.yearBtn}>
          {year}
        </Link>
      );
    });
}

export function citationsList(sources: {
  [key: string]: { [key: string]: string }[];
}) {
  return Object.entries(sources)
    .reverse()
    .map(([year, sourceList]) => {
      const manuscriptList = [];
      manuscriptList.push(
        <div id={"year_" + year} className={styles.yearHeader}>
          {year}
        </div>
      );

      for (const sourceIndex in sourceList) {
        manuscriptList.push(
          <div
            key={year + sourceIndex}
            className={[
              styles.citation,
              Number(sourceIndex) % 2 == 0
                ? styles.citationDarkerBg
                : styles.citationNormalBg,
              Number(sourceIndex) == 0 ? styles.citationRoundedCorners : null,
            ].join(" ")}
          >
            {sourceList[sourceIndex].citation}{" "}
            {sourceList[sourceIndex].link ? (
              <Link
                href={sourceList[sourceIndex].link}
                className={styles.citationLink}
                target="_blank"
              >
                {sourceList[sourceIndex].link}
              </Link>
            ) : null}
          </div>
        );
      }
      return manuscriptList;
    });
}
