import React, { useEffect, useState } from 'react';
import styles from './VerticalCarousel.module.css';

interface VerticalCarouselProps {
  images: string[];
  // controls?: boolean;
  interval?: number; // in milliseconds (default to 3 seconds)
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  images,
  // controls,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image change at regular intervals
  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(changeImage); // Cleanup on unmount
  }, [images.length, interval]);

  return (
    <div className={styles.carouselContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselItem} ${
            index === currentIndex ? styles.active : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}


    </div>
  );
};

export default VerticalCarousel;


