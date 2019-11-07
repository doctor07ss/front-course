import React from 'react';
import { Logo } from "../logo/Logo";
import { MainMenu } from "../mainMenu";
import styles from './styles/index.module.scss';
import { ActionButtons } from "../actionButtons";

export const Header: React.FC = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.container }>
                <div className={ styles.pull_left }>
                    <Logo />
                </div>
                <div className={ styles.pull_right }>
                    <MainMenu />
                    <ActionButtons />
                    <div className={styles.dropdown_main_menu}></div>
                </div>
            </div>
        </header>
    );
};
