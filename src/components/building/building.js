import React, { useContext, useEffect, useState } from "react";
import Story from "./story";
import rolledNumbers from "../context/rolled-numbers";
import gameOver from "../context/gameover";
import "../../App.css";

const Building = ({ team, color }) => {
  const { numbers } = useContext(rolledNumbers);
  const { setWinner } = useContext(gameOver);
  const [stories, setStories] = useState(9);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (stories === 0) setWinner(team);
  }, [stories, setWinner, team]);

  function handleClickAnimation() {
    setStories(stories - 1);
    setTimeout(() => setClicked(true), 1100);
    setTimeout(() => setClicked(false), 3000);
  }

  return (
    <div className={`building ${clicked ? "shake" : ""}`}>
      <Story
        number={1}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={2}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={3}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={4}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={5}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={6}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={7}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={8}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
      <Story
        number={9}
        selectable={numbers}
        callback={() => handleClickAnimation()}
        building={color}
        team={team}
      />
    </div>
  );
};

export default Building;
