import ContentTable from "../../features/ContentTable/ContentTable";
import Filters from "../../features/Filters/Filters";
import { useFetch } from "../../../hooks/useFetch";
import {
  ALL_CHARACTERS_URL,
  CHARACTERS_BY_FILM_AND_GAME_URL,
  CHARACTERS_BY_FILM_URL,
  CHANGE_PAGE_URL,
} from "../../../constans";
import { removeTxtAfterBrackets } from "../../utils/removeTxtAfterBrackets";
import { useState } from "react";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import SelectedCharactersList from "../../features/SelectedCharactersList/SelectedCharactersList";

const MainContent = () => {
  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [modal, setModal] = useState(false);

  let url = ALL_CHARACTERS_URL;
  if (selectedFilm && selectedGame) {
    url = CHARACTERS_BY_FILM_AND_GAME_URL(selectedFilm, selectedGame);
  } else if (selectedFilm) {
    url = CHARACTERS_BY_FILM_URL(selectedFilm);
  } else if (currentPage !== 1) {
    url = CHANGE_PAGE_URL(currentPage);
  }

  const { characters, isPending, error, totalPages } = useFetch(url);
  const { films, games } = useFetch(ALL_CHARACTERS_URL);
  const gamesByFilms = [];
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    gamesByFilms.push(character.videoGames.map(removeTxtAfterBrackets));
  }

  const handleCharactersSelect = () => {
    setModal(true);
  };

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
        handleCharactersSelect={handleCharactersSelect}
      />
      {modal && (
        <SelectedCharactersList
          selectedCharacters={selectedCharacters}
          setModal={setModal}
        />
      )}
      <ScrollTopButton />
    </main>
  );
};

export default MainContent;
