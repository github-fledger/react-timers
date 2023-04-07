import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  MdOutlineNotStarted,
  MdOutlinePauseCircleOutline,
  MdOutlineStopCircle,
} from "react-icons/md";

const CountdownTimer = ({ pageTitle }) => {
  const secondsInOneHour = 3600;
  const secondsInOneMinute = 60;

  const primaryColor = "#ea605e";
  const secondaryColor = "#151932";
  const tertiaryColor = "#80b895";
  const lightColor = "#f8f9fa";
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
    <div className="countdown-wrapper">
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

        <div className="countdown-buttons buttons-wrapper">
          {!isRunning && (
            <button className="btn btn-green" onClick={startTimer}>
              <MdOutlineNotStarted />
            </button>
          )}

          {isRunning && (
            <button className="btn btn-yellow" onClick={pauseTimer}>
              <MdOutlinePauseCircleOutline />
            </button>
          )}

          <button className="btn btn-red" onClick={stopTimer}>
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
    </div>
  );
};

export default CountdownTimer;
