import React from "react";

import Star from "./Star.jsx";

export default function Lives(props) {
  if (props.lives === 0) return <div>GAME OVER!! You Got {props.correct}</div>;

  const starsInit = [
    <Star gold={true} key={0} />,
    <Star gold={true} key={1} />,
    <Star gold={true} key={2} />,
    <Star gold={true} key={3} />,
    <Star gold={true} key={4} />,
  ];
  const stars = starsInit.map((star, index) => {
    if (index + 1 > props.lives) return <Star gold={false} key={index} />;
    return star;
  });

  return (
    <>
      <div>High Score = {props.highScore}</div>
      <div>Number Correct = {props.correct}</div>
      <div>{stars}</div>
    </>
  );
}
