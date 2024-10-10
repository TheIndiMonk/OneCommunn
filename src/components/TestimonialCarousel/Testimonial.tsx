import React, { useState, useRef } from 'react';
import styles from './TestimonialSection.module.css';
import { TestimonialProps } from '../../lib/types/type';

export const TestimonialSection: React.FC<TestimonialProps> = ({ Testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Testimonials.length) % Testimonials.length
    );
  };

  // Handle swipe gesture for navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;

      if (deltaX > 50) {
        // Swiped left
        nextTestimonial();
      } else if (deltaX < -50) {
        // Swiped right
        prevTestimonial();
      }
    }
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={styles.testimonialSection}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.testimonialWrapper}>
        <button onClick={prevTestimonial} className={styles.navButton}>
          <img src="./logo/right-arrow.svg" alt="Previous" />
        </button>
        <div className={styles.circleContainer}>
          <div className={styles.circle}>
            <img
              src={Testimonials[currentIndex].src}
              alt={Testimonials[currentIndex].alt}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <i className={`fas fa-quote-left ${styles.quoteIcon}`}></i>
          <i className={`fas fa-quote-right ${styles.quoteIcon}`}></i>
          <p className={styles.textWrapper}>{`"${Testimonials[currentIndex].text}"`}</p>
          <div className={styles.authorRole}>
            {`${Testimonials[currentIndex].author} - ${Testimonials[currentIndex].role}`}
          </div>
          <div className={styles.dotContainer}>
            {Testimonials.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
        <button onClick={nextTestimonial} className={styles.navButton}>
          <img src="./logo/left-arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};
