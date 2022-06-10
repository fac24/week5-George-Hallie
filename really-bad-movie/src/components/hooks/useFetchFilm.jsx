import React from "react";

const MOVIE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function fetchFilm(page) {
  const DISCOVER_URL =
    MOVIE_URL + `movie/top_rated?api_key=${API_KEY}&page=${page}`;
  return fetch(DISCOVER_URL).then((res) => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  });
}

export default function useFetchFilm(props) {
  const [filmData, setFilmData] = React.useState(null);

  React.useEffect(() => {
    fetchFilm(props.guesses + 1).then((json) => {
      const film = json.results[props.tileId * props.randomIndex - 1];
      setFilmData(film);
      props.setRating(film.popularity);
    });
  }, [props]);

  return [filmData, setFilmData];
}
