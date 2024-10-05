import React from 'react';
import { Hero } from '../Hero/Hero';

// import styles from './team.module.css';


const Team: React.FC = () => {
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
                title="Team" 
                breadcrumb="Home • Team" 
                illustrations={illustrations} 
            />
        </div>
    );
};


export default Team;
