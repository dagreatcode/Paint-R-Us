import React from "react";
import CarBanner from "./img/banner3.png";
import { Link } from "react-router-dom";
import logoTag from "./img/Component 1.png";
import styles from './Banner.module.css'; // Assuming you're using CSS modules

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img
        className={styles.bannerImage}
        src={CarBanner}
        alt="Car Banner"
      />
      <div className={styles.overlay}></div>
      <div className={styles.logoContainer}>
        <img src={logoTag} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.buttonContainer}>
        <a
          href="tel:(1)(4708540470)"
          className={`btn btn-primary btn-lg ${styles.button}`}
        >
          Call
        </a>
        <Link
          to="/ContactUs"
          className={`btn btn-primary btn-lg ${styles.button}`}
        >
          Appointment
        </Link>
      </div>
    </div>
  );
}

export default Banner;
