/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BatteryDark = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`battery-dark ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 25 12"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.43814 7.07668H11.5825L9.93814 11.32C9.70103 11.9319 10.3454 12.2505 10.7629 11.76L15.8454 5.70609C15.9485 5.5847 16 5.46332 16 5.33183C16 5.09918 15.8144 4.92722 15.5619 4.92722H12.4175L14.0567 0.678888C14.2938 0.0719831 13.6495 -0.2517 13.2371 0.238882L8.14948 6.29276C8.04639 6.4192 8 6.53552 8 6.66702C8 6.90472 8.18557 7.07668 8.43814 7.07668Z"
        fill="white"
      />
      <path
        className="path"
        d="M11.2913 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H8.9903C8.87448 11.3232 8.85634 11.6779 8.94958 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0H12.1317L11.2913 1Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        d="M12.7066 11H20C21.1046 11 22 10.1046 22 9V3C22 1.89543 21.1046 1 20 1H15.0042C15.1211 0.67563 15.1385 0.321297 15.045 0H20C21.6569 0 23 1.34315 23 3V9C23 10.6569 21.6569 12 20 12H11.8671L12.7066 11Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        d="M24 4C24.5523 4 25 4.44772 25 5V7C25 7.55228 24.5523 8 24 8V4Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
      />
      <path
        className="path"
        d="M7.37915 5.65512L10.4509 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44771 10 3 10H9.3772L10.1225 8.07672H8.43814C7.70024 8.07672 7 7.52171 7 6.66706C7 6.25458 7.16151 5.92205 7.37446 5.66088L7.37915 5.65512Z"
        fill="#34C759"
      />
      <path
        className="path"
        d="M13.8754 3.92727L14.619 2H20.0002C20.5525 2 21.0002 2.44772 21.0002 3V9C21.0002 9.55228 20.5525 10 20.0002 10H13.5464L16.6099 6.35091C16.8246 6.09729 17.0002 5.75553 17.0002 5.33187C17.0002 4.47437 16.2915 3.92727 15.5621 3.92727H13.8754Z"
        fill="#34C759"
      />
      <path
        className="path"
        d="M10.4509 2L7.37915 5.65512L7.37446 5.66088C7.16151 5.92205 7 6.25458 7 6.66706C7 7.52171 7.70024 8.07672 8.43814 8.07672H10.1225L9.3772 10H3C2.44771 10 2 9.55228 2 9V3C2 2.44772 2.44772 2 3 2H10.4509Z"
        fill="#34C759"
      />
      <path className="path" d="M5 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44771 10 3 10H5V2Z" fill="#FFD60A" />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 0H20C21.6569 0 23 1.34315 23 3V9C23 10.6569 21.6569 12 20 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0ZM3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H20C21.1046 11 22 10.1046 22 9V3C22 1.89543 21.1046 1 20 1H3Z"
        fill="#EBEBF5"
        fillOpacity="0.3"
        fillRule="evenodd"
      />
      <rect className="rect" fill="white" height="8" rx="1" width="19" x="2" y="2" />
    </svg>
  );
};
