import React, { useState, useContext, useEffect } from "react";
import players from "../context/players";
import gameOver from "../context/gameover";

const Modal = () => {
  const [visibility, setVisibility] = useState(true);
  const [selectNumberOfteams, setSelectNumberOfTeams] = useState(4);
  const { setNumberOfTeams } = useContext(players);
  const { setBlur } = useContext(gameOver);

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
          disabled={selectNumberOfteams === 1 ? true : false}
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
