import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header___title}>Choose your favorite character!</h1>
    <p>Select up to 5 characters and make your own list</p>
  </header>
);

export default Header;
