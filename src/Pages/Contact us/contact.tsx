import React, { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { LocationCard } from '../../components/Card/Location/LocationCard';
import { Form } from '../../components/Form/Form';
import { MapCard } from '../../components/Card/Map/MapCard';
import { LocationCardProps } from '../../lib/types/type';
import { ContactFormProps } from '../../lib/types/Form/ContactFormProps';
import { fetchContactUs, contactUsDummyData } from '../../data/ContactPage/contactData';


const Contact: React.FC = () => {


    const [selectedLocation, setSelectedLocation] = useState<LocationCardProps | null>(null); // Store selected location
    const [contactInfo] = useState<LocationCardProps[]>(contactUsDummyData); // State to store contact info
    useEffect(() => {
        const loadAboutData = async () =>{
            const data = await fetchContactUs();
            console.log("data is not of proper format just loogin it from the time bing: ", data)
        }
        loadAboutData();
    }, [])

    const fields: ContactFormProps['fields'] = [
        { name: 'FirstName', type: 'text', placeholder: 'First Name' },
        { name: 'LastName', type: 'text', placeholder: 'Last Name' },
        { name: 'Email', type: 'email', placeholder: 'Email' },
        { name: 'Phone', type: 'text', placeholder: 'Phone Number' },
    ];

    if (contactInfo.length === 0) return <div>Loading...</div>; // Check if contactInfo is populated

    return (
        <div>
            <Hero title="Contact Us" backgroundColor="#D4CBC2" />

            {contactInfo.length > 0 && (
                <LocationCard
                    contactInfo={contactInfo}
                    onLocationSelect={setSelectedLocation} // Pass selected location to state
                />
            )}

            <Form
                title="Contact Us"
                formDescription="Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur."
                fields={fields}
                selectedLocation={selectedLocation} // Pass selected location to form
            />

            {selectedLocation && (
                <MapCard location={selectedLocation} /> // Send selected location to MapCard
            )}
        </div>
    );
};

export default Contact;
