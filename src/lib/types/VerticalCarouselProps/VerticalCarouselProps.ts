export interface VerticalCarouselProps {
  images: string[];
  interval?: number; // in milliseconds (default 3 seconds)
  title?: string;
  subtitle?: string;
  BtnText?: string;
  BtnLink?: string;
  showControls?: boolean; // Option to show/hide control buttons
  autoSlide?: boolean; // Option to enable/disable auto-slide
}