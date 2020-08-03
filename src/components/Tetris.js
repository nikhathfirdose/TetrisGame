import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "../gameHelpers";

import { randomTetrominos } from "../tetrominos";
const Tetris = (props) => {
  console.log(randomTetrominos());
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>

        <StartButton />
      </aside>
    </div>
  );
};
export default Tetris;
