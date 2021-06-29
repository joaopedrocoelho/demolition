import React, { useContext } from "react";

import gameOver from "../../context/gameover";

const EndGameBtn = () => {
  const { findWinner } = useContext(gameOver);

  return (
    <button
      onClick={() => {
        findWinner();
      }}
      className={"btn  Patua"}
    >
      End Game
    </button>
  );
};

export default EndGameBtn;
