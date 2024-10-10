// Form.tsx
import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { FormInput } from '../../lib/types/type';
import { ContactFormValues } from '../../lib/types/Form/ContactFormValues';

const initialFormValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
};

interface FormProps extends FormInput {
    showMessageBox?: boolean; // New prop for toggling the message box
}

export const Form: React.FC<FormProps> = ({
    title,
    formDescription,
    fields,
    selectedLocation,
    showMessageBox = true, // Default to true
}) => {
    const contactEmail = '';
    const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);

    useEffect(() => {
        if (selectedLocation) {
            setFormValues((prevValues) => ({
                ...prevValues,
                contactEmail: selectedLocation.email, // Set email field based on selected location
            }));
        }
    }, [selectedLocation]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues, contactEmail);
    };

    return (
        <>
            <div className={styles.contactFormHeader}>
                <h1>{title}</h1>
                <p>{formDescription}</p>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formRow}>
                        {fields.map((field) => (
                            <div key={field.name} className={styles.formGroup}>
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={formValues[field.name as keyof ContactFormValues]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>

                    {showMessageBox && ( // Conditionally render the message box
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    )}

                    <div className={styles.formSubmit}>
                        <button className={styles.btn} type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
};
