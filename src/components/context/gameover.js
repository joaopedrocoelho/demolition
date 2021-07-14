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
  const maxScore = Math.min.apply(
    Math,
    scores.map(function (element) {
      return element.score.length;
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

      const found = scores.find((element) => object.team === element.team);
      let cloneScores = scores;
      if (found !== undefined) {
        if (object.score.length === 0) {
          setTimeout(() => setWinner(object.team), 1200);
        } else {
          const indexOfTeam = scores.indexOf(found);

          cloneScores[indexOfTeam] = object;
          setScoresState(cloneScores);
        }
      } else {
        cloneScores.push(object);
        setScoresState(cloneScores);
      }
    },
    [scores, setWinner]
  );

  const findWinner = React.useCallback(() => {
    const winners = scores.filter(
      (team) => team.score.length === findMaxScore(scores)
    );
    const teams = winners.map((winner) => `Team ${winner.team}`);

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
