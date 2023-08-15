import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.foot}>
            <a href="https://github.com/five-potatoes" className={styles.gitHub} target='_blank' rel='noreferrer'>
                Come to Our GitHub Page
            </a>
            <p className={styles.our}>Made By Oh!Gamja</p>
        </footer>
    )
}

export default Footer;