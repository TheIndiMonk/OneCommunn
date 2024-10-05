import { SocialLink } from "./SocialLink";
import { FooterSection } from "./FooterSection";
import { FooterLogo } from "./FooterLogo";
import { FooterLink } from "./FooterLink";

export interface FooterProps {
  newsletterPlaceholder?: string;
  logo: FooterLogo;

  contactInfo: {
    address: string;
    phone1: string;
    phone2: string;
    email: string;
  };

  // links: FooterLink[];
  
  sections: FooterSection[];
  socialLinks: SocialLink[];
  legalLinks: FooterLink[];
  copyrightText: string;


  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}
