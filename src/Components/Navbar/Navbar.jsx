import { CartWidget } from "../CardWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={styles.containerList}>
        <Link to="/" className={styles.navbarItem}>Todo</Link>
        <Link to="/category/vuelos" className={styles.navbarItem}>Vuelos</Link>
        <Link to="/category/ofertas" className={styles.navbarItem}>Ofertas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};
