import React, { useState, useContext, useEffect } from "react";
import gameOver from "../context/gameover";

const GameOverModal = () => {
  const [visibility, setVisibility] = useState(false);
  const { winner } = useContext(gameOver);

  useEffect(() => {
    if (winner !== undefined) {
      setVisibility(true);
    }
  }, [winner]);

  return (
    <div
      className={"modal bounceInRight"}
      style={{ display: visibility ? "inline-flex" : "none" }}
    >
      <h1>Team {winner + 1} won!</h1>
    </div>
  );
};

export default GameOverModal;
