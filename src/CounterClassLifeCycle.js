import React, { Component } from "react";
import "./App.css";

export default class CounterClassLifeCycle extends Component {
  // 1 step
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  //3 step
  componentDidMount(){
      document.title = `Component init`

  }
  // 4 step
  componentDidUpdate(){
    document.title = `You presed ${this.state.counter}`
  }
  // 2 step
  render() {
    return (
      <div>
        <h2>ClassCounterLifeCycle</h2>
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
