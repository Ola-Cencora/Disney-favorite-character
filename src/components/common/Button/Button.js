import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, onClick, disabled, ariaLabel }) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
};

export default Button;
