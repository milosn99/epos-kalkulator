import React from "react";
import "./Button.css";

export default function Button(props) {
  const handleClick = () => {
    props.clickHandler(props.name);
  };

  const className = [
    "component-button",
    props.name === "÷" ||
    props.name === "x" ||
    props.name === "-" ||
    props.name === "+" ||
    props.name === "="
      ? "orange"
      : "",
    props.name === "0" ? "wide" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}
