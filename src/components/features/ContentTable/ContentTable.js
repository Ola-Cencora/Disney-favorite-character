import Pagination from "../Pagination/Pagination";
import CharactersTable from "../CharactersTable/CharactersTable";
import Spinner from "../../common/Spinner/Spinner";
import PropTypes from "prop-types";

const ContentTable = ({
  selectedFilm,
  characters,
  isPending,
  error,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {characters && !isPending && (
        <section>
          <CharactersTable
            characters={characters}
            selectedFilm={selectedFilm}
          />
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
};

export default ContentTable;
