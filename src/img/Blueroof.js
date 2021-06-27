import * as React from "react";

function SvgBlueroof(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 84.71" {...props}>
      <defs>
        <style>{".blueroof_svg__b{fill:#3074dc}"}</style>
      </defs>
      <path
        fill="#1653b4"
        d="M240 70.59V56.47H84.71V42.35H240V28.23H84.71V14.12H42.35v14.11H14.12V14.12H0v70.59H84.71V70.59H240z"
      />
      <path
        className="blueroof_svg__b"
        d="M84.71 70.59v14.12H240V70.59H84.71z"
      />
      <path
        fill="none"
        stroke="#3074dc"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0}
        d="M70.59 84.71h14.12"
      />
      <path
        className="blueroof_svg__b"
        d="M84.71 42.35H240v14.12H84.71zM240 28.23V14.12h-14.12V0h-14.12v14.12H98.82V0H84.71V28.23H240z"
      />
    </svg>
  );
}

export default SvgBlueroof;
