import "./App.css";

import { useContext } from "react";

import TeamsContainer from "./components/team/teams-container";

import rolledNumbers, {
  useRolledNumbers,
} from "./components/context/rolled-numbers";

import gameOver from "./components/context/gameover";
import DiceModal from "./components/dice/dice-modal";

function App() {
  const { blur } = useContext(gameOver);
  const rolledNumbersHook = useRolledNumbers();

  return (
    <div className={`App ${blur ? "blur" : ""}`}>
      <rolledNumbers.Provider value={rolledNumbersHook}>
        <DiceModal />
        <TeamsContainer />
      </rolledNumbers.Provider>
    </div>
  );
}

export default App;
