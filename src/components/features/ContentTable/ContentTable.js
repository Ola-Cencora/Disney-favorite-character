import Pagination from "../Pagination/Pagination";
import CharactersTable from "../CharactersTable/CharactersTable";
import Spinner from "../../common/Spinner/Spinner";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";
import styles from "./ContentTable.module.scss";

const ContentTable = ({
  selectedFilm,
  characters,
  isPending,
  error,
  currentPage,
  setCurrentPage,
  totalPages,
  selectedCharacters,
  setSelectedCharacters,
  handleCharactersSelect,
}) => {
  return (
    <>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {characters && !isPending && (
        <section className={styles.main}>
          <CharactersTable
            characters={characters}
            selectedFilm={selectedFilm}
            selectedCharacters={selectedCharacters}
            setSelectedCharacters={setSelectedCharacters}
          />
          <div className={styles.main__button}>
            <Button
              onClick={handleCharactersSelect}
              content="create your list"
              disabled={selectedCharacters.length === 0}
              variant="flat"
            />
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </section>
      )}
    </>
  );
};

ContentTable.propTypes = {
  selectedFilm: PropTypes.string,
  characters: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
  selectedCharacters: PropTypes.array,
  setSelectedCharacters: PropTypes.func.isRequired,
  handleCharactersSelect: PropTypes.func.isRequired,
};

export default ContentTable;
