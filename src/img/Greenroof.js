import * as React from "react";

function SvgGreenroof(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" {...props}>
      <defs>
        <style>
          {
            ".greenroof_svg__f{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:0}.greenroof_svg__c{fill:#74afa6}.greenroof_svg__d{fill:#e1622e}.greenroof_svg__f{stroke:#d1f0e9}.greenroof_svg__g{fill:#d1f0e9}"
          }
        </style>
      </defs>
      <path fill="#3f8d8a" d="M60 110v-10H0v70h10v-60h10v60h30v-60h10z" />
      <path
        stroke="#74afa6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0}
        d="M40 170H20"
      />
      <path
        className="greenroof_svg__c"
        d="M10 110h10v60H10zM50 110h10v60H50zM0 80h60v20H0zM200 20v50h10V20h-10zM170 20v50h10V20h-10zM90 20h10v50H90zM70 50h10v20H70zM50 20h10v50H50zM110 30h10v30h-10zM140 30h10v40h-10zM70 20h10v20H70zM130 20h10v10h-10z"
      />
      <path
        className="greenroof_svg__d"
        d="M220 20h-10v50h20V60h-10V20zM190 60V50h10V40h-10V30h10V20h-20v50h20V60h-10zM140 20v10h10v40h10V30h10V20h-30zM100 20v50h30V20zm20 40h-10V30h10zM80 20v20H70V20H60v50h10V50h10v20h10V20H80zM180 0h10v10h-10zM160 0h10v10h-10zM140 0h10v10h-10zM120 0h10v10h-10zM100 0h10v10h-10z"
      />
      <path
        d="M60 100v10h10v60h50v-60h10v60h30v-60h20v60h50v-70zm150 60v-50h10v50z"
        fill="#a9dbd0"
      />
      <path
        className="greenroof_svg__f"
        d="M220 170h-20M120 170H80M190 170h-10M130 170h30"
      />
      <path
        className="greenroof_svg__g"
        d="M160 110h20v60h-20zM120 110h10v60h-10zM60 110h10v60H60zM210 110h10v50h-10zM60 80h170v20H60z"
      />
    </svg>
  );
}

export default SvgGreenroof;
