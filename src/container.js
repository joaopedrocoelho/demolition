import React from "react";
import App from "./App";
import gameOver, { useGameOver } from "./components/context/gameover";
import Modal from "./components/options/modal";
import GameOverModal from "./components/options/gameover-modal";
import players, { usePlayers } from "./components/context/players";

const Container = () => {
  const gameOverHook = useGameOver();
  const playersHook = usePlayers();

  return (
    <gameOver.Provider value={gameOverHook}>
      <players.Provider value={playersHook}>
        <App />
        <Modal />
        <GameOverModal />
      </players.Provider>
    </gameOver.Provider>
  );
};

export default Container;
