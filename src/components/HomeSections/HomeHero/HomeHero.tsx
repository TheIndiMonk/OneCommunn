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

  const { title, description, buttonText, buttonLink, videoTitle } =
    slides[currentSlide];

  return (
    <div className={styles.heroContainer} style={{ backgroundColor }}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={`${styles.dot} ${styles.lightgreen}`}></div>
          <div className={`${styles.dot} ${styles.green}`}></div>
          <div className={`${styles.dot} ${styles.black}`}>
            <div className={styles.arrow}>
              <button className={styles.shopNowBTN} onClick={() => window.open(buttonLink, "_blank")}> → </button>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className={styles.btncircleText}>
                <path
                  id="innerCirclePath"
                  d="M48,48 m-45,0 a30,30 0 1,1 90,0 a46,46 0 1,1 -90,0"
                  fill="none"
                />
                <text>
                  <textPath href="#innerCirclePath" startOffset="73%" text-anchor="middle">
                    VIEW ALL PROPERTIES
                  </textPath>
                </text>
              </svg>
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
            <svg className={styles.circleText} viewBox="0 0 300 300" fill="#000">
              <path
                id="circlePath"
                d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                fill="none"
              />
              <text>
                <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
                  {videoTitle}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className={styles.pagination}>
          <div className={styles.lineContainer}>
            <div className={styles.line}>
              <button className={styles.arrowBtn} onClick={goToPrevSlide}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9.48523L9.48528 0.999948L17.9706 9.48523" stroke="#27282C" />
                </svg>
              </button>
              {/* Previous Slide Number */}
              <div className={styles.pager}>
                {((currentSlide - 1 + slides.length) % slides.length) + 1 < 10 ? `0${((currentSlide - 1 + slides.length) % slides.length) + 1}` : ((currentSlide - 1 + slides.length) % slides.length) + 1}
              </div>
              <svg width="1" height="73" viewBox="0 0 1 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="-0.000122048" x2="0.499997" y2="72.9999" stroke="#27282C" />
              </svg>
              {/* Next Slide Number */}
              <div className={styles.pager}>
                {((currentSlide + 1) % slides.length) + 1 < 10
                  ? `0${((currentSlide + 1) % slides.length) + 1}`
                  : ((currentSlide + 1) % slides.length) + 1}
              </div>
              <button className={styles.arrowBtn} onClick={goToNextSlide}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9707 0.485229L9.48542 8.97051L1.00014 0.485229" stroke="#27282C" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHero;