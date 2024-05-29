import { useState } from "react";
import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
} from "../../../utils/changePage";
import { ITEMS_PER_PAGE, ALL_CHARACTERS_URL } from "../../../constans";
import { useFetch } from "../../../hooks/useFetch";
import styles from "./ContentTable.module.scss";
import Pagination from "../Pagination/Pagination";
import Spinner from "../../common/Button/Spinner/Spinner";

const ContentTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, count, isPending, error } = useFetch(ALL_CHARACTERS_URL);

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  const sortedCharacters = characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const indexOfLastCharacter = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCharacter = indexOfLastCharacter - ITEMS_PER_PAGE;
  const currentCharacters = sortedCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const characterInfo = (videoGames, imageUrl, name) => (
    <>
      <td>{videoGames.length > 0 ? videoGames.join(", ") : "no info"}</td>
      <td className={styles.table__image}>
        <img className={styles.table__image___img} src={imageUrl} alt={name} />
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </>
  );

  return (
    <>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {characters && !isPending && (
        <section>
          <table className={styles.table}>
            <tr>
              <th>Name</th>
              <th>Movie</th>
              <th>Video games</th>
              <th>Me!</th>
              <th>Choose me</th>
            </tr>
            {currentCharacters.map(
              ({ _id, name, films, videoGames, imageUrl }) => (
                <>
                  {films.length > 0 ? (
                    films.map((film, index) => (
                      <tr key={`${_id}-${index + 1}`}>
                        <td>{name}</td>
                        <td>{film}</td>
                        {characterInfo(videoGames, imageUrl, name)}
                      </tr>
                    ))
                  ) : (
                    <tr key={_id}>
                      <td>{name}</td>
                      <td>no info</td>
                      {characterInfo(videoGames, imageUrl, name)}
                    </tr>
                  )}
                </>
              )
            )}
          </table>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextPage={() =>
              goToNextPage(setCurrentPage, currentPage, totalPages)
            }
            previousPage={() => goToPreviousPage(setCurrentPage, currentPage)}
            firstPage={() => goToFirstPage(setCurrentPage)}
            lastPage={() => goToLastPage(setCurrentPage, totalPages)}
            goToPage={(pageNumber) => goToPage(setCurrentPage, pageNumber)}
          />
        </section>
      )}
    </>
  );
};

export default ContentTable;
