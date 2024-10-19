import React from "react";
import Before from "./Img/Before.jpg";
import Process from "./Img/Process.jpg";
import After from "./Img/After.jpg";
import After2 from "./Img/After2.jpg";
import After3 from "./Img/After3.jpg";
import styles from './Portfolio.module.css'; // CSS module for styling

function Portfolio() {
  return (
    <>
      <h1 className={styles.title}>Our Transformative Portfolio</h1>
      <div className={styles.iconContainer}>
        <lord-icon
          src="https://cdn.lordicon.com/vixtkkbk.json"
          trigger="hover"
          colors="primary:#001d6e,secondary:#cfe2ff"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h5>Before</h5>
            <img src={Before} alt="Before" className={styles.image} />
            <p>This car was in really bad shape.</p>
            <p className={styles.details}>
              The body was damaged, and the paint was faded. We knew we could bring it back to life.
            </p>
          </div>
          <div className={styles.col}>
            <h5>Process</h5>
            <img src={Process} alt="Process" className={styles.image} />
            <p>So we worked our magic.</p>
            <p className={styles.details}>
              Our team meticulously worked through each stage, ensuring every detail was perfect.
            </p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.colFull}>
            <h5>After</h5>
            <div className={styles.afterImages}>
              <img src={After} alt="After" className={styles.afterImage} />
              <img src={After2} alt="After" className={styles.afterImage} />
              <img src={After3} alt="After" className={styles.afterImage} />
            </div>
            <p>The results were astonishing!</p>
            <p className={styles.details}>
              The car not only looks brand new but also drives better than ever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
