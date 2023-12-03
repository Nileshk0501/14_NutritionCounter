/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Notch2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`notch-2 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 375 30"
      width="375"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M101.267 30H121V0H77C80.0928 0 82.6 2.50719 82.6 5.6V11.3333C82.6 21.6426 90.9574 30 101.267 30Z"
        fill="black"
      />
      <rect className="rect" fill="black" height="30" width="133" x="121" />
      <path
        className="path"
        d="M273.733 30H254V0H298C294.907 0 292.4 2.50719 292.4 5.6V11.3333C292.4 21.6426 284.043 30 273.733 30Z"
        fill="black"
      />
    </svg>
  );
};
