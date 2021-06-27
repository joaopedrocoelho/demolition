import * as React from "react";

function SvgGreenground(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 100" {...props}>
      <defs>
        <style>
          {".greenground_svg__b{fill:#74afa6}.greenground_svg__c{fill:#d1f0e9}"}
        </style>
      </defs>
      <path
        fill="#3f8d8a"
        d="M100 10H80v30h10v60h30V40h10v60h30V40h10v60h30V40h10V30h30V20H100V10z"
      />
      <path
        className="greenground_svg__b"
        d="M200 40h10v60h-10zM120 40h10v60h-10zM60 100V0H0v100h60zM160 40h10v60h-10zM80 40h10v60H80zM100 20h140V10H100v10z"
      />
      <path
        className="greenground_svg__c"
        d="M210 40v60h20V30h-20v10zM80 100V10h150V0H60v100h20z"
      />
    </svg>
  );
}

export default SvgGreenground;
