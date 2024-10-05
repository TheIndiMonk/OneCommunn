import React from 'react';
import { Hero } from '../Hero/Hero';

// import styles from './contact.module.css';


const Contact: React.FC = () => {
    const illustrations = [
        {
            src: '/logo/left.svg',
            alt: 'Leaf Illustration 1',
            className: 'illustration1'
        },
        {
            src: '/logo/right.svg',
            alt: 'Leaf Illustration 2',
            className: 'illustration2'

        },
    ];
    return (
        <div>
            <Hero
                title="Contact Us" 
                breadcrumb="Home • Contact Us" 
                illustrations={illustrations} 
            />
        </div>
    );
};



export default Contact;
