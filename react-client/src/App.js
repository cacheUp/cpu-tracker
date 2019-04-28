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
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
