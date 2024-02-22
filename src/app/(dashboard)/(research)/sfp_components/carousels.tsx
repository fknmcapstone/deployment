import styles from "./page.module.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import {
  DotButton,
  NextButton,
  PrevButton,
  SFPComponent,
} from "./sfp_components_widgets_buttons";

import data from "./sfp_components.json";

export const AddedComponentsCarousel = () => {
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

  let components_info = Object.values(data.added_components_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });
  
  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{components_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const DistributionMethodsCarousel = () => {
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

  let distribution_info = Object.values(data.distribution_methods_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{distribution_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const ProcurementStrategiesCarousel = () => {
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

  let procurement_info = Object.values(data.procurement_strategies_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{procurement_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const FoodTypeAndVarietyCarousel = () => {
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

  let food_type_info = Object.values(data.food_type_variety_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{food_type_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const UserFeeModelCarousel = () => {
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

  let models_info = Object.values(data.user_fee_models_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{models_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

export const CulturalAspectsCarousel = () => {
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

  let culture_info = Object.values(data.cultural_aspects_info).map((component) => {
    return [
      <SFPComponent
        quote={component.quote}
      />,
    ];
  });

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>{culture_info}</div>
      <PrevButton isSVG={true} onClick={scrollPrev} />
      <NextButton isSVG={true} onClick={scrollNext} />
      <div className={styles.paginationDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={[
              styles.paginationDot,
              index === selectedIndex ? styles.paginationDotSelected : null,
            ].join(" ")}
          ></DotButton>
        ))}
      </div>
    </div>
  );
};

