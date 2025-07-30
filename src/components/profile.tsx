import { useEffect, useState } from "react";
import { IProfile } from "../data-interface/data.interface";

export default function Profile(profile: IProfile) {
  const [formattedTime, setFormattedTime] = useState("");

  const updateDateTime = () => {
    const now: Date = new Date();
    const temp: string =
      now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }) +
      " " +
      now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setFormattedTime(temp);
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(() => {
      updateDateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="acc-right-top-container">
      <div className="acc-right-top-label">
        <label className="acc-right-top-label-timestamp">
          {formattedTime}
        </label>
      </div>

      <div className="acc-right-top-label">
        <label className="acc-right-top-label-title">Branch</label>
        <label className="acc-right-top-label-value"> {profile.branch}</label>
      </div>
      <div className="acc-right-top-label">
        <label className="acc-right-top-label-title">ATM ID</label>
        <label className="acc-right-top-label-value">
          {" "}
          {profile.terminalId}
        </label>
      </div>
    </div>
  );
}
