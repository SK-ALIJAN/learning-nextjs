// pages/footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <p className={styles.link}>Delicious Bites</p>
          </Link>
        </div>
        <div className={styles.address}>
          <p>123 Main Street</p>
          <p>Cityville, Countryland</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@deliciousbites.com</p>
        </div>
        <div className={styles.social}>
          <p>Follow us:</p>
          <div className={styles.icon}>
            <a href="#" className={styles.socialIcon}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
