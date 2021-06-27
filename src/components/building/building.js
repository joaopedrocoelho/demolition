import React, { useContext, useEffect, useState } from "react";
import Story from "./story";
import players from "../context/players";
import useAudio from "./useAudio";

import rolledNumbers from "../context/rolled-numbers";
import gameOver from "../context/gameover";
import "../../App.css";

const Building = ({ team, color }) => {
  const [playingBip, toggleBip] = useAudio("/coin.wav");
  const [playingShake, toggleShake] = useAudio("/shake.wav");

  const { hasPlayed, setHasPlayed, activePlayerIndex, setActivePlayer } =
    useContext(players);
  const { numbers, setRolledNumbers } = useContext(rolledNumbers);
  const { setWinner } = useContext(gameOver);
  const [stories, setStories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

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
    if (activePlayerIndex === team) {
      console.log(
        color,
        "hasPlayed",
        hasPlayed,
        "hasSelectable",
        hasSelectable()
      );
    }
    if (activePlayerIndex === team && hasPlayed) {
      if (!hasSelectable()) {
        setActivePlayer();
        toggleBip();
        setRolledNumbers([]);
        setHasPlayed(false);
      }
    }
  }, [activePlayerIndex, hasPlayed, hasSelectable]);

  function removeStory(number) {
    let storiesClone = stories;
    let indexOfNumber = storiesClone.indexOf(number);
    storiesClone.splice(indexOfNumber, 1);

    setStories(storiesClone);
  }

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (stories.length === 0) setTimeout(() => setWinner(team), 1000);
  }, [stories, setWinner, team]);

  function handleClickAnimation(number) {
    removeStory(number);

    setTimeout(() => {
      setClicked(true);
    }, 1100);
    setTimeout(() => toggleShake(), 1300);
    setTimeout(() => setClicked(false), 3000);
  }

  return (
    <div className={`building ${clicked ? "shake" : ""}`}>
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
  );
};

export default Building;
