import React, { useRef, useState, useContext } from "react";
import Dice from "./dice";
import SkipTurn from "../options/skipturn";
import rolledNumbers from "../context/rolled-numbers";
import players from "../context/players";
import { arrayEquals } from "../building/building.js";
import SpecialItemModal from "../options/special-items/special-item-modal";

const DiceModal = () => {
  const [open, setOpen] = useState(false);
  const dice1 = useRef();
  const dice2 = useRef();
  const { setRolledNumbers } = useContext(rolledNumbers);
  const { setHasPlayed } = useContext(players);

  const [specialItem, setSpecialItem] = useState("");
  const [specialItemModalVisibility, setSpecialItemModalVisibility] =
    useState(false);

  function rollDice() {
    const results = [];
    results.push(getRandomNumber(1, 6));
    results.push(getRandomNumber(1, 6));

    toggleClasses(dice1.current);
    toggleClasses(dice2.current);
    dice1.current.dataset.roll = results[0];
    dice2.current.dataset.roll = results[1];

    const double6 = [6, 6];
    const double5 = [5, 5];

    if (arrayEquals(results, double5) || arrayEquals(results, double6)) {
      setRolledNumbers(["bomb"]);
      setSpecialItem("bomb");
      setSpecialItemModalVisibility(true);
      setTimeout(() => setSpecialItemModalVisibility(false), 3000);
    } else {
      setRolledNumbers(results);
    }
  }

  return (
    <>
      <SpecialItemModal item={specialItem} show={specialItemModalVisibility} />
      <div
        className={"dice-container"}
        onClick={() => {
          rollDice([dice1, dice2]);
          setHasPlayed(true);
          setTimeout(() => setOpen(false), 2500);
        }}
      >
        <Dice ref={dice1} faceColor={"var(--red)"} dotColor={"var(--yellow)"} />
        <Dice
          ref={dice2}
          faceColor={"var(--lime)"}
          dotColor={"var(--red-shadow)"}
        />
      </div>
    </>
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
