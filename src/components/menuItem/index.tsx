import React from 'react';
import styles from './styles/index.module.scss';

export interface IMenuItem {
    link: string;
    text: string;
    notification?: string;
    icon?: string;
}

interface IProps {
    item: IMenuItem;
}

export const MenuItem = (props: IProps) => {
    return (
        <li className={styles.nav_item}>
            <a href={ props.item.link } className={styles.nav_link}>
                { props.item.icon &&
                    <span className={ `${styles.nav_link_icon} fa ${ styles[props.item.icon] }` }></span>
                }
                { props.item.notification &&
                    <span className={styles.nav_link_notification}>{ props.item.notification }</span>
                }
                <span className={styles.nav_link_text}>{ props.item.text }</span>
            </a>
        </li>
    );
}
