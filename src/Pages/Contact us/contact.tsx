import React, { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { LocationCard } from '../../components/Card/Location/LocationCard';
import { Form } from '../../components/Form/Form';
import { MapCard } from '../../components/Card/Map/MapCard';
import { LocationCardProps } from '../../lib/types/type';
import { ContactFormProps } from '../../lib/types/Form/ContactFormProps';


const Contact: React.FC = () => {
    const community = import.meta.env.VITE_APP_COMMUNITY  // 673811a2262dbf8ab84ff643

    const [selectedLocation, setSelectedLocation] = useState<LocationCardProps | null>(null); // Store selected location
    const [contactInfo, setContactInfo] = useState<LocationCardProps[]>([]); // State to store contact info

    // Check local storage for cached community data
    useEffect(() => {
        const cachedData = localStorage.getItem('communityData');

        if (cachedData) {
            const community = JSON.parse(cachedData);
            setContactInfo([
                {
                    city: community.data.contactUs.city,
                    address: community.data.contactUs.address,
                    pinCode: community.data.contactUs.pinCode,
                    phone: community.data.contactUs.phone,
                    email: community.data.contactUs.email,
                    mapLink: community.data.contactUs.location,
                },
            ]);
        } else {
            // Fetch community data
            const fetchData = async () => {
                const response = await fetch(`https://api-uat.onecommunn.com/api/v2.0/builders/community/${community}`);
                const data = await response.json();

                if (data?.data) {
                    const community = data.data;
                    console.log(community)
                    const contactInfo: LocationCardProps[] = [
                        {
                            address: community.contactUs.address || '',
                            city: community.contactUs.city || '',
                            pinCode: community.contactUs.pinCode || '',
                            phone: community.contactUs.phone || '',
                            email: community.contactUs.email || '',
                            mapLink: community.location,
                        },
                    ];
                    console.log(contactInfo)
                    setContactInfo(contactInfo);

                    // Save to local storage
                    localStorage.setItem('communityData', JSON.stringify(community));
                }
            };

            fetchData();
        }
    }, [community]);

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
