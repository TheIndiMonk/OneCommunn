import React, { useState } from 'react';
import { LocationCardProps } from '../../../lib/types/type';
import styles from './LocationCard.module.css';
import { Card } from '../Card';

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
                    <Card
                        city={location.city}
                        address={location.address}
                        phone1={location.phone1}
                        phone2={location.phone2}
                        email={location.email}
                    />
                </div>
            ))}
        </div>
    );
};
