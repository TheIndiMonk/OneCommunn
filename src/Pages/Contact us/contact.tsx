import React, { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { LocationCard } from '../../components/Card/Location/LocationCard';
import { Form } from '../../components/Form/Form';
import { MapCard } from '../../components/Card/Map/MapCard';
import { LocationCardProps } from '../../lib/types/type';
import { ContactFormProps } from '../../lib/types/Form/ContactFormProps';


const Contact: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<LocationCardProps | null>(null); // Store selected location
    const [contactInfo, setContactInfo] = useState<LocationCardProps[]>([]); // State to store contact info

    // Check local storage for cached community data
    useEffect(() => {
        const cachedData = localStorage.getItem('communityData');
        
        if (cachedData) {
            const community = JSON.parse(cachedData);
            setContactInfo([
                {
                    city: community.city,
                    address: community.fullAddress,
                    phone1: community.mobileNumber,
                    phone2: community.phoneNumber,
                    email: community.email,
                    mapLink: community.location,
                },
            ]);
        } else {
            // Fetch community data
            const fetchData = async () => {
                const response = await fetch('https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home');
                const data = await response.json();

                if (data?.community) {
                    const community = data.community;
                    const contactInfo: LocationCardProps[] = [
                        {
                            city: community.city,
                            address: community.fullAddress,
                            phone1: community.mobileNumber,
                            phone2: community.phoneNumber,
                            email: community.email,
                            mapLink: community.location,
                        },
                    ];
                    setContactInfo(contactInfo);

                    // Save to local storage
                    localStorage.setItem('communityData', JSON.stringify(community));
                }
            };

            fetchData();
        }
    }, []);

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
