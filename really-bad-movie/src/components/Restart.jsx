import React from "react";

export default function Restart(props) {
  return (
    <button
      className="next"
      onClick={() => {
        props.setGuesses(0);
        props.setLives(5);
        props.setCorrect(0);
      }}
    >
      RESTART GAME
    </button>
  );
}
