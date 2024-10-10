export interface CardProps {
    title?: string;
    address?: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    description?: string;
    image?: string; // optional background image
    buttonText?: string; // optional button
    onClick?: () => void; // optional button click handler
    width?: string; // optional width
    height?: string; // optional height
}

export interface ImageCardProps {
    src: string;
    alt: string;
    height?: string;
    width?: string;
}