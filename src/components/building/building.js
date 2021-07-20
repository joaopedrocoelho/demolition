import React, { useContext, useEffect, useState } from "react";
import Story from "./story";
import players from "../context/players";
import useAudio from "./useAudio";

import rolledNumbers from "../context/rolled-numbers";
import gameOver from "../context/gameover";

import Bip from "../../audio/coin.wav";
import Shake from "../../audio/shake.wav";

import "../../App.css";

export function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const Building = ({ team, color }) => {
  const [playingBip, toggleBip] = useAudio(Bip);
  const [playingShake, toggleShake] = useAudio(Shake);

  const { hasPlayed, setHasPlayed, activePlayerIndex, setActivePlayer } =
    useContext(players);
  const { numbers, setRolledNumbers } = useContext(rolledNumbers);
  const { scores, setScores, setWinner } = useContext(gameOver);
  const [stories, setStories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function updateScoreSheet() {
    setScores({
      team: team + 1,
      score: stories,
    });
    console.log("scores", scores);
  }

  const hasSelectable = React.useCallback(() => {
    let canSelect = [];

    numbers.forEach((number) => {
      let found = stories.find((story) => story === number);
      if (found !== undefined) {
        canSelect.push(number);
      }
    });

    if (canSelect.length > 0) {
      return true;
    } else {
      return false;
    }
  }, [numbers, stories]);

  useEffect(() => {
    console.log("numbers[2] === 'playTwice'", numbers[2] === "playTwice");
    //skips player turn if no selectable story
    if (
      activePlayerIndex === team &&
      stories.length !== 0 &&
      numbers[2] !== "playTwice" &&
      hasPlayed
    ) {
      if (!hasSelectable()) {
        toggleBip();
        setActivePlayer();

        setRolledNumbers([]);
        setHasPlayed(false);
      }
    }
  }, [
    setWinner,
    team,
    toggleBip,
    activePlayerIndex,
    hasPlayed,
    hasSelectable,

    stories,
    color,
    setHasPlayed,
    setActivePlayer,
    setRolledNumbers,
  ]);

  function removeStory(number) {
    let storiesClone = stories;
    let indexOfNumber = storiesClone.indexOf(number);
    storiesClone.splice(indexOfNumber, 1);

    setStories(storiesClone);
  }

  const [clicked, setClicked] = useState(false);

  function handleClickAnimation(number) {
    removeStory(number);
    updateScoreSheet();

    setTimeout(() => {
      setClicked(true);
    }, 1100);
    setTimeout(() => toggleShake(), 1200);
    setTimeout(() => setClicked(false), 3000);
  }
  useEffect(() => {
    console.log("scores[team]", scores[team], team);
  }, [scores, team]);

  return (
    <>
      <div className={`building ${clicked ? "shake" : ""}`}>
        {/*   {scores &&
          scores[team].score.map((story, index) => {
            return (
              <Story
                number={story}
                selectable={numbers}
                callback={() => handleClickAnimation(1)}
                building={color}
                team={team}
                key={`${index}-story`}
              />
            );
          })} */}
        <Story
          number={1}
          selectable={numbers}
          callback={() => handleClickAnimation(1)}
          building={color}
          team={team}
        />
        <Story
          number={2}
          selectable={numbers}
          callback={() => handleClickAnimation(2)}
          building={color}
          team={team}
        />
        <Story
          number={3}
          selectable={numbers}
          callback={() => handleClickAnimation(3)}
          building={color}
          team={team}
        />
        <Story
          number={4}
          selectable={numbers}
          callback={() => handleClickAnimation(4)}
          building={color}
          team={team}
        />
        <Story
          number={5}
          selectable={numbers}
          callback={() => handleClickAnimation(5)}
          building={color}
          team={team}
        />
        <Story
          number={6}
          selectable={numbers}
          callback={() => handleClickAnimation(6)}
          building={color}
          team={team}
        />
        <Story
          number={7}
          selectable={numbers}
          callback={() => handleClickAnimation(7)}
          building={color}
          team={team}
        />
        <Story
          number={8}
          selectable={numbers}
          callback={() => handleClickAnimation(8)}
          building={color}
          team={team}
        />
        <Story
          number={9}
          selectable={numbers}
          callback={() => handleClickAnimation(9)}
          building={color}
          team={team}
        />
      </div>
    </>
  );
};

export default Building;
