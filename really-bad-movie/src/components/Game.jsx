import React from "react";

const MOVIE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "87337df5190b4447f246a4872658a898";

function fetchFilm(filmNum, page) {
  const DISCOVER_URL = MOVIE_URL + `discover/movie?api_key=${API_KEY}&include_video=false&page=${page}`
  return fetch(DISCOVER_URL).then((res) => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json()
  })
}

function FilmTile(props) {
  const [filmData, setFilmData] = React.useState(null);
  
  
  React.useEffect(() => {
    fetchFilm(props.id, props.correct)
    .then((json) => {
      const film = json.results[props.id]
      setFilmData(film)
      props.setRating(film.popularity)
    })
  }, [])

  if(!filmData) return <div>Loading...</div>
  return (
    <div>Tile {filmData.original_title}
    <img src={IMAGE_URL + filmData.poster_path}/>
    
    </div>
  )
}

export default function Game(props) {
  const [rating1, setRating1] = React.useState(0);
  const [rating2, setRating2] = React.useState(0);
  return (
    <form>
      <FilmTile id={1} correct={props.correct} rating={rating1} setRating={setRating1}/>
      <FilmTile id={2} correct={props.correct} rating={rating2} setRating={setRating2}/>
    </form>
  )
};

//flipcards
//  <div className ="flip_card">
//     <div className="flip_card_inner">
//         <div calssName="flip_card_front">
//              Tile {filmData.original_title}
//             <img src={IMAGE_URL + filmData.poster_path} alt="poster" style="width:300px;height:300px;"/> 
//         </div>
//         <div className="flip_card_back">RATING</div>
//     </div>
// </div>  

