/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./page.module.css";
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

export function SFPComponent({ quote }: { quote: string }) {
  return (
    <div className={styles.carouselSlide}>
      <div className={styles.componentRow}>
        <p className={styles.quotationsText}>{quote}</p>
      </div>
    </div>
  );
}

export const PrevButton: React.FC<PropType> = (props) => {
  const { isSVG, children, ...restProps } = props;

  return (
    <button
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