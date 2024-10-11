
import React from 'react';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  price: string;
  name: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ price, name }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.addToCart}>
          <span>Add To Cart</span>
        </div>
      </div>
      <p className={styles.price}>${price}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default ProductCard;
