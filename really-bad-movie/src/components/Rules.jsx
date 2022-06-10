import React from "react";

export default function Rules(props) {
  const [open, setOpen] = React.useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const rules = !open ? null : (
    <div className="rules">
      <ul>
        <li>You have a choice between 2 films</li>
        <li>
          Pick the AwFilm (based on current popularity according to tmdb users)
        </li>
        <li>You have 5 Lives</li>
        <li>Have a Filmtastic time</li>
      </ul>
    </div>
  );
  return (
    <div className="rules">
      <button className="rules_btn" onClick={toggleOpen}>Rules</button>{rules}
    </div>
  );
}
