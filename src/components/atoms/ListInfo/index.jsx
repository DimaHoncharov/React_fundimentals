import React from 'react';
import styles from './styles.module.css';

const ListInfo = ({...props}) => 
  <div className={styles.listInfoWrapper}>
    <p className={styles.listInfoText}>{props.number}.{props.title}</p>
    <p className={styles.listInfoText}>{props.desc}</p>
  </div>
export default ListInfo;