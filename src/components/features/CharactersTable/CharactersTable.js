import { ITEMS_PER_PAGE } from "../../../constans";
import styles from "./CharactersTable.module.scss";

const CharactersTable = ({ currentPage, characters, selectedFilm }) => {
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
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Movie</th>
          <th>Video games</th>
          <th>Me!</th>
          <th>Choose me</th>
        </tr>
      </thead>
      <tbody>
        {currentCharacters.map(({ _id, name, films, videoGames, imageUrl }) => {
          if (films.length > 0) {
            return films
              .filter((film) => !selectedFilm || film === selectedFilm)
              .map((film, index) => (
                <tr key={`${_id}-${index + 1}`}>
                  <td>{name}</td>
                  <td>{film}</td>
                  {characterInfo(videoGames, imageUrl, name)}
                </tr>
              ));
          } else {
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>no info</td>
                {characterInfo(videoGames, imageUrl, name)}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default CharactersTable;
