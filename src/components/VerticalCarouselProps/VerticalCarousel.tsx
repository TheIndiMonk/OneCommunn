import React, { useEffect, useState } from 'react';
import styles from './VerticalCarousel.module.css';
import { VerticalCarouselProps } from '../../lib/types/type';


const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  images,
  interval = 3000,
  title,
  subtitle,
  BtnText,
  BtnLink,
  showControls = true,
  autoSlide = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle automatic image changes
  useEffect(() => {
    if (!autoSlide && !isMobile) return;

    const changeImage = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(changeImage); // Cleanup on unmount
  }, [images.length, interval, autoSlide, isMobile]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = () => {
    if (BtnLink) window.open(BtnLink, '_blank');
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.textContainer}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {BtnText && (
          <button onClick={handleButtonClick} className={styles.actionButton}>
            {BtnText}
          </button>
        )}
      </div>

      <div className={styles.carouselItems}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {showControls && !isMobile && (
        <div className={styles.pagination}>
          <div className={styles.lineContainer}>
            <div className={styles.line}>
              <button
                className={styles.NavigationArrowBtn}
                onClick={goToPrevSlide}
              >
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.48523L9.48528 0.999948L17.9706 9.48523"
                    stroke="#27282C"
                  />
                </svg>
              </button>

              <div className={styles.pager}>
                {String(
                  ((currentIndex - 1 + images.length) % images.length) + 1
                ).padStart(2, '0')}
              </div>

              <svg
                width="1"
                height="73"
                viewBox="0 0 1 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="-0.000122048"
                  x2="0.499997"
                  y2="72.9999"
                  stroke="#27282C"
                />
              </svg>

              <div className={styles.pager}>
                {String(((currentIndex + 1) % images.length) + 1).padStart(
                  2,
                  '0'
                )}
              </div>

              <button
                className={styles.NavigationArrowBtn}
                onClick={goToNextSlide}
              >
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9707 0.485229L9.48542 8.97051L1.00014 0.485229"
                    stroke="#27282C"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalCarousel;
