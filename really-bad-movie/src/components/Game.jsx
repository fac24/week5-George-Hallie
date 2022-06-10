import React from "react";

import FilmTile from "./FilmTile.jsx";
import NextFilm from "./NextFilm.jsx";
import Restart from "./Restart.jsx";

import useLarger from "./hooks/useLarger.jsx";

export default function Game(props) {
  const [rating1, setRating1] = React.useState(null);
  const [rating2, setRating2] = React.useState(null);
  const [higherRating, setHigherRating] = useLarger(rating1, rating2);
  const [randomIndex, setRandomIndex] = React.useState(
    Math.floor(Math.random() * 10 + 1)
  );

  function handleSubmit(event) {
    event.preventDefault();
    const filmPick = event.nativeEvent.submitter.value;
    if (parseInt(filmPick) === parseInt(higherRating)) {
      props.setLives(props.lives - 1);
    } else {
      props.setCorrect(props.correct + 1);
    }
  }
  if (!props.name) return null;
  if (props.lives === 0) {
    localStorage.setItem(props.name, props.correct);
    return (
      <Restart
        setGuesses={props.setGuesses}
        setLives={props.setLives}
        setCorrect={props.setCorrect}
      />
    );
  }
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="flip">
          <FilmTile
            tileId={1}
            lives={props.lives}
            correct={props.correct}
            guesses={props.guesses}
            rating={rating1}
            setRating={setRating1}
            randomIndex={randomIndex}
          />
          <FilmTile
            tileId={2}
            lives={props.lives}
            guesses={props.guesses}
            correct={props.correct}
            rating={rating2}
            setRating={setRating2}
            randomIndex={randomIndex}
          />
        </div>
      </form>
      <NextFilm
        canRender={5 - props.lives + props.correct !== props.guesses}
        setGuesses={props.setGuesses}
        guesses={props.guesses}
        setRandomIndex={setRandomIndex}
        setRating1={setRating1}
        setRating2={setRating2}
      />
    </>
  );
}
