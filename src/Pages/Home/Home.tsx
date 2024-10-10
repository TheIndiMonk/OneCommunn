import React from 'react';
import { Hero } from '../../components/Hero/Hero';
// import styles from './home.module.css';



const Home: React.FC = () => {
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
                title="Home" 
                breadcrumb="Home • Home" 
                illustrations={illustrations} 
            />
        </div>
    );
};

export default Home;
