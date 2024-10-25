export interface PriceCard {
  name: string;
  trainingCount?: number;
  duration?:string;
  startDate: string;
  endDate: string;
  schedule?: string;
  status?: string;
  trainer?: string;
  offerValue?:string;
  description?: string;
  totalPlanValue?: number;
  includeTax?: string;
  getStartedLink?: string;
  primary?: boolean; 
  }
  