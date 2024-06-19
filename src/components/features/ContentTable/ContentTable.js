import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import CharactersTable from "../CharactersTable/CharactersTable";
import Spinner from "../../common/Spinner/Spinner";
import PropTypes from "prop-types";

const ContentTable = ({ selectedFilm, characters, isPending, error }) => {
  const [charactersPagination, setCharactersPagination] = useState([]);
  const [isPendingPagination, setIsPendingPagination] = useState(false);
  const [errorPagination, setErrorPagination] = useState(null);

  return (
    <>
      {(isPendingPagination || isPending) && <Spinner />}
      {(errorPagination || error) && <p>{error}</p>}
      {characters && !isPending && (
        <section>
          <CharactersTable
            characters={charactersPagination || characters}
            selectedFilm={selectedFilm}
          />
          <Pagination
            setCharacters={setCharactersPagination}
            setIsPending={setIsPendingPagination}
            setError={setErrorPagination}
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
};

export default ContentTable;
