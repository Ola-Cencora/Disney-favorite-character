import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, onClick, disabled, ariaLabel, variant }) => {
  let className = styles.button;
  if (variant === "flat") className = styles.button___flat;
  if (variant === "round") className = styles.button___round;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
