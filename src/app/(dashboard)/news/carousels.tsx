/* eslint-disable react/jsx-key */
import styles from "./page.module.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import { Article, RecentArticle } from "./article_widgets";

import data from "./articles.json";
import { DotButton, NextButton, PrevButton } from "../common_elements";

export const RecentNewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      watchDrag: false,
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
    },
    [Autoplay({ delay: 4000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const articles = Object.values(data.recent_articles).map((article) => {
    return [
      <RecentArticle
        title={article.title}
        image={article.image}
        imageAltText={article.image_alt}
        link={article.link}
        date={article.date}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{articles}</div>
      <p
        data-cy="recent_news_title"
        className={[styles.cardTitle, styles.recentNewsTitle].join(" ")}
      >
        Recent News
      </p>
      <PrevButton forSFP={false} isSVG={true} onClick={scrollPrev} />
      <NextButton forSFP={false} isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationAllDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            data-cy={"dot_button_" + index}
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationSelectedDot : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const AllNewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    watchDrag: false,
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const articles = Object.values(data.all_articles).map((article) => {
    return [
      <Article
        title={article.title}
        image={article.image}
        imageAltText={article.image_alt}
        link={article.link}
        date={article.date}
      />,
    ];
  });
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  const carouselSlides = [];
  let articlesPerPage = 0;

  if (width < 1680) {
    articlesPerPage = 4;
  } else {
    articlesPerPage = 6;
  }
  for (let i = 0; i < articles.length; i += articlesPerPage) {
    const articlesInPage = articles.slice(i, i + articlesPerPage);
    carouselSlides.push(
      <div className={styles.carouselSlide}>
        <div className={styles.allNewsArticles}>{articlesInPage}</div>
      </div>
    );
  }

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{carouselSlides}</div>

      <div className={styles.pageAllNumbers}>
        <PrevButton
          forSFP={false}
          isSVG={false}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        />
        {scrollSnaps.map((_, index) => (
          <DotButton
            data-cy={"dot_number_button_" + index}
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.pageNumber,
              index === selectedIndex ? styles.pageSelectedNumber : null,
            ].join(" ")}
          >
            {index + 1}
          </DotButton>
        ))}
        <NextButton
          forSFP={false}
          isSVG={false}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};
