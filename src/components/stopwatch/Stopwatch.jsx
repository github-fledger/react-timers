import React, { useState, useEffect } from "react";

const Stopwatch = ({ pageTitle }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <>
      <div className="stopwatch-wrapper">
        <div className="page-title">
          <h1>{pageTitle}</h1>
        </div>

        <div className="stopwatch-container">
          <div className="stopwatch-time-display">
            <span className="time-display">
              {hours.toString().padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="time-display">
              {minutes.toString().padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="time-display">
              {seconds.toString().padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="time-display">
              {milliseconds.toString().padStart(2, "0")}
            </span>
          </div>

          <div className="buttons-wrapper">
            <button className="btn btn-green" onClick={startAndStop}>
              {isRunning ? "Stop" : "Start"}
            </button>

            <button className="btn btn-red" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
