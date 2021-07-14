import React from "react";

const players = React.createContext({
  activePlayerIndex: 0,
  numberOfTeams: 0,
  hasPlayed: false,
  setNumberOfTeams: (number) => {},
  setActivePlayer: () => {},
  setHasPlayed: (boolean) => {},
});

export const usePlayers = () => {
  const [activePlayerIndex, setActivePlayerIndex] = React.useState(0);
  const [numberOfTeams, setNumberOfPlayers] = React.useState(0);
  const [hasPlayed, setHasPlayedSetter] = React.useState(false);

  const setNumberOfTeams = React.useCallback((number) => {
    setNumberOfPlayers(number);
  }, []);

  const setActivePlayer = React.useCallback(() => {
    setActivePlayerIndex((activePlayerIndex + 1) % numberOfTeams);
  }, [activePlayerIndex, numberOfTeams]);

  const setHasPlayed = React.useCallback((bool) => {
    setHasPlayedSetter(bool);
  }, []);

  return {
    activePlayerIndex,
    numberOfTeams,
    setNumberOfTeams,
    setActivePlayer,
    hasPlayed,
    setHasPlayed,
  };
};

export default players;
