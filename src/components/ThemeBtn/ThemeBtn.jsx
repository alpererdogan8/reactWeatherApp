import React from 'react'
import styles from './ThemeBtn.module.css'
function ThemeBtn(props) {
    return (
        <div className={styles.themeBtn}>
         <button className="btn btn-outline-light" >Dark</button>
        </div>
    )
}

export default ThemeBtn;

