import React from "react";
import FilmInput from "./FilmInput.jsx";
import FilmFlip from "./FilmFlip.jsx";

import useFetchFilm from "./hooks/useFetchFilm.jsx";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function FilmTile(props) {
  const [filmData, setFilmData] = useFetchFilm(props);

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
