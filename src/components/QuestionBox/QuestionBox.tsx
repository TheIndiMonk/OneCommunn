import React, { useState } from "react";
import styles from "./QuestionBox.module.css";
import { FAQItem } from "../../lib/types/FAQ/FAQItem";
import { QuestionProps } from "../../lib/types/FAQ/QuestionProps";

export const QuestionBox: React.FC<QuestionProps> = ({ questions }) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      {questions.map((item: FAQItem, index: number) => (
        <div key={index} className={styles.questionContainer}>
          <div className={styles.question} onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            <span className={styles.icon}>{open === index ? "-" : "+"}</span>
          </div>
          <div className={open === index ? styles.visible : styles.hidden}>
            <div className={styles.answer}>
              <h2 className={styles.answerTitle}>{item.answerTitle}</h2>
              <p>{item.answerContent1}</p>
              {item.answerContent2 && <p>{item.answerContent2}</p>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
