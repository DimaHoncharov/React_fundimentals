import React from 'react';
import styles from './styles.module.css';

const Btn = ({children, ...props}) => 
  <button
    className={styles.btn}
    {...props}
  >
    {children}
  </button>

export default Btn;