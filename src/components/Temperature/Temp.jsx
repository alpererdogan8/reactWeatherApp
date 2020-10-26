import React from 'react'
import styles from './Temp.module.css';

function Temp(props) {
    return (
        <div className={styles.temp}>
          {props.temp}°C
        </div>
    )
}

export default Temp;

