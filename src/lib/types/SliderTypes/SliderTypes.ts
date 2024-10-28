export interface Slide {
    content: React.ReactNode;  // Content can be JSX elements
  }
  
  export interface VerticalSliderProps {
    slides: Slide[];
    autoScroll?: boolean;
    intervalTime?: number;
  }