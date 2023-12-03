import React from "react";
import { BatteryDark1 } from "../../icons/BatteryDark1";
import { NetworkSignalDark1 } from "../../icons/NetworkSignalDark1";
import { Property13Bars1 } from "../../icons/Property13Bars1";
import { Property1Default } from "../../icons/Property1Default";
import { TimeLight } from "../../icons/TimeLight";
import "./style.css";

export const IphonePro = (): JSX.Element => {
  return (
    <div className="iphone-pro">
      <div className="div">
        <div className="overlap">
          <img className="image" alt="Image" src="/img/image-1.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="img" alt="Group" src="/img/group-1.png" />
            </div>
          </div>
          <div className="rectangle-2" />
          <div className="text-wrapper">Scanning</div>
          <div className="rectangle-3" />
          <Property1Default className="frame" color="url(#paint0_angular_235_1219)" />
        </div>
        <div className="frame-2">
          <img className="img-2" alt="Octicon home" src="/img/octicon-home-16.svg" />
          <div className="img-2">
            <div className="overlap-group-2">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
            </div>
          </div>
          <img className="img-2" alt="Icon park outline" src="/img/icon-park-outline-upload-logs.svg" />
        </div>
        <div className="status-bar">
          <div className="overlap-2">
            <img className="notch" alt="Notch" src="/img/notch-2.png" />
            <div className="status-icons">
              <NetworkSignalDark1 className="network-signal-dark" />
              <Property13Bars1 className="wifi-signal-dark" color="white" />
              <BatteryDark1 className="battery-dark" />
            </div>
            <TimeLight className="time-dark" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
