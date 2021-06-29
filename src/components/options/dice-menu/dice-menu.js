import React, { useState, useContext, useEffect } from "react";
import SvgDice from "./diceIcon";
import CloseIcon from "../closeIcon";
import DiceModal from "../../dice/dice-modal";
import SkipTurn from "../skipturn";
import gameOver from "../../context/gameover";
import SvgStart from "../tooltip/start-arrow";

const DiceMenu = () => {
  const [opened, setOpened] = useState(false);
  const [showToolTip, setShowToolTip] = useState(true);
  const { scores } = useContext(gameOver);

  return (
    <>
      {showToolTip && (
        <div className={"tooltip wobble-horizontal"}>
          <SvgStart />
        </div>
      )}
      <div className={`dice-menu ${opened ? "opened" : ""}`}>
        {opened ? (
          ""
        ) : (
          <SvgDice
            onClick={() => {
              showToolTip && setShowToolTip(false);
              setOpened(true);
            }}
          />
        )}
        {opened ? <CloseIcon handleClick={() => setOpened(false)} /> : ""}
        {opened ? <DiceModal /> : ""}
        {opened ? <SkipTurn /> : ""}
      </div>
    </>
  );
};

export default DiceMenu;
