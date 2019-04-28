import React from "react";
import Cpu from "./Cpu";
import Info from "./Info";
import Mem from "./Mem";

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Widget</h1>
        <Cpu />
        <Mem />
        <Info />
      </div>
    );
  }
}
export default Widget;
