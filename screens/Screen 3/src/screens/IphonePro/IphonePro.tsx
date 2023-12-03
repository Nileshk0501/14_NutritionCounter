import React from "react";
import { BatteryLight1 } from "../../icons/BatteryLight1";
import { ColorClear } from "../../icons/ColorClear";
import { NetworkSignalLight1 } from "../../icons/NetworkSignalLight1";
import { WifiSignalDark } from "../../icons/WifiSignalDark";
import "./style.css";

export const IphonePro = (): JSX.Element => {
  return (
    <div className="iphone-pro">
      <div className="div">
        <img className="frame" alt="Frame" src="/img/frame-40.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper">+</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">+</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-3">+</div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-4">Done</div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-5">Scan More</div>
        </div>
        <div className="frame-6">
          <img className="img" alt="Octicon home" src="/img/octicon-home-16.svg" />
          <div className="img">
            <div className="overlap-group">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
            </div>
          </div>
          <img className="img" alt="Icon park outline" src="/img/icon-park-outline-upload-logs.svg" />
        </div>
        <div className="status-bar">
          <div className="overlap">
            <img className="notch" alt="Notch" src="/img/notch-2.png" />
            <div className="status-icons">
              <NetworkSignalLight1 className="network-signal-light" />
              <WifiSignalDark className="wifi-signal-light" color="black" />
              <BatteryLight1 className="battery-light" />
            </div>
            <ColorClear className="time-light" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
