// Logos.tsx
import React from 'react';
import Styles from './Logos.module.css'
import { LogoProps } from '../../lib/types/type';



//"header-logos flex justify-center items-center space-x-8 mb-12

export const Logos: React.FC<LogoProps> = ({ Logos }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.headerLogos}>
        {Logos.map((logo, index) => (
          <img className={Styles.logoImage} key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};
