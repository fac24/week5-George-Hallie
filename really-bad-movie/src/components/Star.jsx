import React from "react";

export default function Star(props) {
  return props.gold ? (
    <span style={{ fontSize: "500%", color: "yellow" }}>&#9733;</span>
  ) : (
    <span style={{ fontSize: "500%", color: "yellow" }}>&#9734;</span>
  );
}
