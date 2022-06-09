import React from "react";
import FilmInput from "./FilmInput.jsx";
import FilmFlip from "./FilmFlip.jsx";
const MOVIE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function fetchFilm(page) {
  const DISCOVER_URL =
    MOVIE_URL + `movie/top_rated?api_key=${API_KEY}&page=${page}`;
  return fetch(DISCOVER_URL).then((res) => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  });
}

export default function FilmTile(props) {
  const [filmData, setFilmData] = React.useState(null);

  React.useEffect(() => {
    fetchFilm(props.guesses + 1).then((json) => {
      const film = json.results[props.tileId * props.randomIndex - 1];
      setFilmData(film);
      props.setRating(film.popularity);
    });
  }, [props]);

  if (!filmData || !props.rating) return <div>Loading...</div>;
  if (5 - props.lives + props.correct === props.guesses)
    return (
      <div className="flip_card card">
        <FilmInput
          filmData={filmData}
          tileId={props.tileId}
          IMAGE_URL={IMAGE_URL}
        />
      </div>
    );
  return (
    <>
      <div className="flip_card">
        <div className="flip_card_inner">
          <div className="flip_card_front">
            <div className="rating">{props.rating.toFixed(0)}</div>
          </div>
          <div className="flip_card_back">
            <FilmFlip
              filmData={filmData}
              tileId={props.tileId}
              IMAGE_URL={IMAGE_URL}
            />
          </div>
        </div>
      </div>
    </>
  );
}
