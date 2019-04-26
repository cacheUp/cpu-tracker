import React, { Component } from "react";
import socket from "./utilities/socketConnection";

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
    return <div className="App">{console.log(socket)}</div>;
  }
}

export default App;
