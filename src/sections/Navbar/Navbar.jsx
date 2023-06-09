import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDistance = documentHeight - windowHeight;
      const scrollPercentage = Math.min(scrollTop / scrollDistance, 1) * 100;

      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  const scroll = (id) => {
    var element = document.getElementById(id);
    var headerOffset = 96;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={styles.container}
      style={{
        background: scrollPercentage > 0 ? "white" : "none",
        color: scrollPercentage > 0 ? "black" : "white",
        boxShadow: scrollPercentage === 0 && "none",
      }}
    >
      <h1
        className={styles.logo}
        onClick={() => scroll("hero")}
        style={{
          color: scrollPercentage > 0 ? "#048a52" : "white",
        }}
      >
        NICOLE
      </h1>
      <div className={styles.subContainer}>
        <p onClick={() => scroll("categories")}>Categories</p>
        <p onClick={() => scroll("teams")}>Our Team</p>
      </div>
    </div>
  );
};

export default Navbar;
