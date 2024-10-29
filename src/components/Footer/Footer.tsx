import React from 'react';
import styles from './footer.module.css';
import { FooterProps } from '../../lib/types/type';
import { platformIcons } from './platformIcon';

const Footer: React.FC<FooterProps> = ({
    newsletterPlaceholder = 'email here',
    contactInfo,
    sections,
    socialLinks,
    copyrightText,
    legalLinks,
    backgroundColor = '#D0B191',
    textColor = '#27282C',
    accentColor = '#27282C'
}) => {



    return (
        <footer className={styles.footer} style={{ backgroundColor, color: textColor }}>
            <div className={styles.upperSection}>

                <div className={styles.columnWide}>
                    <h2 className={styles.heading}>Newsletter</h2>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder={newsletterPlaceholder}
                            className={styles.input}
                            style={{ borderBottom: `1px solid ${accentColor}` }}
                        />
                        <button
                            type="submit"
                            className={styles.button}
                            style={{ border: `1px solid ${accentColor}` }}
                        >
                            ➤
                        </button>
                    </div>
                    <div className={styles.logoContainer}>
                        <img
                            src="./logo/footer-logo.svg"
                            alt="Mantra Logo"
                            className={styles.logoImage}
                        />
                    </div>
                </div>

                {/* Contact  */}
                <div className={styles.column}>
                    <h2 className={styles.heading}>Contact</h2>
                    <p>{contactInfo.address} </p>
                    <p>{contactInfo.phone1}</p>
                    <p>{contactInfo.phone2}</p>
                    <p>{contactInfo.email}</p>
                    <p className={styles.description}>
                        Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>

                {/* Links */}

                <div className={styles.column}>
                    <h2 className={styles.heading}>Links</h2>
                    <div className={styles.linkSections}>
                        {sections.map((section, index) => (
                            <div key={index} className={styles.section}>
                                <h3>{section.title}</h3>
                                <ul className={styles.linkList}>
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a
                                                href={link.url}
                                                target={link.external ? "_blank" : "_self"}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                className={styles.link}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                    <div className={styles.socialLinks}>
                        {socialLinks.map((link, index) => {
                            const platformKey = link.platform.toLowerCase() as keyof typeof platformIcons; // Cast to keyof the platformIcons

                            const IconComponent = platformIcons[platformKey]; // Get the icon component

                            return (
                                <a key={index} href={link.url} className={styles.link}>
                                    {link.icon ? (
                                        <img
                                            src={link.icon} // Use custom icon URL if provided
                                            alt={`${link.platform} icon`}
                                            className={styles.socialIcon}
                                        />
                                    ) : (
                                        IconComponent && <IconComponent className={styles.socialIcon} /> // Use platform icon as a component
                                    )}
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>{copyrightText}</p>
                <div className={styles.legalLinks}>
                    {legalLinks.map((link, index) => (
                        <a key={index} href={link.url} className={styles.legalLink}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
