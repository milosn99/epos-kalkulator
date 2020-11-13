import React from "react";
import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleChange = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleChange} />
      </div>
    );
  }
}

export default App;
