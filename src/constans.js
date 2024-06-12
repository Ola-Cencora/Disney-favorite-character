// global
export const ITEMS_PER_PAGE = 5;

// API
export const ALL_CHARACTERS_URL = "https://api.disneyapi.dev/character";

export const CHARACTERS_BY_FILM_URL = (film) =>
  `https://api.disneyapi.dev/character?films=${encodeURIComponent(film)}`;

export const CHARACTERS_BY_FILM_AND_GAME_URL = (film, game) =>
  `https://api.disneyapi.dev/character?films=${encodeURIComponent(
    film
  )}&videoGames=${encodeURIComponent(game)}`;
