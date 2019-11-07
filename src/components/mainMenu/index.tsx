import React, { useEffect, useState } from 'react';
import {IMenuItem, MenuItem} from "../menuItem";
import styles from './styles/index.module.scss';

export const MainMenu: React.FC = () => {

    const [items, setItems] = useState<IMenuItem[]>([]);

    useEffect(() => {
        setItems([
            {
                link: '/chat_v3/',
                text: 'VideoChat',
                notification: 'live',
                icon: 'fa-comments-o'
            },
            {
                link: '/women',
                text: 'Ladies Gallery',
                icon: 'fa-ladies'
            },
            {
                link: '/videoclips',
                text: 'VideoClips',
                icon: 'fa-video'
            },
            {
                link: '/romance_tour.love',
                text: 'Romance Tours',
                icon: 'fa-map-marker'
            },
            {
                link: '/search',
                text: 'Search',
                icon: 'fa-search'
            }
        ]);
    }, []);

    return (
        <div className={styles.navbar}>
            <ul className={styles.nav_list}>
                { items.map((item: IMenuItem, key: number) => {
                    return <MenuItem item={ item } key={key}/>
                })}
            </ul>
        </div>
    );
}
