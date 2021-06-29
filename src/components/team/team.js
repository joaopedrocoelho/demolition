import React, { useContext } from "react";
import Building from "../building/building";
import players from "../context/players";

const Team = ({ id, color }) => {
  const { activePlayerIndex } = useContext(players);

  return (
    <div className={"team"}>
      <h2
        className={`team-name Patua team-${color} ${
          id === activePlayerIndex ? "highlight hvr-pulse-grow" : ""
        }`}
      >
        Team {id + 1}
      </h2>
      <Building team={id} color={color} />
    </div>
  );
};

export default Team;
