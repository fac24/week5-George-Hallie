import React from "react";

export default function FilmInput(props) {
  return (
    <label htmlFor={props.tileId}>
      {props.filmData.original_title}
      <input 
        id={props.tileId}
        type="image"
        name={`submit_${props.tileId}`}
        value={props.tileId}
        alt={`Poster of ${props.filmData.original_title}`}
        src={props.IMAGE_URL + props.filmData.poster_path}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </label>
  );
}
