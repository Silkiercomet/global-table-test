import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <aside></aside>
        <h1 className={styles.logo}>Welcome to Global Table!</h1>
        <button className={styles.changeTheme}>C</button>
    </header>
  )
}
export default Navbar
