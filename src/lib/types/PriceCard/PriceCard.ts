export interface PriceCard {
  title: string;
  trainingCount: number;
  schedule: string;
  trainer: string;
  description: string;
  price: number;
  includeTax: string;
  getStartedLink: string; // New field for the link
  primary?: boolean; // Optional primary flag
  }
  