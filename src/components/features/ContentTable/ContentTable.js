import { useState } from "react";
import { useEffect } from "react";
import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
} from "../../../utils/changePage";
import styles from "./ContentTable.module.scss";
import Pagination from "../Pagination/Pagination";

const ContentTable = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(count / itemsPerPage);

  const sortedCharacters = characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.data);
        setCount(data.info.count);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  const indexOfLastCharacter = currentPage * itemsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
  const currentCharacters = sortedCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  return (
    <section>
      <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Movie</th>
          <th>Video game</th>
          <th>Me!</th>
          <th>Choose me</th>
        </tr>
        {currentCharacters.map(({ _id, name, films, videoGames, imageUrl }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{films}</td>
            <td>{videoGames}</td>
            <td>
              <img src={imageUrl} alt={name} />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        ))}
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextPage={() => goToNextPage(setCurrentPage, currentPage, totalPages)}
        previousPage={() => goToPreviousPage(setCurrentPage, currentPage)}
        firstPage={() => goToFirstPage(setCurrentPage)}
        lastPage={() => goToLastPage(setCurrentPage, totalPages)}
        goToPage={(pageNumber) => goToPage(setCurrentPage, pageNumber)}
      />
    </section>
  );
};

export default ContentTable;
