import React from "react";
import drawCircle from "./utilities/canvasLoadAnimation";

function Cpu(props) {
  console.log(props);
  return (
    <div className="col-sm-3 cpu">
      <h3>Cpu Load</h3>
      <div className="canvas-wrapper" />
    </div>
  );
}

export default Cpu;
