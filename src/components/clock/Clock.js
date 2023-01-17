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
    <div>
      <h1>React Clock!</h1>
      <span>
        {dateTime
          .toTimeString()
          .substring(0, dateTime.toTimeString().indexOf(" "))}
      </span>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
