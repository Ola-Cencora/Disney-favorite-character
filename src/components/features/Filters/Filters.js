import SelectForm from "../../common/SelectForm/SelectForm";
import styles from "./Filters.module.scss";
import PropTypes from "prop-types";

const Filters = ({ films, games, setSelectedFilm, setSelectedGame }) => {
  return (
    <section className={styles.filters}>
      <SelectForm
        setOption={setSelectedFilm}
        title="Select a movie"
        options={films}
      />
      <SelectForm
        setOption={setSelectedGame}
        title="Select a game"
        options={games}
      />
    </section>
  );
};

Filters.propTypes = {
  films: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  setSelectedFilm: PropTypes.func.isRequired,
  setSelectedGame: PropTypes.func.isRequired,
};

export default Filters;
