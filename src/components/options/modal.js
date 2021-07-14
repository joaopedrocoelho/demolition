import React, { useState, useContext } from "react";
import players from "../context/players";
import gameOver from "../context/gameover";

const Modal = () => {
  const [visibility, setVisibility] = useState(true);
  const [selectNumberOfteams, setSelectNumberOfTeams] = useState(4);
  const { setNumberOfTeams } = useContext(players);
  const { scores, setScores, setBlur } = useContext(gameOver);

  function setInitialScores() {
    for (let i = 1; i <= selectNumberOfteams; i++) {
      setScores({
        team: i,
        score: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      });
    }
    console.log("scores", scores);
  }

  return (
    <div
      className={"modal bounceInRight"}
      style={{ display: visibility ? "inline-flex" : "none" }}
    >
      <h1 className="bigShoulders hvr-pulse-grow">Demolition</h1>
      <p className="message Patua">Number of Teams:</p>
      <div className="modal-options">
        <button
          className="btn round-corners minus"
          onClick={() => {
            if (selectNumberOfteams > 1) {
              setSelectNumberOfTeams(selectNumberOfteams - 1);
            }
          }}
          disabled={selectNumberOfteams === 2 ? true : false}
        ></button>
        <button className="btn no-effects Patua" id="numberOfTeams">
          {selectNumberOfteams}
        </button>
        <button
          className="btn round-corners plus"
          onClick={() => {
            if (selectNumberOfteams < 5) {
              setSelectNumberOfTeams(selectNumberOfteams + 1);
            }
          }}
          disabled={selectNumberOfteams === 5 ? true : false}
        ></button>
      </div>
      <div className="modal-options">
        <button className="btn reset Patua">Reset</button>
        <button
          className="btn Patua"
          onClick={() => {
            setNumberOfTeams(selectNumberOfteams);
            setInitialScores();
            setBlur(false);
            setVisibility(false);
          }}
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default Modal;
