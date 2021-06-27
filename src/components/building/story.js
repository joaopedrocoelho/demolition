import React, { useState, useContext } from "react";
import rolledNumbers from "../context/rolled-numbers";
import players from "../context/players";
import "../../App.css";

const Story = ({ team, number, selectable, callback, building }) => {
  const [exit, setExit] = useState(false);
  const [visible, setVisible] = useState(true);
  const { setRolledNumbers } = useContext(rolledNumbers);
  const { activePlayerIndex, setActivePlayer } = useContext(players);

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
          callback();
          setExit(true);
          setTimeout(() => setVisible(false), 600);
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
