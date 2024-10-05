// import React from 'react';
import styles from './services.module.css';
import { Service } from '../../lib/types/type';

const services: Service[] = [
    { name: "Yoga Cloths" },
    { name: "Yoga Books" },
    { name: "Yoga Accessories" },
    { name: "Yoga Life Style" },
];

export const Services = () => {
    return (
        <div className={styles.services}>
            <h2>Services</h2>
            <div className="flex justify-center">
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
