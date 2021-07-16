import React from "react";
import bomb from "../../../img/bomb.png";
import worker from "../../../img/worker.png";

const SpecialItemModal = ({ item, show }) => {
  return (
    <div className={`special-item-modal ${show && `zoomInDown`}`}>
      {item === "bomb" && <h1 className={"Patua"}>Choose any story!</h1>}
      {item === "bomb" && (
        <img src={bomb} className={"special-item-image"} alt="bomb" />
      )}
      {item === "playTwice" && <h1 className={"Patua"}>Play twice!</h1>}
      {item === "playTwice" && (
        <img src={worker} className={"special-item-image"} alt="worker" />
      )}
    </div>
  );
};

export default SpecialItemModal;
