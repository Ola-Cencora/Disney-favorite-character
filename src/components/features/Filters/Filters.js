import SelectForm from "../../common/SelectForm/SelectForm";
import { useFetch } from "../../../hooks/useFetch";
import { ALL_CHARACTERS_URL } from "../../../constans";

const Filters = () => {
  const { films, games } = useFetch(ALL_CHARACTERS_URL);

  return (
    <section>
      <SelectForm title="Select a movie" options={films} />
      <SelectForm title="Select a game" options={games} />
    </section>
  );
};

export default Filters;
