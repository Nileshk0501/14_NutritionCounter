/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "variant-3" | "default";
  className: any;
  divClassName: any;
}

export const Element = ({ property1, className, divClassName }: Props): JSX.Element => {
  return (
    <div className={`element ${className}`}>
      <div className={`element-gm ${divClassName}`}>
        {property1 === "default" && <>100gm</>}

        {property1 === "variant-2" && <>100gm|</>}

        {property1 === "variant-3" && <>|</>}
      </div>
    </div>
  );
};

Element.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
