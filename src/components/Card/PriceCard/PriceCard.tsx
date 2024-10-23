import React from "react";
import styles from "./PriceCard.module.css";
import { PriceCardProps } from "../../../lib/types/type";

export const PriceCard: React.FC<PriceCardProps> = ({ pricingData }) => {
  return (
    <div className={styles.cardsContainer}>
      {pricingData.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${item.primary ? styles.primaryCard : ""}`}
        >
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
                width="20px"
                height="20px"
              />
              {item.schedule}
            </div>
            <div className={styles.trainer}>
              <img
                className={styles.icon}
                src="./logo/profile-icon.svg"
                alt=""
                width="20px"
                height="20px"
              />
              Trainer -{" "}
              <span className={styles.trainerName}>{item.trainer}</span>
            </div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.price}>
              $ <h3>{item.price}</h3>
              <p className={styles.includeTax}>{item.includeTax}</p>
            </div>
            <a className={styles.button} href={item.getStartedLink}>
              Get Started
              <svg
                width="25"
                height="9"
                viewBox="0 0 25 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: "5px" }}
              >
                <path
                  d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z"
                  fill="#27282C"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
