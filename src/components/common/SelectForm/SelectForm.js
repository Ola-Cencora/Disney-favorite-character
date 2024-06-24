import PropTypes from "prop-types";
import styles from "./SelectForm.module.scss";

const SelectForm = ({ title, options, setOption }) => {
  return (
    <form className={styles.form}>
      <label>
        <p>{title}</p>
        <select
          className={styles.form__select}
          defaultValue=""
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="" disabled hidden>
            select
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

SelectForm.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOption: PropTypes.func.isRequired,
};

export default SelectForm;
