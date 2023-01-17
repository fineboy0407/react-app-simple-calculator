import React, { useState } from "react";
import "../../css/clock.css";

export default function App() {
  const [dateTime, setDateTime] = useState(new Date());

  const startTimer = (e) => {
    window.timerId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
  };

  const stopTimer = () => {
    console.log("timer after create", window.timerId);
    clearInterval(window.timerId);
  };

  return (
    <div className="clock-container">
      <h1>Time is now!</h1>
      <span className="clock-time">
        {dateTime
          .toTimeString()
          .substring(0, dateTime.toTimeString().indexOf(" "))}
      </span>
      <br />
      <div className="clock-buttons-container">
        <button className="btn btn-success" onClick={startTimer}>
          Start
        </button>
        <button className="btn btn-danger" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
}
