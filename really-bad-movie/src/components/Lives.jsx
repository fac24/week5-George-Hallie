import React from "react";

function Star(props) {
  return props.gold ? (
    <span style={{ fontSize: "500%", color: "yellow" }}>&#9733;</span>
  ) : (
    <span style={{ fontSize: "500%", color: "yellow" }}>&#9734;</span>
  );
}

export default function Lives(props) {
  if (props.lives === 0) {
    return <div>GAME OVER!!</div>;
  } else {
    const starsInit = [
      <Star gold={true} key={0} />,
      <Star gold={true} key={1} />,
      <Star gold={true} key={2} />,
      <Star gold={true} key={3} />,
      <Star gold={true} key={4} />,
    ];
    const stars = starsInit.map((star, index) => {
      if (index + 1 > props.lives) {
        return <Star gold={false} key={index} />;
      }
      return star;
    });

    return (
      <>
        <div>Number Correct = {props.correct}</div>
        <div>{stars}</div>
      </>
    );
  }
}
