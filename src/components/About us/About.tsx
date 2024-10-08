import React from 'react';
import { Hero } from '../Hero/Hero';

// import styles from './about.module.css';


const About: React.FC = () => {
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
                title="About Us" 
                breadcrumb="About Us" 
                illustrations={illustrations} 
            />
        </div>
    );
};

export default About;
