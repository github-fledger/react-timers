import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StopwatchWrapper = styled.div`
  color: var(--bs-light);
  padding: 1rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .stopwatch-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15rem;
    width: 25rem;
    border-radius: 2.5rem;
    color: var(--bs-light);
    box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.6);
    background-color: var(--bs-dark-blue);

    .stopwatch-time-display {
      color: var(--bs-light);
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .time-display {
        width: 4rem;
      }
    }

    .stopwatch-buttons {
      display: flex;
      justify-content: center;

      button.stopwatch-button {
        margin: 20px;
        border: none;
        padding: 10px 30px;
        cursor: pointer;
        color: var(--bs-light);
      }

      button.stopwatch-button:first-child {
        background-color: var(--bs-primary);
      }

      button.stopwatch-button:last-child {
        background-color: var(--bs-secondary);
      }
    }
  }
`;

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
    <StopwatchWrapper className="stopwatch-wrapper">
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

        <div className="stopwatch-buttons">
          <button className="stopwatch-button" onClick={startAndStop}>
            {isRunning ? "Stop" : "Start"}
          </button>

          <button className="stopwatch-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </StopwatchWrapper>
  );
};

export default Stopwatch;
