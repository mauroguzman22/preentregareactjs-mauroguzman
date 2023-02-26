
import { CartWidget } from "../CardWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <ul className={styles.containerList}>
        <li>Viajes</li>
        <li>Hoteles</li>
        <li>Ofertas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
