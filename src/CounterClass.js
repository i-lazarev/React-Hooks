import React, { Component } from "react";
import "./App.css";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  
  render() {
    return (
      <div>
        <h2>ClassCounter</h2>
        <p>Your Counter is {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState(prevState => ({ counter: prevState.counter + 1 }))
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({ counter: prevState.counter - 1 }))
          }
        >
          Decrement
        </button>
      </div>
    );
  }
}
