// // import styles from './VerticalSlider.module.css';
// import { VerticalSliderProps } from '../../lib/types/SliderTypes/SliderTypes';
// import { useState, useRef, useCallback, useEffect } from 'react';


// export const VerticalSlider: React.FC<VerticalSliderProps> = ({ slides, autoScroll, intervalTime}) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  
//   // Handle screen resize with debounce to avoid unnecessary state updates
//   const handleResize = useCallback(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   // Initialize `isMobile` state and set event listener for screen resizing
//   useEffect(() => {
//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   // Start the automatic sliding of images if `autoSlide` is enabled
//   const startSlideInterval = useCallback(() => {
//     if (autoSlide && slides.length > 1) {
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, slideInterval);
//     }
//   }, [autoSlide, slideInterval, slides.length]);
  
//   // Stop the auto-slide
//   const stopSlideInterval = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   // Manage slide transitions and clear interval on manual navigation
//   useEffect(() => {
//     // Start or stop the interval based on conditions
//     if (isMobile || autoSlide) {
//       startSlideInterval();
//     }
//     return () => stopSlideInterval();
//   }, [isMobile, autoSlide, startSlideInterval]);


//   // Navigation handlers
//   const goToNextSlide = () => {
//     stopSlideInterval(); // Stop interval to prevent conflicts
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     startSlideInterval(); // Restart interval after manual change
//   };
  
//   const goToPrevSlide = () => {
//     stopSlideInterval();
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     startSlideInterval();
//   };

// };


