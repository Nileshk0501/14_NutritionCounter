import React from "react";
import { BatteryLight1 } from "../../icons/BatteryLight1";
import { ColorClear } from "../../icons/ColorClear";
import { Frame39 } from "../../icons/Frame39";
import { NetworkSignalLight1 } from "../../icons/NetworkSignalLight1";
import { WifiSignalDark } from "../../icons/WifiSignalDark";
import "./style.css";

export const IphonePro = (): JSX.Element => {
  return (
    <div className="iphone-pro">
      <div className="div">
        <img className="ion-chevron-back" alt="Ion chevron back" src="/img/ion-chevron-back.png" />
        <div className="text-wrapper">Scanned Food</div>
        <div className="frame">
          <div className="text-wrapper-2">Sort by</div>
          <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
        </div>
        <div className="group">
          <img className="img" alt="Unsplash" src="/img/unsplash-gfb1ipmh6re.svg" />
          <div className="frame-2">
            <div className="text-wrapper-3">Food</div>
            <div className="text-wrapper-4">serving 02 peaces</div>
          </div>
          <div className="text-wrapper-5">48 Calories</div>
        </div>
        <div className="group-2">
          <img className="img" alt="Unsplash" src="/img/unsplash-1mubzt4zoj0.svg" />
          <div className="frame-3">
            <div className="text-wrapper-3">Food</div>
            <div className="text-wrapper-4">serving 02 peaces</div>
          </div>
          <div className="text-wrapper-6">38 Calories</div>
        </div>
        <div className="group-3">
          <img className="img" alt="Unsplash hyugkppbikw" src="/img/unsplash-hyugkppbikw.svg" />
          <div className="frame-4">
            <div className="text-wrapper-3">Food</div>
            <div className="text-wrapper-4">serving 02 peaces</div>
          </div>
          <div className="text-wrapper-7">80 Calories</div>
        </div>
        <Frame39 className="frame-39" />
        <div className="frame-5">
          <img className="img-2" alt="Octicon home" src="/img/octicon-home-16.svg" />
          <div className="img-2">
            <div className="overlap-group">
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
            </div>
          </div>
          <img className="img-2" alt="Icon park outline" src="/img/icon-park-outline-upload-logs.svg" />
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
