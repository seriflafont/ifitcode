import React from 'react';
import styles from './Equipment.module.css';
import fpoimg from '../assets/equipment/NTL390190664.png';

export default function Equipment() {
    return (
      <div className={styles.equipmentwrapper + " module-wrapper"}>
        <h2>Interested in our exciting iFit-enabled equipment?</h2>
        <ul className={styles.equipment + " flex-ul"}>
          <li className="card">
            <a href="https://mcnally.info">
                <img src={fpoimg} alt="description" />
                <strong>Treadmills</strong>
            </a>
          </li>
          <li className="card">
            <a href="https://mcnally.info">
                <img src={fpoimg} alt="description" />
                <strong>Bikes</strong>
            </a>
          </li>
          <li className="card">
            <a href="https://mcnally.info">
                <img src={fpoimg} alt="description" />
                <strong>Ellipticals</strong>
            </a>
          </li>
          <li className="card">
            <a href="https://mcnally.info">
                <img src={fpoimg} alt="description" />
                <strong>Strength</strong>
            </a>
          </li>
        </ul>
      </div>
    )
}
