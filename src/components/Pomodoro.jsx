import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "./Button";
import { SettingsContext } from "../context/SettingsContext";

const PomodoroWrapper = styled.div`
  color: var(--bs-light);
  padding: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    min-height: 80vh;

    .inputs-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .timer-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 8rem;
        width: 8rem;
        padding: 1rem;
        background-color: var(--bs-dark-blue);
        box-shadow: 5px 4px 26px rgba(0, 0, 0, 0.6);
        border-radius: 50%;

        label {
          color: var(--bs-light);
          font-size: 0.8rem;
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
          -webkit-appearance: none;
        }
        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
      }
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      button {
        color: var(--bs-light);
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 3rem;
        background-color: var(--bs-dark-blue);
        min-width: 7rem;
        cursor: pointer;
      }

      button.active {
        color: var(--bs-dark-blue);
        background-color: var(--bs-primary);
      }

      .active-label {
        color: var(--bs-light);
        background-color: var(--bs-primary);
        border: none;
      }
    }

    .options-wrapper {
      list-style: none;
      display: flex;
      gap: 1rem;
      font-size: 1rem;
    }

    .timers-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .time-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8rem;
        width: 8rem;
        border-radius: 7.5rem;
        color: var(--bs-light);
        background: var(--bs-secondary);
        font-size: 1.3rem;
        box-shadow: 5px 4px 16px rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

const Pomodoro = ({ pageTitle }) => {
  const {
    pomodoro,
    executing,
    startAnimate,
    startTimer,
    pauseTimer,
    stopAnimate,
    setCurrentTimer,
    children,
    newTimer,
    handleChange,
    handleSubmit,
    primaryColor,
    secondaryColor,
  } = useContext(SettingsContext);

  return (
    <PomodoroWrapper className="pomodoro-wrapper">
      <div className="container">
        <div className="page-title">
          <h1>{pageTitle}</h1>
        </div>

        <form noValidate onSubmit={handleSubmit} className="inputs-wrapper">
          <div className="timer-input">
            <label>Work</label>
            <input
              type="number"
              name="work"
              onChange={handleChange}
              value={newTimer.work}
              className="input"
            />
          </div>

          <div className="timer-input">
            <label>Short Break</label>
            <input
              type="number"
              name="shortBreak"
              onChange={handleChange}
              value={newTimer.short}
              className="input"
            />
          </div>

          <div className="timer-input">
            <label>Long Break</label>
            <input
              type="number"
              name="longBreak"
              onChange={handleChange}
              value={newTimer.long}
              className="input"
            />
          </div>
        </form>

        <div className="buttons-wrapper">
          <Button
            title="Start"
            activeClass={startAnimate && "active-label"}
            _callback={startTimer}
          />

          <Button
            title="Pause"
            activeClass={!startAnimate && "active-label"}
            _callback={pauseTimer}
          />
        </div>

        {/* <ul className="options-wrapper">
          <li>
            <Button
              title="Work"
              activeClass={executing.active === "work" && "active-label"}
              _callback={() => setCurrentTimer("work")}
            />
          </li>

          <li>
            <Button
              title="Short Break"
              activeClass={executing.active === "short" && "active-label"}
              _callback={() => setCurrentTimer("short")}
            />
          </li>

          <li>
            <Button
              title="Long Break"
              activeClass={executing.active === "long" && "active-label"}
              _callback={() => setCurrentTimer("long")}
            />
          </li>
        </ul> */}

        <div className="timers-wrapper">
          <div className="time-wrapper">
            <CountdownCircleTimer
              isPlaying={startAnimate}
              duration={pomodoro * 60}
              colors={primaryColor}
              size={100}
              strokeWidth={5}
              trailColor={secondaryColor}
              onComplete={() => {
                stopAnimate();
              }}
            >
              {children}
            </CountdownCircleTimer>
          </div>

          <div className="time-wrapper">
            <CountdownCircleTimer
              isPlaying={startAnimate}
              duration={pomodoro * 60}
              colors={primaryColor}
              size={100}
              strokeWidth={5}
              trailColor={secondaryColor}
              onComplete={() => {
                stopAnimate();
              }}
            >
              {children}
            </CountdownCircleTimer>
          </div>

          <div className="time-wrapper">
            <CountdownCircleTimer
              isPlaying={startAnimate}
              duration={pomodoro * 60}
              colors={primaryColor}
              size={100}
              strokeWidth={5}
              trailColor={secondaryColor}
              onComplete={() => {
                stopAnimate();
              }}
            >
              {children}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </PomodoroWrapper>
  );
};

export default Pomodoro;
