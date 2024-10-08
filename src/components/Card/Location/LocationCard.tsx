import React, { useState } from 'react';
import { LocationCardProps } from '../../../lib/types/type';
import styles from './LocationCard.module.css';

interface LocationCardPropsArray {
    contactInfo: LocationCardProps[];
    onLocationSelect: (location: LocationCardProps) => void; // Callback to parent
}

export const LocationCard: React.FC<LocationCardPropsArray> = ({ contactInfo, onLocationSelect }) => {
    const [selectedLocationIndex, setSelectedLocationIndex] = useState<number | null>(null);

    const handleLocationClick = (location: LocationCardProps, index: number) => {
        setSelectedLocationIndex(index);
        onLocationSelect(location); // Send selected location back to parent
    };

    return (
        <div className={styles.locationContainer}>
            {contactInfo.map((location, index) => (
                <div
                    key={index}
                    className={`${styles.location} ${selectedLocationIndex === index ? styles.selected : ''}`}
                    onClick={() => handleLocationClick(location, index)}
                    style={{
                        backgroundImage: selectedLocationIndex === index ? 'url(./logo/Selector.svg)' : 'none',
                    }}
                >
                    <div className={styles.textContainer}>
                        <h2>{location.title}</h2>
                        <p>{location.address}</p>
                        <p>{location.phone1}</p>
                        <p>{location.phone2}</p>
                        <p>{location.email}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};


