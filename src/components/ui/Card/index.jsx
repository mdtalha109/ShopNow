import React from 'react';
import styles from './index.module.css'; 

const Card = ({ className, children }) => (
  <div className={`${styles.card} ${className || ''}`}>
    {children}
  </div>
);

const CardHeader = ({ className, ...props }) => (
  <div className={`${styles.card_header} ${className || ''}`} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={`${styles.card_title} ${className || ''}`} {...props} />
);

const CardSubTitle = ({ className, ...props }) => (
  <h3 className={`${styles.card_subtitle} ${className || ''}`} {...props} />
);

const CardDescription = ({ className, ...props }) => (
  <p className={`${styles.card_description} ${className || ''}`} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={`${styles.card_content} ${className || ''}`} {...props} />
);

const CardFooter = ({ className, ...props }) => (
  <div className={`${styles.card_footer}  ${className || ''}`} {...props} />
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card
