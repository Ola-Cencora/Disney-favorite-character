import PropTypes from "prop-types";

const SelectForm = ({ title, options }) => {
  return (
    <form>
      <p>{title}</p>
      <select>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </form>
  );
};

SelectForm.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectForm;
