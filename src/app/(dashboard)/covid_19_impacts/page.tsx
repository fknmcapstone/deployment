import Image from "next/image";
import styles from "./page.module.css";

export default function COVID19Impacts() {
  return (
    <main className={styles.main}>
      <p
        data-cy="title"
        className={[styles.title, styles.spanBothColumns].join(" ")}
      >
        The Impact of COVID-19 on School Food Programs in Canada
      </p>
      <div
        className={[
          styles.horizontalInfoBox,
          styles.backgroundBlue,
          styles.rightAlign,
          styles.spanBothColumns,
        ].join(" ")}
      >
        <Image
          src="/covid_school.png"
          alt=""
          width={600}
          height={200}
          className={styles.schoolImg}
        ></Image>
        <p
          data-cy="header1"
          className={[
            styles.infoHeader,
            styles.rightAlign,
            styles.spanBothColumns,
          ].join(" ")}
        >
          What is a School Food Program?
        </p>
        <p data-cy="infotext_school1" className={styles.infoText}>
          School food programs provide students with healthy and nutritious
          meals.
        </p>
        <p data-cy="infotext_school2" className={styles.infoText}>
          Children receive both reliable and safe access to food through such
          programs.
        </p>
      </div>
      <div
        className={[
          styles.horizontalInfoBox,
          styles.backgroundGreen,
          styles.leftAlign,
          styles.spanBothColumns,
        ].join(" ")}
      >
        <Image
          src="/covid_canada.png"
          alt=""
          width={600}
          height={200}
          className={styles.mapImg}
        ></Image>
        <Image
          src="/covid_mask.png"
          alt=""
          width={200}
          height={200}
          className={styles.maskImg}
        ></Image>
        <Image
          src="/covid_lunchbox.png"
          alt=""
          width={250}
          height={200}
          className={styles.lunchImg}
        ></Image>
        <p
          data-cy="header2"
          className={[
            styles.infoHeader,
            styles.leftAlign,
            styles.spanBothColumns,
          ].join(" ")}
        >
          Canadian School Food Programs
        </p>
        <p data-cy="infotext_canadian1" className={styles.infoText}>
          Canada does not currently have a national school food program in place
        </p>
        <p data-cy="infotext_canadian2" className={styles.infoText}>
          Current school food programs are organized by municipal, provincial,
          and territorial governments or non-governmental organizations.
        </p>
      </div>
      <div
        className={[
          styles.horizontalInfoBox,
          styles.backgroundRed,
          styles.centerAlign,
          styles.impactCOVID19Box,
          styles.spanBothColumns,
        ].join(" ")}
      >
        <p
          data-cy="header3"
          className={[
            styles.infoHeader,
            styles.centerAlign,
            styles.spanBothColumns,
          ].join(" ")}
        >
          The Impact of COVID-19
        </p>
        <p data-cy="infotext_covid1" className={styles.infoText}>
          Lockdown measures resulted in abrupt school closures and disruptions
          to school food programs, limiting access to food sources many children
          relied on.
        </p>
        <p data-cy="infotext_covid2" className={styles.infoText}>
          Many school food programs have adapted by implementing new
          modifications in order to continue providing students with food, yet
          have also met novel challenges in doing so.
        </p>
      </div>
      <div
        className={[
          styles.verticalInfoBox,
          styles.backgroundGreen,
          styles.rightAlign,
        ].join(" ")}
      >
        <Image
          src="/covid_leaf.png"
          alt=""
          width={45}
          height={45}
          className={styles.leafImg}
        ></Image>
        <p
          data-cy="header4"
          className={[styles.infoHeader, styles.centerAlign].join(" ")}
        >
          Adaptations
        </p>
        <p
          data-cy="infotext_adapt1"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          New collaborations within communities and with organizations to
          support modified school food programs
        </p>
        <p
          data-cy="infotext_adapt2"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Expansions of existing school food programs to reach more students
        </p>
        <p
          data-cy="infotext_adapt3"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Distribution of meal kits and freshly prepared meals
        </p>
        <p
          data-cy="infotext_adapt4"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          COVID-19 guideline adherence when preparing and distributing food
        </p>
        <p
          data-cy="infotext_adapt5"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Increased government funding towards supporting school food programs
        </p>
      </div>
      <div
        className={[
          styles.verticalInfoBox,
          styles.backgroundBlue,
          styles.leftAlign,
        ].join(" ")}
      >
        <p
          data-cy="header5"
          className={[styles.infoHeader, styles.centerAlign].join(" ")}
        >
          Challenges
        </p>
        <p
          data-cy="infotext_chall1"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Accessing food due to price gouging and loss of usual food suppliers
        </p>
        <p
          data-cy="infotext_chall2"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Expenses of modified programs hard to maintain, especially when led by
          small teams of volunteers
        </p>
        <p
          data-cy="infotext_chall3"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Lack of protein food group in meal kits
        </p>
        <p
          data-cy="infotext_chall4"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Unsustainability of certain modifications due to costs and supply
          issues.
        </p>
        <p
          data-cy="infotext_chall5"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Logistical challenges of delivery and distribution
        </p>
        <p
          data-cy="infotext_chall6"
          className={[styles.infoText, styles.verticalInfoWidth].join(" ")}
        >
          Increased barriers to food access experienced by families without
          internet access
        </p>
      </div>
    </main>
  );
}
