import React from 'react'
import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.nav + " module-wrapper"}>
            <ul className={styles.topnav + " flex-ul"}>
                <li><a href="https://mcnally.info">Blog</a></li>
                <li><a href="https://mcnally.info">Nourish</a></li>
                <li><a href="https://mcnally.info">Shop</a></li>
            </ul>
            <ul className={styles.bottomnav + " flex-ul"}>
                <li><a href="https://mcnally.info"><img src={logo} alt="logo" /></a></li>
                <li><a href="https://mcnally.info">Exercise</a></li>
                <li><a href="https://mcnally.info">Nutrition</a></li>
                <li><a href="https://mcnally.info">Activity</a></li>
                <li><a href="https://mcnally.info">Sleep</a></li>
                <li><button>Sign up</button></li>
            </ul>
        </header>
    )
}
