import React, { Component } from "react";
import socket from "./utilities/socketConnection";
import Widget from "./Widget";

class App extends Component {
  constructor() {
    super();
    this.state = {
      performanceData: {}
    };
  }

  componentDidMount() {
    socket.on("data", data => {
      const currentState = { ...this.state.performanceData };
      currentState[data.macA] = data;
      this.setState({
        performanceData: currentState
      });
    });
  }

  render() {
    console.log(this.state.performanceData);
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
