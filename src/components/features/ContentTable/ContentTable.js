import { useState } from "react";
import styles from './ContentTable.module.scss';

const ContentTable = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <table className={styles.table}>
      <tr>
        <th>Name</th>
        <th>Movie</th>
        <th>Video game</th>
        <th>Me!</th>
        <th>Choose me</th>
      </tr>
      {characters.map(({ _id, name, films, videoGames, imageUrl }) => (
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
  );
};

export default ContentTable;
