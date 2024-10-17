/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./HomeHero.module.css";
import { HomeHeroProps } from "../../../lib/types/type";

const HomeHero: React.FC<HomeHeroProps> = ({
  slides,
  autoSlide = false,
  slideInterval = 3000,
  backgroundColor = "#d4cbc2", // Default background color
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isMobile || autoSlide) {
      const interval = setInterval(goToNextSlide, slideInterval);
      return () => clearInterval(interval);
    }
  }, [isMobile, autoSlide, slideInterval]);

  const { title, description, buttonText, buttonLink, videoTitle, videoLink } =
    slides[currentSlide];

  return (
    <div className={styles.heroContainer} style={{ backgroundColor }}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={`${styles.dot} ${styles.lightgreen}`}></div>
          <div className={`${styles.dot} ${styles.green}`}></div>
          <div className={`${styles.dot} ${styles.black}`}>
            <div className={styles.arrow}>
              <button className={styles.shopNowBTN} onClick={() => window.open(buttonLink, "_blank")}>
                →
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{description}</p>
          <h1>{title}</h1>
          <button
            className={styles.btn}
            onClick={() => window.open(buttonLink, "_blank")}
          >
            {buttonText} →
          </button>
        </div>
      </div>

      <div className={`${styles.circle} ${styles.lightgreen}`}></div>

      <div className={styles.right}>
        <div className={styles.art}>
          <div className={styles.leaf}>
            <img src="./logo/leaf.svg" alt="leaf" />
          </div>
          <div className={`${styles.oval} ${styles.lightgreen}`}></div>
          <div className={styles.sun}>
            <button className={styles.arrowBtn} onClick={() => window.open(videoLink, "_blank")}> {videoTitle} → </button>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className={styles.pagination}>
          <div className={styles.lineContainer}>
            <div className={styles.line}>
              <button className={styles.arrowBtn} onClick={goToPrevSlide}>
                ⌃
              </button>
              <div className={styles.pager}>
                {((currentSlide + 1) % slides.length) + 1 < 10
                  ? `0${((currentSlide + 1) % slides.length) + 1}`
                  : ((currentSlide + 1) % slides.length) + 1}
              </div>
              <button className={styles.arrowBtn} onClick={goToNextSlide}>
                ⌄
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHero;