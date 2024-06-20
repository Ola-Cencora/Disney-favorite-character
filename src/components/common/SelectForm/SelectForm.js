import PropTypes from "prop-types";

const SelectForm = ({ title, options, setOption }) => {
  return (
    <form>
      <label>
        <p>{title}</p>
        <select defaultValue="" onChange={(e) => setOption(e.target.value)}>
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
