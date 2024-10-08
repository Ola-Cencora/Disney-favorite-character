import { useState, useEffect } from "react";
import { removeTxtAfterBrackets } from "../components/utils/removeTxtAfterBrackets";

export const useFetch = (url) => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const films = characters
    .map((character) =>
      character.films.map((film) => removeTxtAfterBrackets(film))
    )
    .flat();
  const games = characters
    .map((character) =>
      character.videoGames.map((game) => removeTxtAfterBrackets(game))
    )
    .flat();

  useEffect(() => {
    const fetchData = () => {
      setIsPending(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const fetchedCharacters = data.data;
          setCharacters(
            Array.isArray(fetchedCharacters)
              ? fetchedCharacters
              : [fetchedCharacters]
          );
          setCount(data.info.count);
          setTotalPages(data.info.totalPages);
          setIsPending(false);
        })
        .catch((error) => {
          setError(`Error fetching characters: ${error}`);
          setIsPending(false);
        });
    };
    fetchData();
  }, [url]);

  return { characters, count, isPending, error, films, games, totalPages };
};
