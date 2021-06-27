import React, { useRef, useState, useContext } from "react";
import Dice from "./dice";
import SkipTurn from "../options/skipturn";
import rolledNumbers from "../context/rolled-numbers";

const DiceModal = () => {
  const [open, setOpen] = useState(false);
  const dice1 = useRef();
  const dice2 = useRef();
  const { setRolledNumbers } = useContext(rolledNumbers);

  function rollDice() {
    const results = [];
    results.push(getRandomNumber(1, 6));
    results.push(getRandomNumber(1, 6));
    toggleClasses(dice1.current);
    toggleClasses(dice2.current);
    dice1.current.dataset.roll = results[0];
    dice2.current.dataset.roll = results[1];
    console.log(dice1.current.dataset.roll, dice2.current.dataset.roll);

    setRolledNumbers(results);
  }

  return (
    <div className={`dice-modal ${open ? "open" : ""}`}>
      <SkipTurn />
      <div
        className={"dice-container"}
        onClick={() => {
          rollDice([dice1, dice2]);
          setTimeout(() => setOpen(false), 2500);
        }}
      >
        <Dice ref={dice1} />
        <Dice ref={dice2} />
      </div>
      <button className={"caret"} onClick={() => setOpen(true)}>
        <span>&#9660;</span>
      </button>
    </div>
  );
};

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default DiceModal;
