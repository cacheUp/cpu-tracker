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
    const {
      freeMem,
      totalMem,
      usedMem,
      memUsage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad,
      macA
    } = this.props.data;
    const cpu = { cpuLoad };
    const mem = { totalMem, usedMem, memUsage, freeMem };
    const info = { macA, osType, upTime, cpuModel, numCores, cpuSpeed };
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
