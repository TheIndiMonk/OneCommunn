import { getApiData } from "../../Api/getApiResponse";
import { LocationCardProps } from "../../lib/types/type";


export const contactUsDummyData: LocationCardProps[] = [
    {
        email: "neela.57ranjith@gmail.com",
        phone: "7904125027",
        city: "Berikai",
        address: "394, Chinthaladoddy, Berikai, Hosur",
        pinCode: '635105',
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9077194996903!2d77.5519394!3d13.168218099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae215fe59b6e2d%3A0x692aa13ebce4457b!2sSRI%20SAI%20LAYOUT!5e0!3m2!1sen!2sin!4v1730188820985!5m2!1sen!2sin"
    }
]

export const fetchContactUs = async () => {
    const feedData = await getApiData()
    return feedData.contactUs;
}