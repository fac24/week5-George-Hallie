import React from "react";

export default function NextFilm(props) {
  return props.canRender ? (
    <button
      className="next"
      onClick={() => {
        props.setGuesses(props.guesses + 1);
        props.setRandomIndex(Math.floor(Math.random() * 10 + 1));
        props.setRating1(null);
        props.setRating2(null);
      }}
    >
      Next Film
    </button>
  ) : null;
}
