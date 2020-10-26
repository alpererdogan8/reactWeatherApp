import React, { useEffect, useState } from 'react'
import styles from './Location.module.css'
import times from './times.js'
import cx from 'classnames';
function Location(props) {
  
 
   

   


    return (
        <div className={cx(styles.locationText,styles.span)}>
         {props.location[0]},{props.location[1]} 
         <br/>
    <span >{times(new Date())}</span>
        </div>
    )
}

export default Location;

