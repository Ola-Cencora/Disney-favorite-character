import PropTypes from "prop-types";
import styles from "./SelectedCharactersList.module.scss";
import { FaRegHeart } from "react-icons/fa";

const SelectedCharactersList = ({ selectedCharacters, setModal }) => {
  return (
    <div onClick={() => setModal(false)} className={styles.modal}>
      <ul className={styles.modal__list}>
        {selectedCharacters.map((character, index) => (
          <li key={index}>
            <FaRegHeart />
            &nbsp;
            {character}
          </li>
        ))}
      </ul>
    </div>
  );
};

SelectedCharactersList.propTypes = {
  selectedCharacters: PropTypes.array.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default SelectedCharactersList;
