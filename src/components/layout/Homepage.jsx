import React from "react";
import { NavLink } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { GiTomato } from "react-icons/gi";

const Homepage = () => {
  return (
    <>
      <div className="homepage-wrapper">
        <div className="page-title">
          <h1>React Timers</h1>
        </div>

        <div className="homepage-content">
          <div className="timers-options">
            <NavLink to="/stopwatch" className="timer-wrapper">
              <BsStopwatch className="display-3 primary" />
              <span>Stopwatch</span>
            </NavLink>

            <NavLink to="/countdowntimer" className="timer-wrapper">
              <RxCountdownTimer className="display-3 primary" />
              <span>Countdown Timer</span>
            </NavLink>

            <NavLink to="/pomodoro" className="timer-wrapper">
              <GiTomato className="display-3 primary" />
              <span>Pomodoro</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
