import PropTypes from "prop-types";

const SelectCheckbox = ({ name, film, onSelect, selectedCharacters }) => {
  const handleSelect = (e) => {
    const { value, checked } = e.target;
    onSelect(value, checked);
  };

  const characterName = film ? `${name} - ${film}` : name;

  const isChecked = selectedCharacters.includes(characterName);
  const isDisabled = !isChecked && selectedCharacters.length >= 5;

  return (
    <input
      onChange={handleSelect}
      type="checkbox"
      value={characterName}
      checked={isChecked}
      disabled={isDisabled}
    />
  );
};

SelectCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  film: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selectedCharacters: PropTypes.array.isRequired,
};

export default SelectCheckbox;
