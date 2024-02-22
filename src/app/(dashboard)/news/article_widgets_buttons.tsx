import styles from "./page.module.css";
import Link from "next/link";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
  isSVG?: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children?: any;
};

export function RecentArticle({
  title,
  image,
  imageAltText,
  date,
  link,
}: {
  title: string;
  image: string;
  imageAltText: string;
  date: string;
  link: string;
}) {
  return (
    <div className={styles.carouselSlide}>
      <div data-cy="recent_article" className={styles.recentArticleRow}>
        <div data-cy="recent_article_img" className={styles.recentArticleImage}>
          {image ? (
            <img src={image} alt={imageAltText} />
          ) : (
            <svg height="60px" viewBox="0 0 60 60" width="60px" role="img">
              <title>
                No article image present. Newspaper line art is presented
                instead
              </title>
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#000000">
                  <path d="M5,14 C4.448,14 4,14.448 4,15 L4,49 C4,49.552 4.448,50 5,50 C5.552,50 6,49.552 6,49 L6,15 C6,14.448 5.552,14 5,14 L5,14 Z M22,22 C22,23.103 22.897,24 24,24 C25.103,24 26,23.103 26,22 C26,20.897 25.103,20 24,20 C22.897,20 22,20.897 22,22 L22,22 Z M18,31 C18,31.552 18.448,32 19,32 L25,32 C25.265,32 25.52,31.895 25.707,31.707 L32,25.414 L34.293,27.707 C34.684,28.098 35.316,28.098 35.707,27.707 L40,23.414 L44.293,27.707 C44.684,28.098 45.316,28.098 45.707,27.707 C46.098,27.316 46.098,26.684 45.707,26.293 L40.707,21.293 C40.316,20.902 39.684,20.902 39.293,21.293 L35,25.586 L32.707,23.293 C32.316,22.902 31.684,22.902 31.293,23.293 L24.586,30 L20,30 L20,18 L48,18 L48,30 L31,30 C30.448,30 30,30.448 30,31 C30,31.552 30.448,32 31,32 L49,32 C49.552,32 50,31.552 50,31 L50,17 C50,16.448 49.552,16 49,16 L19,16 C18.448,16 18,16.448 18,17 L18,31 Z M47,48 L37,48 C36.448,48 36,48.448 36,49 C36,49.552 36.448,50 37,50 L47,50 C47.552,50 48,49.552 48,49 C48,48.448 47.552,48 47,48 L47,48 Z M19,50 L29,50 C29.552,50 30,49.552 30,49 C30,48.448 29.552,48 29,48 L19,48 C18.448,48 18,48.448 18,49 C18,49.552 18.448,50 19,50 L19,50 Z M47,42 L37,42 C36.448,42 36,42.448 36,43 C36,43.552 36.448,44 37,44 L47,44 C47.552,44 48,43.552 48,43 C48,42.448 47.552,42 47,42 L47,42 Z M19,44 L31,44 C31.552,44 32,43.552 32,43 C32,42.448 31.552,42 31,42 L19,42 C18.448,42 18,42.448 18,43 C18,43.552 18.448,44 19,44 L19,44 Z M50,37 C50,36.448 49.552,36 49,36 L37,36 C36.448,36 36,36.448 36,37 C36,37.552 36.448,38 37,38 L49,38 C49.552,38 50,37.552 50,37 L50,37 Z M49,12 C49.552,12 50,11.552 50,11 C50,10.448 49.552,10 49,10 L45,10 C44.448,10 44,10.448 44,11 C44,11.552 44.448,12 45,12 L49,12 Z M19,12 L35,12 C35.552,12 36,11.552 36,11 C36,10.448 35.552,10 35,10 L19,10 C18.448,10 18,10.448 18,11 C18,11.552 18.448,12 19,12 L19,12 Z M19,38 L29,38 C29.552,38 30,37.552 30,37 C30,36.448 29.552,36 29,36 L19,36 C18.448,36 18,36.448 18,37 C18,37.552 18.448,38 19,38 L19,38 Z M60,5 L60,51 C60,56.551 56.551,60 51,60 L9,60 C3.449,60 0,56.551 0,51 L0,13 C0,10.243 2.243,8 5,8 C5.552,8 6,8.448 6,9 C6,9.552 5.552,10 5,10 C3.346,10 2,11.346 2,13 L2,51 C2,55.449 4.551,58 9,58 L51,58 C55.449,58 58,55.449 58,51 L58,5 C58,3.346 56.654,2 55,2 L13,2 C11.402,2 10,3.402 10,5 L10,53 C10,53.552 9.552,54 9,54 C8.448,54 8,53.552 8,53 L8,5 C8,2.29 10.29,0 13,0 L55,0 C57.757,0 60,2.243 60,5 L60,5 Z" />
                </g>
              </g>
            </svg>
          )}
        </div>

        <div className={styles.recentArticleTitle}>
          <Link href={link} target="_blank">
            <div
              data-cy="recent_article_title"
              className={styles.recentArticleTitleText}
            >
              {title}{" "}
              <svg
                className={styles.recentLinkArrow}
                viewBox="0 -40 600 600"
                aria-hidden="true"
              >
                <path
                  fill="#d32a32"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                  stroke="#d32a32"
                  strokeWidth="60"
                />
              </svg>
            </div>
          </Link>

          <p
            data-cy="recent_article_date"
            className={styles.recentArticleDateText}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Article({
  title,
  image,
  imageAltText,
  date,
  link,
}: {
  title: string;
  image: string;
  imageAltText: string;
  date: string;
  link: string;
}) {
  return (
    <div data-cy="article" className={styles.article}>
      <div data-cy="article_img" className={styles.articleImage}>
        {image ? (
          <img src={image} alt={imageAltText}></img>
        ) : (
          <svg height="60px" viewBox="0 0 60 60" width="60px" role="img">
            <title>
              No article image present. Newspaper line art is presented instead
            </title>
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g fill="#000000">
                <path
                  d="M5,14 C4.448,14 4,14.448 4,15 L4,49 C4,49.552 4.448,50 5,50 C5.552,50 6,49.552 6,49 L6,15 C6,14.448 5.552,14 5,14 L5,14 Z M22,22 C22,23.103 22.897,24 24,24 C25.103,24 26,23.103 26,22 C26,20.897 25.103,20 24,20 C22.897,20 22,20.897 22,22 L22,22 Z M18,31 C18,31.552 18.448,32 19,32 L25,32 C25.265,32 25.52,31.895 25.707,31.707 L32,25.414 L34.293,27.707 C34.684,28.098 35.316,28.098 35.707,27.707 L40,23.414 L44.293,27.707 C44.684,28.098 45.316,28.098 45.707,27.707 C46.098,27.316 46.098,26.684 45.707,26.293 L40.707,21.293 C40.316,20.902 39.684,20.902 39.293,21.293 L35,25.586 L32.707,23.293 C32.316,22.902 31.684,22.902 31.293,23.293 L24.586,30 L20,30 L20,18 L48,18 L48,30 L31,30 C30.448,30 30,30.448 30,31 C30,31.552 30.448,32 31,32 L49,32 C49.552,32 50,31.552 50,31 L50,17 C50,16.448 49.552,16 49,16 L19,16 C18.448,16 18,16.448 18,17 L18,31 Z M47,48 L37,48 C36.448,48 36,48.448 36,49 C36,49.552 36.448,50 37,50 L47,50 C47.552,50 48,49.552 48,49 C48,48.448 47.552,48 47,48 L47,48 Z M19,50 L29,50 C29.552,50 30,49.552 30,49 C30,48.448 29.552,48 29,48 L19,48 C18.448,48 18,48.448 18,49 C18,49.552 18.448,50 19,50 L19,50 Z M47,42 L37,42 C36.448,42 36,42.448 36,43 C36,43.552 36.448,44 37,44 L47,44 C47.552,44 48,43.552 48,43 C48,42.448 47.552,42 47,42 L47,42 Z M19,44 L31,44 C31.552,44 32,43.552 32,43 C32,42.448 31.552,42 31,42 L19,42 C18.448,42 18,42.448 18,43 C18,43.552 18.448,44 19,44 L19,44 Z M50,37 C50,36.448 49.552,36 49,36 L37,36 C36.448,36 36,36.448 36,37 C36,37.552 36.448,38 37,38 L49,38 C49.552,38 50,37.552 50,37 L50,37 Z M49,12 C49.552,12 50,11.552 50,11 C50,10.448 49.552,10 49,10 L45,10 C44.448,10 44,10.448 44,11 C44,11.552 44.448,12 45,12 L49,12 Z M19,12 L35,12 C35.552,12 36,11.552 36,11 C36,10.448 35.552,10 35,10 L19,10 C18.448,10 18,10.448 18,11 C18,11.552 18.448,12 19,12 L19,12 Z M19,38 L29,38 C29.552,38 30,37.552 30,37 C30,36.448 29.552,36 29,36 L19,36 C18.448,36 18,36.448 18,37 C18,37.552 18.448,38 19,38 L19,38 Z M60,5 L60,51 C60,56.551 56.551,60 51,60 L9,60 C3.449,60 0,56.551 0,51 L0,13 C0,10.243 2.243,8 5,8 C5.552,8 6,8.448 6,9 C6,9.552 5.552,10 5,10 C3.346,10 2,11.346 2,13 L2,51 C2,55.449 4.551,58 9,58 L51,58 C55.449,58 58,55.449 58,51 L58,5 C58,3.346 56.654,2 55,2 L13,2 C11.402,2 10,3.402 10,5 L10,53 C10,53.552 9.552,54 9,54 C8.448,54 8,53.552 8,53 L8,5 C8,2.29 10.29,0 13,0 L55,0 C57.757,0 60,2.243 60,5 L60,5 Z"
                  id="newspaper"
                />
              </g>
            </g>
          </svg>
        )}
      </div>

      <div className={styles.articleTitle}>
        <Link href={link} target="_blank">
          <div data-cy="article_title_text" className={styles.articleTitleText}>
            {title}{" "}
            <svg
              className={styles.linkArrow}
              viewBox="0 -50 700 600"
              aria-hidden="true"
            >
              <path
                fill="#d32a32"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                stroke="#d32a32"
                strokeWidth="100"
              />
            </svg>
          </div>
        </Link>

        <p data-cy="article_date_text" className={styles.articleDateText}>
          {date}
        </p>
      </div>
    </div>
  );
}

export const PrevButton: React.FC<PropType> = (props) => {
  const { isSVG, children, ...restProps } = props;

  return (
    <button
      data-cy={isSVG ? "prev_svg_button" : "prev_text_button"}
      className={isSVG ? styles.prevSVGButton : styles.prevTextButton}
      type="button"
      {...restProps}
    >
      {isSVG ? (
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      ) : (
        "Previous"
      )}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { isSVG, children, ...restProps } = props;

  return (
    <button
      data-cy={isSVG ? "next_svg_button" : "next_text_button"}
      className={isSVG ? styles.nextSVGButton : styles.nextTextButton}
      type="button"
      {...restProps}
    >
      {isSVG ? (
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      ) : (
        "Next"
      )}
    </button>
  );
};

export const DotButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return <button type="button" {...restProps}></button>;
};
