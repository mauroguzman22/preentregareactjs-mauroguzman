import { CartWidget } from "../CardWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";
import React from 'react';
import {Link} from "react-router-dom";


export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
      <Logo />
      </Link>
      <ul className={styles.containerList}>
        <li>Viajes</li>
        <li>Hoteles</li>
        <li>Ofertas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
