import ContentTable from "../../features/ContentTable/ContentTable";
import Filters from "../../features/Filters/Filters";
import { useFetch } from "../../../hooks/useFetch";
import {
  ALL_CHARACTERS_URL,
  CHARACTERS_BY_FILM_AND_GAME_URL,
  CHARACTERS_BY_FILM_URL,
} from "../../../constans";
import { useState } from "react";

const MainContent = () => {
  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  let url = ALL_CHARACTERS_URL;
  if (selectedFilm && selectedGame) {
    url = CHARACTERS_BY_FILM_AND_GAME_URL(selectedFilm, selectedGame);
  } else if (selectedFilm) {
    url = CHARACTERS_BY_FILM_URL(selectedFilm);
  }

  const { characters, isPending, error } = useFetch(url);
  const { films, games } = useFetch(ALL_CHARACTERS_URL);
  const gamesByFilms = [];
  for (let i = 0; i < characters.length; i++) {
    gamesByFilms.push(characters[i].videoGames);
  }

  return (
    <main>
      <Filters
        setSelectedFilm={setSelectedFilm}
        setSelectedGame={setSelectedGame}
        films={films}
        games={selectedFilm ? gamesByFilms.flat() : games}
      />
      <ContentTable
        selectedFilm={selectedFilm}
        characters={characters}
        isPending={isPending}
        error={error}
      />
    </main>
  );
};

export default MainContent;
