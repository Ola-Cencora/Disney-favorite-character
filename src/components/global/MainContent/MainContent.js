import ContentTable from "../../features/ContentTable/ContentTable";
import Filters from "../../features/Filters/Filters";
import { useFetch } from "../../../hooks/useFetch";
import { ALL_CHARACTERS_URL } from "../../../constans";
import { useState } from "react";

const MainContent = () => {
  const { characters, count, isPending, error, films, games } =
    useFetch(ALL_CHARACTERS_URL);

  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  console.log(selectedFilm);
  console.log(selectedGame);

  return (
    <main>
      <Filters
        setSelectedFilm={setSelectedFilm}
        setSelectedGame={setSelectedGame}
        films={films}
        games={games}
      />
      <ContentTable
        characters={characters}
        count={count}
        isPending={isPending}
        error={error}
      />
    </main>
  );
};

export default MainContent;
