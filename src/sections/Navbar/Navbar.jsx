import { Button } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>NICOLE</h1>
    </div>
  );
};

export default Navbar;
