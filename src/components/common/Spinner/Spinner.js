import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.scss";

const Spinner = () => (
  <div className={styles.spinner}>
    <FaSpinner className={styles.spinner__icon} alt="" />
    <p className={styles.spinner__text}>Loading</p>
  </div>
);

export default Spinner;
