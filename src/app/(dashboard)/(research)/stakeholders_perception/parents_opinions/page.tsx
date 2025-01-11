/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "../../intake_visuals/page.module.css";
import { ToTopButton } from "../../../common_elements";
import { motion } from "framer-motion";

const pageTitle = "Parents' Opinions";
const description = "The following charts and graphs explore the opinions of parents on various school food program related topics, including cultural and less processed foods, portion sizes, beverage inclusion, meal affordability, customization options, food accommodations, sustainability, nutrition education, and program evaluation. These insights help guide efforts to improve SFPs to better meet children's dietary needs and preferences.";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export default function ParentsOpinions() {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToTopButton />
      <title>Parents&apos; Opinions on School Food Programs</title>

      <div className={styles.pageContainer}>
        <section className={styles.content}>
          <motion.div {...fadeIn} transition={{ delay: 0.3, duration: 0.7 }}>
            <h1 className={styles.title}>Parents&apos; Opinions on School Food Programs</h1>
            <p className={styles.subtext}>{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <iframe 
              src='https://flo.uri.sh/visualisation/21120384/embed' 
              title='Interactive or visual content' 
              className='flourish-embed-iframe' 
              frameBorder='0' 
              scrolling='no' 
              style={{width: '100%', height: '600px'}} 
              sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            />
            <div style={{width: '100%', marginTop: '4px', textAlign: 'right'}}>
              <a 
                className='flourish-credit' 
                href='https://public.flourish.studio/visualisation/21120384/?utm_source=embed&utm_campaign=visualisation/21120384' 
                target='_top' 
                style={{textDecoration: 'none'}}
              >
                <img 
                  alt='Made with Flourish' 
                  src='https://public.flourish.studio/resources/made_with_flourish.svg' 
                  style={{width: '105px', height: '16px', border: 'none', margin: 0}} 
                />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.main>
  );
}
