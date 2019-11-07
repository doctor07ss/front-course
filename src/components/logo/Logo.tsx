import React from 'react';
import styles from './styles/index.module.scss';

export const Logo = () => {
    return (
        <a href="/" className={styles.logo_link}>
            <img src="images/logo-site.webp" alt="" className={styles.logo_img}/>
        </a>
    );
}
