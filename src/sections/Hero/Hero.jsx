import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.mainText}>
          Turning the world’s waste into resource
        </h1>
        <div className={styles.subText}>
          Bringing ground-breaking AI robotics to global waste management.
        </div>
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
