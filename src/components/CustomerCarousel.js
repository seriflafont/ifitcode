import React from 'react'
import styles from './CustomerCarousel.module.css';

export default function CustomerCarousel() {
    return (
        <div className={styles.carouselwrapper +" module-wrapper"}>
            <ul className={styles.carousel + " flex-ul"}>
            <li className="card">image + text</li>
            <li className="card">image + text</li>
            <li className="card">image + text</li>
            <li className="card">image + text</li>
            <li className="card">image + text</li>
            </ul>
        </div>
    )
}
