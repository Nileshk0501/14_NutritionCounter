/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  elementClassName: any;
  text: string;
  overlapClassName: any;
  ellipseClassName: any;
  ellipse: string;
  groupClassName: any;
  overlapGroupClassName: any;
  divClassNameOverride: any;
}

export const MealLog = ({
  className,
  divClassName,
  elementClassName,
  text = "0.8",
  overlapClassName,
  ellipseClassName,
  ellipse = "/img/ellipse-5-1.png",
  groupClassName,
  overlapGroupClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`meal-log ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>1 scan added today</div>
      <p className={`element ${elementClassName}`}>
        <span className="span">{text}</span>
        <span className="text-wrapper-2">kcal</span>
      </p>
      <div className={`overlap ${overlapClassName}`}>
        <img className={`ellipse ${ellipseClassName}`} alt="Ellipse" src={ellipse} />
        <div className={`group ${groupClassName}`}>
          <div className={`overlap-group ${overlapGroupClassName}`}>
            <div className={`div ${divClassNameOverride}`}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MealLog.propTypes = {
  text: PropTypes.string,
  ellipse: PropTypes.string,
};
