import SelectForm from "../../common/SelectForm/SelectForm";
import styles from "./Filters.module.scss";

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

export default Filters;
