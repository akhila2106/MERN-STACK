import React from 'react'
// import Header from '../styles/Header.css'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>React Class</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header