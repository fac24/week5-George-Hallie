import React from "react";

const MOVIE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "87337df5190b4447f246a4872658a898";

function fetchFilm(page) {
  const DISCOVER_URL =
    MOVIE_URL +
    `discover/movie?api_key=${API_KEY}&include_video=false&page=${page}`;
  return fetch(DISCOVER_URL).then((res) => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  });
}

function FilmTile(props) {
  const [filmData, setFilmData] = React.useState(null);

  React.useEffect(() => {
    fetchFilm(props.correct + 1).then((json) => {
      const film = json.results[props.tileId];
      setFilmData(film);
      props.setRating(film.popularity);
    });
  }, [props]);

  if (!filmData) return <div>Loading...</div>;
  return (
    <>
    <div className="flip_card">
      <div className="flip_card_inner">
          <div className="flip_card_front">
             <label htmlFor={props.tileId}>
             Tile {filmData.original_title}
             <input
             id={props.tileId}
             type="image"
             name={`submit_${props.tileId}`}
             value={props.tileId}
             alt={`Poster of ${filmData.original_title}`}
             src={IMAGE_URL + filmData.poster_path}
             style={{height: 500, width: 300}}
             />
             </label>
          </div>
          <div className="flip_card_back"><h1>rating= {props.rating}</h1></div>
      </div>
    </div>
      
    
    </>
  );
  
}

export default function Game(props) {
  const [rating1, setRating1] = React.useState(null);
  const [rating2, setRating2] = React.useState(null);
  const [higherRating, setHigherRating] = React.useState(null);

  React.useEffect(() => {
    return rating1 > rating2 ? setHigherRating(1) : setHigherRating(2);
  }, [rating1, rating2]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.lives, props.correct);
    const filmPick = event.nativeEvent.submitter.value;
    if (parseInt(filmPick) !== parseInt(higherRating)) {
      props.setLives(props.lives - 1);
    } else {
      props.setCorrect(props.correct + 1);
    }
  }

  //if (!rating1 | !rating2) return <div>Loading...</div>;
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
    <div className="flip">
      <FilmTile
        tileId={1}
        correct={props.correct}
        rating={rating1}
        setRating={setRating1}
      />
      <FilmTile
        tileId={2}
        correct={props.correct}
        rating={rating2}
        setRating={setRating2}
      />
    </div>
    </form>
  );
}

// flipcards
{/* <div className="flip_card">
    <div className="flip_card_inner">
        <div className="flip_card_front">
            <label htmlFor={props.tileId}>
            Tile {filmData.original_title}
            <input
            id={props.tileId}
            type="image"
            name={`submit_${props.tileId}`}
            value={props.tileId}
            alt={`Poster of ${filmData.original_title}`}
            src={IMAGE_URL + filmData.poster_path}/>
            </label>
        </div>
        <div className="flip_card_back">rating= {props.rating}</div>
    </div>
</div> */}
