import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.name === "÷" ||
      this.props.name === "x" ||
      this.props.name === "-" ||
      this.props.name === "+" ||
      this.props.name === "="
        ? "orange"
        : "",
      this.props.name === "0" ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
