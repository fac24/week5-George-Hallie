import React from "react";
import "./App.css";

import Rules from "./components/Rules.jsx";
import Lives from "./components/Lives.jsx";
import Game from "./components/Game.jsx";


function App() {
  const [name, setName] = React.useState('');
  const [lives, setLives] = React.useState(5);
  const [correct, setCorrect] = React.useState(0);
  const [guesses, setGuesses] = React.useState(0);
  const [visibility, setVisibility] = React.useState(true);

  const updateName = (event) => {
    setName(event.target.value);
  }

  const showName = event => {
    event.preventDefault();
    setName(event.target.elements.typename.value)
    setVisibility(false);
  };
  


 

  return (
    <div className="App">
      <header >
        <h1 className="title">Badflix</h1>
         <div className="rules"><Rules /></div>
        
        <section className = "hello_user">
          {visibility? <form id="form" onSubmit={showName}>
            <label data-for="name">Please enter your name: </label>
               <input
               type="text"
               name="typename"
               className="playerInput"
               aria-label="enter your username"              
               required
               />
          <button className="submit_btn" type="submit">Submit</button> 

          
          </form> :
          <div className="greeting"  id="showtime">Good luck, {name}!</div>}
          
        </section>

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
