import React from 'react';
import styles from './Hero.module.css';
import fpoimg from '../assets/cropped-hero-image.png';

const bgstyle = {
    backgroundImage:'url(' + fpoimg + ')'
}

export default function Hero() {
    return (
        <div className={styles.herowrapper}>
            <div style={bgstyle} className={styles.heroimage}><span className="sr-only">If there should be screenreader info for this image, it would go here.</span></div>
            <div className={styles.herocontent}>
            <h1>The right personal training, right in your own home</h1>
            <button>Join iFit Coach</button>
            </div>
        </div>
    )
}
