import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, onClick, disabled }) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
