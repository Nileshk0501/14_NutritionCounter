import React from "react";
import { MealLog } from "../../components/MealLog";
import { BatteryLight } from "../../icons/BatteryLight";
import { ColorClear } from "../../icons/ColorClear";
import { NetworkSignalLight } from "../../icons/NetworkSignalLight";
import { WifiSignalDark } from "../../icons/WifiSignalDark";
import "./style.css";

export const IphonePro = (): JSX.Element => {
  return (
    <div className="iphone-pro">
      <div className="div-2">
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-12.png" />
        <img className="uil-setting" alt="Uil setting" src="/img/uil-setting.svg" />
        <div className="frame">
          <img className="img" alt="Group" src="/img/group-626509.png" />
          <img className="group-2" alt="Group" src="/img/group-626504.png" />
          <img className="group-3" alt="Group" src="/img/group-626505.png" />
        </div>
        <div className="text-wrapper-3">Today’s stats</div>
        <MealLog
          className="meal-log-instance"
          divClassName="design-component-instance-node"
          divClassNameOverride="meal-log-7"
          elementClassName="meal-log-2"
          ellipse="/img/ellipse-5.png"
          ellipseClassName="meal-log-4"
          groupClassName="meal-log-5"
          overlapClassName="meal-log-3"
          overlapGroupClassName="meal-log-6"
          text="0.4"
        />
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="p">Hi there! Ready to Scan</p>
                <p className="the-label-and-know">
                  <span className="text-wrapper-4">&nbsp;</span>
                  <span className="text-wrapper-5">the label</span>
                  <span className="text-wrapper-4">&nbsp;</span>
                  <span className="text-wrapper-5">and know your food?</span>
                </p>
              </div>
            </div>
            <img className="untitled-design" alt="Untitled design" src="/img/untitled-design-1.png" />
            <div className="frame-2">
              <div className="fluent-scan-dash">
                <div className="text-wrapper-6">Scan product</div>
              </div>
              <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-upload.svg" />
            </div>
          </div>
        </div>
        <div className="frame-3">
          <img className="img-2" alt="Octicon home" src="/img/octicon-home-16.svg" />
          <img className="img-2" alt="Bx qr scan" src="/img/bx-qr-scan.svg" />
          <img className="img-2" alt="Icon park outline" src="/img/icon-park-outline-upload-logs.svg" />
        </div>
        <div className="status-bar">
          <div className="overlap-3">
            <img className="notch" alt="Notch" src="/img/notch-1.png" />
            <div className="status-icons">
              <NetworkSignalLight className="network-signal-light" />
              <WifiSignalDark className="wifi-signal-light" color="black" />
              <BatteryLight className="battery-light" />
            </div>
            <ColorClear className="time-light" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
