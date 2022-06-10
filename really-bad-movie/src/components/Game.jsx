import React from "react";
import FilmTile from "./FilmTile.jsx";

export default function Game(props) {
  const [rating1, setRating1] = React.useState(null);
  const [rating2, setRating2] = React.useState(null);
  const [higherRating, setHigherRating] = React.useState(null);
  const [randomIndex, setRandomIndex] = React.useState(
    Math.floor(Math.random() * 10 + 1)
  );
  React.useEffect(() => {
    return rating1 > rating2 ? setHigherRating(1) : setHigherRating(2);
  }, [rating1, rating2]);

  function handleSubmit(event) {
    event.preventDefault();
    const filmPick = event.nativeEvent.submitter.value;
    if (parseInt(filmPick) === parseInt(higherRating)) {
      props.setLives(props.lives - 1);
    } else {
      props.setCorrect(props.correct + 1);
    }
  }

  const nextFilm =
    5 - props.lives + props.correct !== props.guesses ? (
      <button className="next"
        onClick={() => {
          props.setGuesses(props.guesses + 1);
          setRandomIndex(Math.floor(Math.random() * 10 + 1));
          setRating1(null);
          setRating2(null);
        }}
      >
        Next Film
      </button>
    ) : null;

  const restartButton = (
    <button className="restart"
      onClick={() => {
        props.setGuesses(0);
        props.setLives(5);
        props.setCorrect(0);
      }}
    >
      RESTART GAME
    </button>
  );

  if (props.lives === 0) return restartButton;
  //if (rating1 === null || rating2 === null) return <div>Loading...</div>;
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
      {nextFilm}
    </>
  );
}


