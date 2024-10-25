import React from "react";
import styles from "./PriceCard.module.css";

import { PriceCardProps } from "../../../lib/types/type";

export const PriceCard: React.FC<PriceCardProps> = ({ pricingData }) => {

  // Helper function to format date into a readable string (e.g., "Oct 07, 2024")
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    // Options for date formatting
    const optionsDate: Intl.DateTimeFormatOptions = {
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    };
    
    // Options for time formatting
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    // Format the date and time
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);

    return `${formattedDate} - ${formattedTime}`;
  };
  
  

  return (
    <div className={styles.cardsContainer}>
      {pricingData.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${item.primary ? styles.primaryCard : ""}`}
        >
          <div className={styles.ItemsContainer}>
            <h2 className={styles.title}>{item.name}</h2>
            <h1 className={styles.trainingCount}>
              {item.trainingCount} {item.duration}
            </h1>
            <div className={styles.schedule}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: "5px" }}>
                <g clipPath="url(#clip0_67_236)">
                  <mask id="mask0_67_236" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                    <path d="M21 0H0V21H21V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_67_236)">
                    <path d="M18.9742 1.25565H17.8079V0.435291C17.8079 0.195323 17.6125 0 17.3726 0C17.1326 0 16.9373 0.195323 16.9373 0.435291V1.25565H14.3702V0.435291C14.3702 0.195323 14.1749 0 13.9349 0C13.6949 0 13.4996 0.195323 13.4996 0.435291V1.25565H10.9325V0.435291C10.9325 0.195323 10.7372 0 10.4972 0C10.2572 0 10.0619 0.195323 10.0619 0.435291V1.25565H7.49482V0.435291C7.49482 0.195323 7.2995 0 7.05953 0C6.81956 0 6.62424 0.195323 6.62424 0.435291V1.25565H4.05714V0.435291C4.06272 0.195323 3.86739 0 3.62743 0C3.38746 0 3.19213 0.195323 3.19213 0.435291V1.25565H2.02578C0.909647 1.25565 0 2.16529 0 3.28142V18.9742C0 20.0904 0.909647 21 2.02578 21H18.9742C20.0904 21 21 20.0904 21 18.9742V3.28142C21 2.16529 20.0904 1.25565 18.9742 1.25565ZM20.1294 18.9742C20.1294 19.6104 19.6104 20.1294 18.9742 20.1294H2.02578C1.38958 20.1294 0.870582 19.6104 0.870582 18.9742V3.28142C0.870582 2.64523 1.38958 2.12623 2.02578 2.12623H3.19213V2.94659C3.19213 3.18655 3.38746 3.38188 3.62743 3.38188C3.86739 3.38188 4.06272 3.18655 4.06272 2.94659V2.12623H6.62982V2.94659C6.62982 3.18655 6.82514 3.38188 7.06511 3.38188C7.30508 3.38188 7.5004 3.18655 7.5004 2.94659V2.12623H10.0675V2.94659C10.0675 3.18655 10.2628 3.38188 10.5028 3.38188C10.7428 3.38188 10.9381 3.18655 10.9381 2.94659V2.12623H13.5052V2.94659C13.5052 3.18655 13.7005 3.38188 13.9405 3.38188C14.1804 3.38188 14.3758 3.18655 14.3758 2.94659V2.12623H16.9429V2.94659C16.9429 3.18655 17.1382 3.38188 17.3782 3.38188C17.6181 3.38188 17.8134 3.18655 17.8134 2.94659V2.12623H18.9742C19.6104 2.12623 20.1294 2.64523 20.1294 3.28142V18.9742Z" fill="#C1A78C" />
                    <path d="M17.1102 5.33508H3.88964C3.64967 5.33508 3.45435 5.53041 3.45435 5.77037C3.45435 6.01034 3.64967 6.20566 3.88964 6.20566H17.1102C17.3502 6.20566 17.5455 6.01034 17.5455 5.77037C17.5455 5.53041 17.3502 5.33508 17.1102 5.33508Z" fill="#C1A78C" />
                    <path d="M13.1201 8.92346H11.8645C11.6245 8.92346 11.4292 9.11878 11.4292 9.35875C11.4292 9.59872 11.6245 9.79404 11.8645 9.79404H13.1201C13.3601 9.79404 13.5554 9.59872 13.5554 9.35875C13.5554 9.11878 13.3601 8.92346 13.1201 8.92346Z" fill="#C1A78C" />
                    <path d="M17.1102 8.92346H15.8545C15.6146 8.92346 15.4192 9.11878 15.4192 9.35875C15.4192 9.59872 15.6146 9.79404 15.8545 9.79404H17.1102C17.3501 9.79404 17.5455 9.59872 17.5455 9.35875C17.5455 9.11878 17.3501 8.92346 17.1102 8.92346Z" fill="#C1A78C" />
                    <path d="M3.88964 9.79404H5.14529C5.38526 9.79404 5.58058 9.59872 5.58058 9.35875C5.58058 9.11878 5.38526 8.92346 5.14529 8.92346H3.88964C3.64967 8.92346 3.45435 9.11878 3.45435 9.35875C3.45435 9.59872 3.64967 9.79404 3.88964 9.79404Z" fill="#C1A78C" />
                    <path d="M9.1299 8.92346H7.87425C7.63428 8.92346 7.43896 9.11878 7.43896 9.35875C7.43896 9.59872 7.63428 9.79404 7.87425 9.79404H9.1299C9.36987 9.79404 9.56519 9.59872 9.56519 9.35875C9.56519 9.11878 9.36987 8.92346 9.1299 8.92346Z" fill="#C1A78C" />
                    <path d="M13.1201 12.5062H11.8645C11.6245 12.5062 11.4292 12.7015 11.4292 12.9415C11.4292 13.1815 11.6245 13.3768 11.8645 13.3768H13.1201C13.3601 13.3768 13.5554 13.1815 13.5554 12.9415C13.5554 12.7015 13.3601 12.5062 13.1201 12.5062Z" fill="#C1A78C" />
                    <path d="M9.1299 12.5062H7.87425C7.63428 12.5062 7.43896 12.7015 7.43896 12.9415C7.43896 13.1815 7.63428 13.3768 7.87425 13.3768H9.1299C9.36987 13.3768 9.56519 13.1815 9.56519 12.9415C9.56519 12.7015 9.36987 12.5062 9.1299 12.5062Z" fill="#C1A78C" />
                    <path d="M17.1102 12.5062H15.8545C15.6146 12.5062 15.4192 12.7015 15.4192 12.9415C15.4192 13.1815 15.6146 13.3768 15.8545 13.3768H17.1102C17.3501 13.3768 17.5455 13.1815 17.5455 12.9415C17.5455 12.7015 17.3501 12.5062 17.1102 12.5062Z" fill="#C1A78C" />
                    <path d="M3.88964 13.3768H5.14529C5.38526 13.3768 5.58058 13.1815 5.58058 12.9415C5.58058 12.7015 5.38526 12.5062 5.14529 12.5062H3.88964C3.64967 12.5062 3.45435 12.7015 3.45435 12.9415C3.45435 13.1815 3.64967 13.3768 3.88964 13.3768Z" fill="#C1A78C" />
                    <path d="M13.1201 16.089H11.8645C11.6245 16.089 11.4292 16.2843 11.4292 16.5243C11.4292 16.7642 11.6245 16.9596 11.8645 16.9596H13.1201C13.3601 16.9596 13.5554 16.7642 13.5554 16.5243C13.5554 16.2843 13.3601 16.089 13.1201 16.089Z" fill="#C1A78C" />
                    <path d="M9.1299 16.089H7.87425C7.63428 16.089 7.43896 16.2843 7.43896 16.5243C7.43896 16.7642 7.63428 16.9596 7.87425 16.9596H9.1299C9.36987 16.9596 9.56519 16.7642 9.56519 16.5243C9.56519 16.2843 9.36987 16.089 9.1299 16.089Z" fill="#C1A78C" />
                    <path d="M5.13971 16.089H3.88964C3.64967 16.089 3.45435 16.2843 3.45435 16.5243C3.45435 16.7642 3.64967 16.9596 3.88964 16.9596H5.14529C5.38526 16.9596 5.58058 16.7642 5.58058 16.5243C5.575 16.2843 5.37968 16.089 5.13971 16.089Z" fill="#C1A78C" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_67_236">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span> 
                {formatDate(item.startDate)} to {formatDate(item.endDate)}
              </span>
            </div>
            <div className={styles.trainer}>
              {item.trainer && ( // Conditional rendering for the SVG
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: "5px" }}>
                    <g clipPath="url(#clip0_67_236)">
                      <mask id="mask0_67_236" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                        <path d="M21 0H0V21H21V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_67_236)">
                        <path d="M18.9742 1.25565H17.8079V0.435291C17.8079 0.195323 17.6125 0 17.3726 0C17.1326 0 16.9373 0.195323 16.9373 0.435291V1.25565H14.3702V0.435291C14.3702 0.195323 14.1749 0 13.9349 0C13.6949 0 13.4996 0.195323 13.4996 0.435291V1.25565H10.9325V0.435291C10.9325 0.195323 10.7372 0 10.4972 0C10.2572 0 10.0619 0.195323 10.0619 0.435291V1.25565H7.49482V0.435291C7.49482 0.195323 7.2995 0 7.05953 0C6.81956 0 6.62424 0.195323 6.62424 0.435291V1.25565H4.05714V0.435291C4.06272 0.195323 3.86739 0 3.62743 0C3.38746 0 3.19213 0.195323 3.19213 0.435291V1.25565H2.02578C0.909647 1.25565 0 2.16529 0 3.28142V18.9742C0 20.0904 0.909647 21 2.02578 21H18.9742C20.0904 21 21 20.0904 21 18.9742V3.28142C21 2.16529 20.0904 1.25565 18.9742 1.25565ZM20.1294 18.9742C20.1294 19.6104 19.6104 20.1294 18.9742 20.1294H2.02578C1.38958 20.1294 0.870582 19.6104 0.870582 18.9742V3.28142C0.870582 2.64523 1.38958 2.12623 2.02578 2.12623H3.19213V2.94659C3.19213 3.18655 3.38746 3.38188 3.62743 3.38188C3.86739 3.38188 4.06272 3.18655 4.06272 2.94659V2.12623H6.62982V2.94659C6.62982 3.18655 6.82514 3.38188 7.06511 3.38188C7.30508 3.38188 7.5004 3.18655 7.5004 2.94659V2.12623H10.0675V2.94659C10.0675 3.18655 10.2628 3.38188 10.5028 3.38188C10.7428 3.38188 10.9381 3.18655 10.9381 2.94659V2.12623H13.5052V2.94659C13.5052 3.18655 13.7005 3.38188 13.9405 3.38188C14.1804 3.38188 14.3758 3.18655 14.3758 2.94659V2.12623H16.9429V2.94659C16.9429 3.18655 17.1382 3.38188 17.3782 3.38188C17.6181 3.38188 17.8134 3.18655 17.8134 2.94659V2.12623H18.9742C19.6104 2.12623 20.1294 2.64523 20.1294 3.28142V18.9742Z" fill="#C1A78C" />
                        <path d="M17.1102 5.33508H3.88964C3.64967 5.33508 3.45435 5.53041 3.45435 5.77037C3.45435 6.01034 3.64967 6.20566 3.88964 6.20566H17.1102C17.3502 6.20566 17.5455 6.01034 17.5455 5.77037C17.5455 5.53041 17.3502 5.33508 17.1102 5.33508Z" fill="#C1A78C" />
                        <path d="M13.1201 8.92346H11.8645C11.6245 8.92346 11.4292 9.11878 11.4292 9.35875C11.4292 9.59872 11.6245 9.79404 11.8645 9.79404H13.1201C13.3601 9.79404 13.5554 9.59872 13.5554 9.35875C13.5554 9.11878 13.3601 8.92346 13.1201 8.92346Z" fill="#C1A78C" />
                        <path d="M17.1102 8.92346H15.8545C15.6146 8.92346 15.4192 9.11878 15.4192 9.35875C15.4192 9.59872 15.6146 9.79404 15.8545 9.79404H17.1102C17.3501 9.79404 17.5455 9.59872 17.5455 9.35875C17.5455 9.11878 17.3501 8.92346 17.1102 8.92346Z" fill="#C1A78C" />
                        <path d="M17.1102 12.5158H3.88964C3.64967 12.5158 3.45435 12.7111 3.45435 12.9511C3.45435 13.1911 3.64967 13.3864 3.88964 13.3864H17.1102C17.3502 13.3864 17.5455 13.1911 17.5455 12.9511C17.5455 12.7111 17.3502 12.5158 17.1102 12.5158Z" fill="#C1A78C" />
                        <path d="M17.1102 16.1064H3.88964C3.64967 16.1064 3.45435 16.3017 3.45435 16.5417C3.45435 16.7816 3.64967 16.9769 3.88964 16.9769H17.1102C17.3502 16.9769 17.5455 16.7816 17.5455 16.5417C17.5455 16.3017 17.3502 16.1064 17.1102 16.1064Z" fill="#C1A78C" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_67_236">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
                <span className={styles.trainerName}>{item.trainer}</span>
            </div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.price}>
            ₹ <h3>{item.totalPlanValue}</h3>
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
