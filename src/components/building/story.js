import React, { useState, useContext } from "react";
import rolledNumbers from "../context/rolled-numbers";
import players from "../context/players";
import useAudio from "./useAudio";
import Swipe from "../../audio/swipe.mp3";
import "../../App.css";

const Story = ({ team, number, selectable, callback, building }) => {
  const [exit, setExit] = useState(false);
  const [visible, setVisible] = useState(true);
  const { setRolledNumbers } = useContext(rolledNumbers);
  const { activePlayerIndex, setActivePlayer, setHasPlayed } =
    useContext(players);
  const [playing, playSound] = useAudio(Swipe);

  return (
    <div
      className={`story ${exit ? "backOutLeft" : ""} ${
        selectable.includes(number) && team === activePlayerIndex
          ? "selectable"
          : ""
      } 
      ${building} Patua`}
      style={{ display: visible ? "flex" : "none" }}
      onClick={() => {
        if (selectable.includes(number) && team === activePlayerIndex) {
          playSound();
          callback();

          setTimeout(() => setExit(true), 500);
          setTimeout(() => setVisible(false), 1100);
          setHasPlayed(false);
          setActivePlayer();

          setRolledNumbers([]);
        }
      }}
    >
      <span className="story-number">
        <h4>{number}</h4>
      </span>
    </div>
  );
};

export default Story;
