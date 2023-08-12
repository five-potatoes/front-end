import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.foot}>
            <a href="https://github.com/five-potatoes" className={styles.gitHub} target='_blank' rel='noreferrer'>
                Come to Our GitHub Page
            </a>
        </footer>
    )
}

export default Footer;