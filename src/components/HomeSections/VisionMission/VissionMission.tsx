// VisionMission/VisionMission.tsx
import React from "react";
import styles from "./VisionMission.module.css";
import { VisionMissionProps } from "../../../lib/types/type";


const VisionMission: React.FC<VisionMissionProps> = ({
  title,
  vision,
  mission,
  instructorName,
  yogaType,
  schedule,
  trainer,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Section - Vision and Mission */}
        <div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Vision</h2>
            <p className={styles.text}>{vision}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mission</h2>
            <p className={styles.text}>{mission}</p>
            <button className={styles.button}>
              <span className={styles.buttonText}>Book Appointment</span>
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* Right Section - Instructor Info */}
        <div className={styles.instructorSection}>
          <p className={styles.instructorLabel}>Instructor</p>
          <h2 className={styles.instructorName}>{yogaType}</h2>
          <p className={styles.text}>
            Duis aute irure dolor in reprehend voluptate velit esse cillum.
          </p>
          <div className={styles.iconText}>
            <i className="far fa-calendar-alt" />
            <span>{schedule}</span>
          </div>
          <div className={styles.iconText}>
            <i className="far fa-user" />
            <span>
              Trainer - <span style={{ color: "#C1A78C" }}>{instructorName}</span>
            </span>
          </div>
          <div className={styles.circle}>
            <svg className={styles.svgIcon} viewBox="0 0 100 100">
              <path
                d="M10,50 Q50,90 90,50 Q50,10 10,50"
                stroke="black"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
