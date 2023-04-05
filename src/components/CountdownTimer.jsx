import React, { useState } from "react";
import styled from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  MdOutlineNotStarted,
  MdOutlinePauseCircleOutline,
  MdOutlineStopCircle,
} from "react-icons/md";

const CountdownWrapper = styled.div`
  color: var(--bs-light);
  padding: 1rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .timer-controls {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    .inputs-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      .timer-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 7rem;
        width: 7rem;
        padding: 1rem;
        background-color: var(--bs-dark-blue);
        box-shadow: 5px 4px 26px rgba(0, 0, 0, 0.6);
        border-radius: 50%;

        label {
          color: var(--bs-light);
          font-size: 1rem;
        }

        input {
          color: var(--bs-light);
          background-color: var(--bs-dark-blue);
          border: none;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          width: 70%;
          padding: 0rem;
          border-radius: 0.3rem;
        }
        input:focus {
          outline: none;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          display: none;
          /* -webkit-appearance: none; */
          /* margin: 0; */
        }

        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
      }
    }

    .buttons-wrapper {
      display: flex;
      justify-content: center;
      gap: 1rem;

      .btn {
        font-size: 2rem;
        width: 5rem;
        margin: 0;
        padding: 0rem 0.5rem;
        border: none;
        border-radius: 0.3rem;
        box-shadow: 5px 4px 16px rgba(0, 0, 0, 0.6);
        transition: 0.3s ease;
      }

      .btn:hover,
      .btn-accept:hover,
      .btn-warning:hover {
        cursor: pointer;
        box-shadow: 5px 4px 16px rgba(0, 0, 0, 0.6);
        transition: 0.3s ease;
      }

      .btn-accept {
        background-color: var(--bs-dark-blue);
        color: var(--bs-light);
      }
      .btn-accept:hover {
        background: var(--bs-secondary);
      }

      .btn-danger {
        background-color: var(--bs-danger);
        color: var(--bs-light);
      }
      .btn-danger:hover {
        background: var(--bs-primary);
      }

      .btn-warning {
        background-color: var(--bs-warning);
        color: var(--bs-light);
      }
      .btn-warning:hover {
        background: rgba(255, 193, 7, 0.75);
      }
    }
  }

  .timer-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 15rem;
    border-radius: 7.5rem;
    color: var(--bs-light);
    font-size: 2rem;
    box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.6);
    background-color: var(--bs-dark-blue);
  }
`;

const CountdownTimer = ({ pageTitle }) => {
  const secondsInOneHour = 3600;
  const secondsInOneMinute = 60;

  const primaryColor = "#ea605e";
  const secondaryColor = "#151932";
  const darkBlueColor = "#0c0e1b";

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);

  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setTimerFinished(false);
      setIsRunning(true);
    } else {
      window.alert("Please, add time");
    }
  }
  function pauseTimer() {
    setIsRunning(false);
  }
  function stopTimer() {
    setIsRunning(false);
    setKey(key + 1);
    setTimerFinished(false);
  }

  function finishTimer() {
    stopTimer();
    setTimerFinished(true);
  }

  const totalSeconds =
    hours !== "" && minutes !== "" && seconds !== ""
      ? hours * secondsInOneHour + minutes * secondsInOneMinute + seconds
      : 1;

  const toStringWithTwoDigits = (n) => (n > 9 ? "" + n : "0" + n);

  const formatRemainingTime = ({ remainingTime }) => {
    let time = remainingTime;
    const hours = Math.floor(time / secondsInOneHour);
    time -= hours * secondsInOneHour;
    const minutes = Math.floor(time / secondsInOneMinute);
    time -= minutes * secondsInOneMinute;
    const seconds = time % secondsInOneMinute;

    return (
      toStringWithTwoDigits(hours) +
      ":" +
      toStringWithTwoDigits(minutes) +
      ":" +
      toStringWithTwoDigits(seconds)
    );
  };

  return (
    <CountdownWrapper className="countdown-wrapper">
      <div className="page-title">
        <h1>{pageTitle}</h1>
      </div>

      <div className="timer-controls">
        <div className="inputs-wrapper">
          <div className="timer-input">
            <label>hours</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(+e.target.value)}
              onFocus={() => setHours("")}
              onBlur={() => (hours === "" ? setHours(0) : setHours(hours))}
            />
          </div>

          <div className="timer-input">
            <label>minutes</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(+e.target.value)}
              onFocus={() => setMinutes("")}
              onBlur={() =>
                minutes === "" ? setMinutes(0) : setMinutes(minutes)
              }
            />
          </div>

          <div className="timer-input">
            <label>seconds</label>
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(+e.target.value)}
              onFocus={() => setSeconds("")}
              onBlur={() =>
                seconds === "" ? setSeconds(0) : setSeconds(seconds)
              }
            />
          </div>
        </div>

        <div className="buttons-wrapper">
          {!isRunning && (
            <button className="btn btn-accept" onClick={startTimer}>
              <MdOutlineNotStarted />
            </button>
          )}

          {isRunning && (
            <button className="btn btn-warning" onClick={pauseTimer}>
              <MdOutlinePauseCircleOutline />
            </button>
          )}

          <button className="btn btn-danger" onClick={stopTimer}>
            <MdOutlineStopCircle />
          </button>
        </div>
      </div>

      <div
        className={`timer-wrapper ${
          timerFinished ? "bg-primary" : "bg-dark-blue"
        }`}
      >
        <CountdownCircleTimer
          key={key}
          isPlaying={isRunning}
          duration={totalSeconds}
          colors={primaryColor}
          strokeWidth={6}
          trailStrokeWidth={0}
          strokeLinecap="round"
          trailColor={darkBlueColor}
          onComplete={() => finishTimer()}
        >
          {formatRemainingTime}
        </CountdownCircleTimer>
      </div>
    </CountdownWrapper>
  );
};

export default CountdownTimer;
