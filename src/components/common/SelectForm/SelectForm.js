import PropTypes from "prop-types";

const SelectForm = ({ title, options }) => {
  return (
    <form>
      <label>
        <p>{title}</p>
        <select>
          <option value="" disabled selected hidden>
            select
          </option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

SelectForm.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectForm;
