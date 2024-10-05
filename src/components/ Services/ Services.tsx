// import React from 'react';
import { Hero } from '../Hero/Hero';


export const Services = () => {
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
        <>
            <Hero title={'Service'} breadcrumb={'Home • Service'} illustrations={illustrations} />
        </>
    );
};
