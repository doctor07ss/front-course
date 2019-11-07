import React from 'react';
import styles from './styles/index.module.scss';

export const ActionButtons: React.FC = () => {
    return (
        <div className={styles.action_buttons}>
            <a className={`${styles.action_button} ${styles.action_button_login}`} href="/"
               data-href="/account/complex">
                Log in
            </a>
            <a className={`${styles.action_button} ${styles.action_button_join}`} href="/"
               data-href="/account/complex">
                Join for Free
            </a>
        </div>
    );
}
