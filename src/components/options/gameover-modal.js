import React, { useState, useContext, useEffect } from "react";
import gameOver from "../context/gameover";
import celebration1 from "../../img/celebration/funny-celebrate-5.gif";
import celebration2 from "../../img/celebration/funny-celebrate-8.gif";
import celebration3 from "../../img/celebration/funny-celebrate-14.gif";
import celebration4 from "../../img/celebration/funny-celebrate-56.gif";
import celebration5 from "../../img/celebration/pokemon.gif";
import celebration6 from "../../img/celebration/tenor.gif";

const GameOverModal = () => {
  const [visibility, setVisibility] = useState(false);
  const { winner, setBlur } = useContext(gameOver);

  const gifs = [
    celebration1,
    celebration2,
    celebration3,
    celebration4,
    celebration5,
    celebration6,
  ];

  useEffect(() => {
    if (winner !== undefined) {
      setVisibility(true);
      setBlur(true);
    }
  }, [winner]);

  return (
    <div
      className={"modal bounceInRight"}
      style={{ display: visibility ? "inline-flex" : "none" }}
    >
      <h1 className={"Patua"}>Team {winner + 1} won!</h1>
      <img
        src={gifs[Math.floor(Math.random() * gifs.length)]}
        alt="celebration"
        className={"celebration-gif"}
      />
    </div>
  );
};

export default GameOverModal;
