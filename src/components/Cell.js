import React from "react";

const Cell = (props) => {
  return (
    <div>
      cell - {props.type}-{props.index}
    </div>
  );
};
export default Cell;
