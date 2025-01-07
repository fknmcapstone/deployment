"use client";

import React, { useEffect, useState } from "react";
import styles from "./common_elements.module.css";
import { EmblaOptionsType } from "embla-carousel";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={styles.toTopButton}
      data-cy="return_to_top_button"
      style={{
        display: isVisible ? "block" : "none",
      }}
      onClick={scrollToTop}
    >
      <svg viewBox="-8 -8 40 40" fill="none">
        <path
          d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
          fill="#626262"
          stroke="#626262"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
  forSFP?: boolean;
  isSVG?: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
};

export const PrevButton: React.FC<PropType> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { forSFP, isSVG, ...restProps } = props;

  return (
    <button
      aria-label="previous button"
      data-cy={isSVG ? "prev_svg_button" : "prev_text_button"}
      className={
        isSVG
          ? forSFP
            ? styles.prevSVGButtonSFP
            : styles.prevSVGButton
          : styles.prevTextButton
      }
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
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { forSFP, isSVG, ...restProps } = props;

  return (
    <button
      aria-label="next button"
      data-cy={isSVG ? "next_svg_button" : "next_text_button"}
      className={
        isSVG
          ? forSFP
            ? styles.nextSVGButtonSFP
            : styles.nextSVGButton
          : styles.nextTextButton
      }
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

  return (
    <button
      aria-label="pagination dot button"
      type="button"
      {...restProps}
    ></button>
  );
};

export { ToTopButton };
