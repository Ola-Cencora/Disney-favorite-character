import { screen, render, within } from "@testing-library/react";
import CharactersTable from "./CharactersTable";
import "@testing-library/jest-dom";

test("displays at least 50 characters", () => {
  const characters = Array.from({ length: 50 }, (_, index) => ({
    _id: `id-${index}`,
    name: `Character ${index}`,
    films: ["Film 1"],
    videoGames: ["Game 1", "Game 2"],
    imageUrl: `http://example.com/image-${index}.jpg`,
  }));

  render(
    <CharactersTable
      characters={characters}
      selectedFilm=""
      selectedCharacters={[]}
      setSelectedCharacters={() => {}}
    />
  );

  const rows = screen.getAllByRole("row");

  expect(rows.length).toBeGreaterThanOrEqual(51);
});

test("displays a drop-down button when a character has more than 2 games", () => {
  const characters = Array.from({ length: 1 }, (_, index) => ({
    _id: `id-${index}`,
    name: `Character ${index}`,
    films: ["Film 1"],
    videoGames: ["Game 1", "Game 2", "Game 3"],
    imageUrl: `http://example.com/image-${index}.jpg`,
  }));

  render(
    <CharactersTable
      characters={characters}
      selectedFilm=""
      selectedCharacters={[]}
      setSelectedCharacters={() => {}}
    />
  );

  const row = screen.getByRole("row", {
    name: /character 0 film 1 game 1, game 2 character 0/i,
  });

  const seeMoreButton = within(row).getByRole("button", {
    name: /see more/i,
  });

  expect(seeMoreButton).toBeInTheDocument();
});
