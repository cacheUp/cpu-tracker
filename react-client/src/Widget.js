import React from "react";
import Cpu from "./Cpu";
import Info from "./Info";
import Mem from "./Mem";
import "./widget.css";

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
        <Cpu cpuData={cpu} />
        <Mem memData={mem} />
        <Info infoData={info} />
      </div>
    );
  }
}
export default Widget;
