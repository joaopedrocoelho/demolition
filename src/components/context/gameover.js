import React from "react";

const gameOver = React.createContext({
  blur: true,
  setBlur: (boolean) => {},
  winner: undefined,
  setWinner: (team) => {},
  scores: [],
  setScores: () => {},
  findWinner: (arrayOfScores) => {},
});

function findMaxScore(scores) {
  const maxScore = Math.max.apply(
    Math,
    scores.map(function (element) {
      return element.score;
    })
  );

  return maxScore;
}

export const useGameOver = () => {
  const [winner, setNewWinner] = React.useState(undefined);
  const [blur, setBlurScreen] = React.useState(true);
  const [scores, setScoresState] = React.useState([]);

  const setWinner = React.useCallback((team) => {
    setNewWinner(team);
  }, []);

  const setBlur = React.useCallback((boolean) => {
    setBlurScreen(boolean);
  }, []);

  const setScores = React.useCallback(
    (object) => {
      //console.log("scores from setScores", scores);
      let cloneScores = scores;
      cloneScores.push(object);
      setScoresState(cloneScores);
    },
    [scores]
  );

  const findWinner = React.useCallback(() => {
    const winners = scores.filter(
      (team) => team.score === findMaxScore(scores)
    );
    const teams = winners.map((winner) => `Team ${winner.team + 1}`);

    setWinner(teams);
  }, [setWinner, scores]);

  return {
    blur,
    setBlur,
    winner,
    setWinner,
    scores,
    setScores,
    findWinner,
  };
};

export default gameOver;
