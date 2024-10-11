// PriceCard.tsx

import React from "react";
import styles from "./PriceCard.module.css";
import { PriceCardProps } from "../../../lib/types/type";

export const PriceCard: React.FC<PriceCardProps> = ({ pricingData }) => {
  return (
    <div className={styles.cardsContainer}>
      {pricingData.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.ItemsContainer}>
            <h2 className={styles.title}>{item.title}</h2>
            <h1 className={styles.trainingCount}>
              {item.trainingCount} Training
            </h1>
            <div className={styles.schedule}>
              <img
                className={styles.icon}
                src="./logo/calender-icon.svg"
                alt=""
                width={"20px"}
                height={"20px"}
              />

              {item.schedule}
            </div>
            <div className={styles.trainer}>
              <img
                className={styles.icon}
                src="./logo/profile-icon.svg"
                alt=""
                width={"20px"}
                height={"20px"}
              />
              Trainer -{" "}
              <span className={styles.trainerName}>{item.trainer}</span>
            </div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.price}>
              $ <h3>{item.price}</h3>
              <p className={styles.includeTax}>{item.includeTax}</p>
            </div>
            <button className={styles.button}>Get Started</button>
          </div>
        </div>
      ))}
    </div>
  );
};
