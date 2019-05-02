import React from "react";
import drawCircle from "./utilities/canvasLoadAnimation";

function Mem(props) {
  const { totalMem, usedMem, memUsage, freeMem } = props.memData;
  return (
    <div className="col-sm-3 mem">
      <h3>mem!</h3>
      <div className="canvas-wrapper">
        <canvas className="canvas" width="200" height="200" />
      </div>
    </div>
  );
}

export default Mem;
