// API
export const ALL_CHARACTERS_URL = "https://api.disneyapi.dev/character";

export const CHARACTERS_BY_FILM_URL = (film) =>
  `https://api.disneyapi.dev/character?films=${encodeURIComponent(film)}`;

export const CHARACTERS_BY_FILM_AND_GAME_URL = (film, game) =>
  `https://api.disneyapi.dev/character?films=${encodeURIComponent(
    film
  )}&videoGames=${encodeURIComponent(game)}`;

export const CHANGE_PAGE_URL = (page) =>
  `https://api.disneyapi.dev/character?page=${page}`;

// global
export const PAGINATION_PAGES = 5;
