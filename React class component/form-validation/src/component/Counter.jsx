import { Button } from "@material-ui/core";
import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };

  //   this.increment = this.increment.bind(this);
  //   this.decrement = this.decrement.bind(this);
  //   this.reset = this.reset.bind(this);
  // }
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  };
  decrement = () => {
    this.setState((prev) => ({
      counter: prev.counter - 1,
    }));
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    // const { counter } = this.state;

    return (
      <div className="Counter" style={{ marginLeft: "500px" }}>
        <h1 style={{ marginLeft: "180px" }}>{this.state.counter}</h1>
        {/* <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrement}>Decrement</button> */}
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={this.increment}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={this.reset}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={this.decrement}
        >
          Decrement
        </Button>
      </div>
    );
  }
}

export default Counter;
