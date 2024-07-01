import { render, screen } from "@testing-library/react";
import ContentTable from "./ContentTable";
import "@testing-library/jest-dom";

const characters = Array.from({ length: 10 }, (_, index) => ({
  _id: `id-${index}`,
  name: `Character ${index}`,
  films: ["Film 1"],
  videoGames: ["Game 1", "Game 2"],
  imageUrl: `http://example.com/image-${index}.jpg`,
}));

test("button 'create your list' should be disabled if selectedCharacters array is empty", () => {
  render(
    <ContentTable
      selectedFilm=""
      characters={characters}
      isPending={false}
      error={null}
      currentPage={1}
      setCurrentPage={() => {}}
      totalPages={1}
      selectedCharacters={[]}
      setSelectedCharacters={() => {}}
      handleCharactersSelect={() => {}}
    />
  );

  const button = screen.getByRole("button", { name: /create your list/i });
  expect(button).toBeDisabled();
});

test("button 'create your list' should be enabled if selectedCharacters array is not empty", () => {
  render(
    <ContentTable
      selectedFilm=""
      characters={characters}
      isPending={false}
      error={null}
      currentPage={1}
      setCurrentPage={() => {}}
      totalPages={1}
      selectedCharacters={["Character 1"]}
      setSelectedCharacters={() => {}}
      handleCharactersSelect={() => {}}
    />
  );

  const button = screen.getByRole("button", { name: /create your list/i });
  expect(button).toBeEnabled();
});

test("should show spinner when data is loading", () => {
  render(
    <ContentTable
      selectedFilm=""
      characters={[]}
      isPending={true}
      error={null}
      currentPage={1}
      setCurrentPage={() => {}}
      totalPages={1}
      selectedCharacters={["Character 1"]}
      setSelectedCharacters={() => {}}
      handleCharactersSelect={() => {}}
    />
  );

  const spinner = screen.getByText(/loading/i);
  expect(spinner).toBeInTheDocument();
});

test("should show error when data loading fails", () => {
  render(
    <ContentTable
      selectedFilm=""
      characters={[]}
      isPending={false}
      error={"error"}
      currentPage={1}
      setCurrentPage={() => {}}
      totalPages={1}
      selectedCharacters={["Character 1"]}
      setSelectedCharacters={() => {}}
      handleCharactersSelect={() => {}}
    />
  );

  const error = screen.getByText(/error/i);
  expect(error).toBeInTheDocument();
});
