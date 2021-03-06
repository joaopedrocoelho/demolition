import React, { useContext } from "react";

import rolledNumbers from "../context/rolled-numbers";
import players from "../context/players";

const SkipTurn = () => {
  const { setRolledNumbers } = useContext(rolledNumbers);
  const { activePlayerIndex, setActivePlayer } = useContext(players);

  return (
    <button
      onClick={() => {
        setRolledNumbers([]);
        setActivePlayer();
      }}
      className={"btn  Patua"}
    >
      Skip turn
    </button>
  );
};

export default SkipTurn;
