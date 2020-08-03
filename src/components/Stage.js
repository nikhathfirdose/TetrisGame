import React from "react";
import Cell from "./Cell";
const Stage = (props) => {
  console.log(props.stage);
  return (
    <div>
      {props.stage.map((row) =>
        row.map((cell, x) => <Cell index={x} key={x} type={cell[0]} />)
      )}
    </div>
  );
};
export default Stage;
