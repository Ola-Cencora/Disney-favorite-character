import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsPending(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsPending(false);
          setCharacters(data.data);
          setCount(data.info.count);
        })
        .catch((error) => {
          setIsPending(false);
          setError(`Error fetching characters: ${error}`);
        });
    };
    fetchData();
  }, [url]);

  return { characters, count, isPending, error };
};
