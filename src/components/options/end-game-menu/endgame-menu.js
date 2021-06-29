import React, { useState } from "react";

import CloseIcon from "../closeIcon";
import EndGameBtn from "./end-game-btn";
import EndGameIcon from "./end-game-icon";

const EndGameMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`end-game-menu ${opened ? "opened-right" : ""}`}>
      {opened ? (
        ""
      ) : (
        <EndGameIcon
          className={"end-game-icon"}
          onClick={() => setOpened(true)}
        />
      )}
      {opened ? <CloseIcon handleClick={() => setOpened(false)} /> : ""}
      {opened ? <EndGameBtn /> : ""}
    </div>
  );
};

export default EndGameMenu;
