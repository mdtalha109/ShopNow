import React from 'react';

import styles from './index.module.css'


const Button = ({ children, onClick, className, style, ...rest }) => {

    const isFullWidth = rest.isFullWidth || false
    
    return (
        <button
            className={`${styles.btn} ${isFullWidth && styles.full_width_btn}`}
            style={style}
            onClick={onClick}
            {...rest}
            
        >
            {children}
        </button>
    );
};

export default Button