import React from "react";
import "./dice.css";

const Dice = React.forwardRef(
  ({ faceColor = "#115DBF", dotColor = "#F2CF63" }, ref) => {
    return (
      <ol className="die-list even-roll" data-roll="1" id="die-1" ref={ref}>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="1"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="2"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="3"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="4"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="5"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
        <li
          className="die-item"
          style={{ backgroundColor: faceColor }}
          data-side="6"
        >
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
          <span className="dot" style={{ backgroundColor: dotColor }}></span>
        </li>
      </ol>
    );
  }
);

export default Dice;
