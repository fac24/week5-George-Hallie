import React from "react";
const MOVIE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function fetchFilm(page) {
  const DISCOVER_URL =
    MOVIE_URL +
    `discover/movie?api_key=${API_KEY}&include_video=false&page=${page}`;
  return fetch(DISCOVER_URL).then((res) => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  });
}

export default function FilmTile(props) {
  const [filmData, setFilmData] = React.useState(null);

  React.useEffect(() => {
    fetchFilm(props.guesses + 1).then((json) => {
      const film = json.results[props.tileId];
      setFilmData(film);
      props.setRating(film.popularity);
    });
  }, [props]);

  if (!filmData || !props.rating) return <div>Loading...</div>;
  const filmSubmit = (
    <label htmlFor={props.tileId}>
      {filmData.original_title}
      <input
        id={props.tileId}
        type="image"
        name={`submit_${props.tileId}`}
        value={props.tileId}
        alt={`Poster of ${filmData.original_title}`}
        src={IMAGE_URL + filmData.poster_path}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </label>
  );
  const filmFlip = (
    <label htmlFor={props.tileId}>
      {filmData.original_title}
      <img
        id={props.tileId}
        name={`submit_${props.tileId}`}
        value={props.tileId}
        alt={`Poster of ${filmData.original_title}`}
        src={IMAGE_URL + filmData.poster_path}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </label>
  );
  if (5 - props.lives + props.correct === props.guesses)
    return <div className="flip_card card">{filmSubmit}</div>;
  return (
    <>
      <div className="flip_card">
        <div className="flip_card_inner">
          <div className="flip_card_front">
            <div className="rating">{props.rating.toFixed(0)}</div>
          </div>
          <div className="flip_card_back">{filmFlip}</div>
        </div>
      </div>
    </>
  );
}
