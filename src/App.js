import "./App.css";

import { useContext, useEffect } from "react";

import TeamsContainer from "./components/team/teams-container";
import DiceMenu from "./components/options/dice-menu/dice-menu";

import EndGameMenu from "./components/options/end-game-menu/endgame-menu";

import rolledNumbers, {
  useRolledNumbers,
} from "./components/context/rolled-numbers";

import gameOver from "./components/context/gameover";

function App() {
  const { blur } = useContext(gameOver);
  const rolledNumbersHook = useRolledNumbers();

  useEffect(() => {
    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "show warning";
    }
  }, []);

  return (
    <div className={`App ${blur ? "blur" : ""}`}>
      <rolledNumbers.Provider value={rolledNumbersHook}>
        <DiceMenu />
        <EndGameMenu />
        <TeamsContainer />
      </rolledNumbers.Provider>
    </div>
  );
}

export default App;
