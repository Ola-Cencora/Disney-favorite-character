import styles from "./CharactersTable.module.scss";
import SelectCheckbox from "../../common/SelectCheckbox/SelectCheckbox";
import DropdownList from "../../features/DropdownList/DropdownList";
import PropTypes from "prop-types";

const CharactersTable = ({
  characters,
  selectedFilm,
  selectedCharacters,
  setSelectedCharacters,
}) => {
  const handleSelect = (name, isChecked) => {
    setSelectedCharacters((prevSelected) =>
      isChecked
        ? [...prevSelected, name]
        : prevSelected.filter((character) => character !== name)
    );
  };

  const sortedCharacters = characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const showGames = (videoGames) => {
    const gamesList = videoGames.join(", ");
    return (
      <>
        {videoGames.length > 2 ? (
          <DropdownList list={videoGames} />
        ) : (
          <span>{gamesList}</span>
        )}
      </>
    );
  };

  const characterInfo = (videoGames, imageUrl, name, film) => (
    <>
      <td className={styles.table___hide}>
        {videoGames.length > 0 ? showGames(videoGames) : "no info"}
      </td>
      <td className={`${styles.table__image} ${styles.table___hide}`}>
        <img className={styles.table__image___img} src={imageUrl} alt={name} />
      </td>
      <td>
        <SelectCheckbox
          name={name}
          film={film}
          onSelect={handleSelect}
          selectedCharacters={selectedCharacters}
        />
      </td>
    </>
  );

  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          <th>Name</th>
          <th>Movie</th>
          <th className={styles.table___hide}>Video games</th>
          <th className={styles.table___hide}>Me!</th>
          <th>Choose me</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {sortedCharacters.map(({ _id, name, films, videoGames, imageUrl }) => {
          if (films.length > 0) {
            return films
              .filter((film) => !selectedFilm || film === selectedFilm)
              .map((film, index) => (
                <tr key={`${_id}-${index + 1}`}>
                  <td>{name}</td>
                  <td>{film}</td>
                  {characterInfo(videoGames, imageUrl, name, film)}
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

CharactersTable.propTypes = {
  characters: PropTypes.array.isRequired,
  selectedFilm: PropTypes.string,
  selectedCharacters: PropTypes.array,
  setSelectedCharacters: PropTypes.func.isRequired,
};

export default CharactersTable;
