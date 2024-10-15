import React, { useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { LocationCard } from '../../components/Card/Location/LocationCard';
import { Form } from '../../components/Form/Form';
import { MapCard } from '../../components/Card/Map/MapCard';
import { LocationCardProps } from '../../lib/types/type';
import { ContactFormProps } from '../../lib/types/Form/ContactFormProps'

const Contact: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<LocationCardProps | null>(null); // Store selected location data

    // const illustrations = [
    //     {
    //         src: '/logo/left.svg',
    //         alt: 'Leaf Illustration 1',
    //         className: 'illustration1'
    //     },
    //     {
    //         src: '/logo/right.svg',
    //         alt: 'Leaf Illustration 2',
    //         className: 'illustration2'
    //     },
    // ];

    const contactInfo: LocationCardProps[] = [
        { title: 'London', address: '25F/56, Avinash Street, London', phone1: '014 54789 9654', phone2: '014 5879 36541', email: 'london@examples.com' },
        { title: 'USA', address: '742 Evergreen Terrace, USA', phone1: '014 54789 9654', phone2: '014 5879 36541', email: 'usa@examples.com' },
        { title: 'India', address: 'Mahatma Gandhi Road, India', phone1: '014 54789 9654', phone2: '014 5879 36541', email: 'india@examples.com' },
        { title: 'Australia', address: '123 Sydney Road, Australia', phone1: '014 54789 9654', phone2: '014 5879 36541', email: 'australia@examples.com' }
    ];

    const fields: ContactFormProps['fields'] = [
        { name: 'FirstName', type: 'text', placeholder: 'First Name' },
        { name: 'LastName', type: 'text', placeholder: 'Last Name' },
        { name: 'Email', type: 'email', placeholder: 'Email' },
        { name: 'Phone', type: 'text', placeholder: 'Phone Number' },
    ];

    return (
        <div>
            <Hero
                title="Contact Us"
                // breadcrumb="Home • Contact Us"
                // illustrations={illustrations}
            />
            <LocationCard
                contactInfo={contactInfo}
                onLocationSelect={setSelectedLocation}  // Correctly pass setSelectedLocation
            />

            <Form
                title={"Contact Us"}
                formDescription={"Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur."}
                fields={fields}
                selectedLocation={selectedLocation }  // Pass the actual selectedLocation value and also make it optional
            />

            <MapCard location={selectedLocation} /> {/* Pass selected location to MapCard */}
        </div>
    );
};

export default Contact;
