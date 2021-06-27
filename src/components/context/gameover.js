import React from "react";

const gameOver = React.createContext({
  blur: true,
  setBlur: (boolean) => {},
  winner: undefined,
  setWinner: (team) => {},
});

export const useGameOver = () => {
  const [winner, setNewWinner] = React.useState(undefined);
  const [blur, setBlurScreen] = React.useState(true);

  const setWinner = React.useCallback((team) => {
    setNewWinner(team);
  }, []);

  const setBlur = React.useCallback((boolean) => {
    setBlurScreen(boolean);
  }, []);

  return {
    blur,
    setBlur,
    winner,
    setWinner,
  };
};

export default gameOver;
