import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { GiTomato } from "react-icons/gi";

const HomepageWrapper = styled.div`
  color: var(--bs-light);
  padding: 1rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  .timers-options {
    display: flex;
    gap: 1rem;
  }

  .timer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 15rem;
    border-radius: 1rem;
    color: var(--bs-light);
    font-size: 1.4rem;
    box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }
`;

const Homepage = () => {
  return (
    <HomepageWrapper>
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
    </HomepageWrapper>
  );
};

export default Homepage;
