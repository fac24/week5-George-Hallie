import React from "react";
//import logo from './game.jsx'
import "./App.css";

import Lives from "./components/Lives.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [name, setName] = React.useState(null);
  const [lives, setLives] = React.useState(5);
  const [correct, setCorrect] = React.useState(0);
  const [guesses, setGuesses] = React.useState(0);

  return (
    <div className="App">
      <header className="header">
        <h1>Badflix</h1>
        <p className="rules">Rules should be here</p>
        <input
          type="search"
          name="typeusername"
          className="playerInput"
          aria-label="enter your username"
          required
          onChange={(event) => setName(event.target.value)}
        />

        <p>Hi, {name}!</p>
        <section className="lives">
          <Lives lives={lives} correct={correct} />
        </section>
        <section className="gameArea">
          <Game
            lives={lives}
            setLives={setLives}
            correct={correct}
            setCorrect={setCorrect}
            guesses={guesses}
            setGuesses={setGuesses}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
