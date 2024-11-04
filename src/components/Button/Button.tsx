// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
    return (
        <button className={styles.button} onClick={onClick} style={style}>
            {label}
        </button>
    );
};
