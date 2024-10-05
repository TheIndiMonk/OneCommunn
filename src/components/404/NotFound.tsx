import React from 'react';
import styles from './NotFound.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ButtonProps {
  onClick: () => void;
}

const BackToHomeButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      aria-label="Go back to the homepage"
    >
      Back To Home
      <i className={`fas fa-arrow-right ${styles.icon}`}></i>
    </button>
  );
};

const NotFound: React.FC = () => {
  const handleBackToHome = () => {
    // Handle the navigation to home
    window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      <img
        src="/logo/404.svg"
        alt="Illustration of a confused character standing on a broken structure"
        className={styles.image}
      />
      <h1 className={styles.title}>Oops! Sorry</h1>
      <p className={styles.text}>We could not find the page</p>
      <BackToHomeButton onClick={handleBackToHome} />
    </div>
  );
};

export default NotFound;
