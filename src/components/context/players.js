import React from "react";

const players = React.createContext({
  activePlayerIndex: 0,
  numberOfTeams: 0,
  setNumberOfTeams: (number) => {},
  setActivePlayer: () => {},
});

export const usePlayers = () => {
  const [activePlayerIndex, setActivePlayerIndex] = React.useState(0);
  const [numberOfTeams, setNumberOfPlayers] = React.useState(2);

  const setNumberOfTeams = React.useCallback((number) => {
    setNumberOfPlayers(number);
  }, []);

  const setActivePlayer = React.useCallback(() => {
    setActivePlayerIndex((activePlayerIndex + 1) % numberOfTeams);
  }, [activePlayerIndex, numberOfTeams]);

  return {
    activePlayerIndex,
    numberOfTeams,
    setNumberOfTeams,
    setActivePlayer,
  };
};

export default players;
