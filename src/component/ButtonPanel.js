import React from "react";
import Button from "./Button";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const buttons = [
      ["AC", "+/-", "%", "÷"],
      ["7", "8", "9", "x"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="],
    ];

    return (
      <div className="component-button-panel">
        {buttons.map((line) => (
          <div>
            {line.map((element) => (
              <Button name={element} clickHandler={this.handleClick} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ButtonPanel;
