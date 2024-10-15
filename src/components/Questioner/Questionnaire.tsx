import React, { useState } from 'react';
import styles from './Questionnaire.module.css';
import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { QuestionnaireProps } from '../../lib/types/type';

export const Questionnaire: React.FC<QuestionnaireProps> = ({ title, description, question }) => {
    const [open, setOpen] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div>
            <div className={styles.FaqContainer}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    {question.map((item: FAQItem, index: number) => (
                        <div key={index} className={styles.questionContainer}>
                            <div
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                <span className={styles.icon}>{open === index ? '-' : '+'}</span>
                            </div>
                            <div className={open === index ? styles.visible : styles.hidden}>
                                <div className={styles.answer}>
                                    <h2 className={styles.answerTitle}>
                                        {item.answerTitle}
                                    </h2>
                                    <p>{item.answerContent1}</p>
                                    {item.answerContent2 && <p>{item.answerContent2}</p>} {/* Conditionally render answerContent2 */}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
