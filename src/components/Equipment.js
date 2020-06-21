import React from 'react';
import styles from './Equipment.module.css';

export default function Equipment() {
    return (
      <div className={styles.equipmentwrapper + " module-wrapper"}>
        <h2>Interested in our exciting iFit-enabled equipment?</h2>
        <ul className={styles.equipment + " flex-ul"}>
          <li className="card"><a href="https://mcnally.info">Image + text</a></li>
          <li className="card"><a href="https://mcnally.info">Image + text</a></li>
          <li className="card"><a href="https://mcnally.info">Image + text</a></li>
          <li className="card"><a href="https://mcnally.info">Image + text</a></li>
        </ul>
      </div>
    )
}
