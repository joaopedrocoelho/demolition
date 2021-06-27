import React, { useContext, useEffect, useState } from "react";
import Team from "./team";
import players from "../context/players";

const TeamsContainer = () => {
  const { numberOfTeams, setNumberOfTeams } = useContext(players);
  const [renderTeams, setRenderTeams] = useState([]);
  const colors = ["red", "green", "pink", "yellow", "blue"];
  const ColorsShuffled = colors.sort(() => Math.random() - 0.5);
  /* const random = Math.floor(Math.random() * colors.length);
  const randomColor = colors[random];
  colors.splice(random,1);
 */
  const createTeams = React.useCallback(() => {
    const teams = [];
    for (let index = 0; index < numberOfTeams; index++) {
      teams.push(<Team id={index} color={ColorsShuffled[index]} />);
    }

    setRenderTeams(teams);
  }, [numberOfTeams]);

  useEffect(() => {
    createTeams();
  }, [numberOfTeams, createTeams]);

  return <div className={"teams-container"}>{renderTeams}</div>;
};

export default TeamsContainer;
