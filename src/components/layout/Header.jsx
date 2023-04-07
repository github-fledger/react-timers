import React from "react";
import { NavLink } from "react-router-dom";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsStopwatch } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { GiTomato } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header className="header-wrapper">
        <ul className="nav">
          <li className="nav-item fs-1">
            <NavLink to="/">
              <RiHomeSmileLine />
            </NavLink>
          </li>

          <li className="nav-item fs-1">
            <NavLink to="/stopwatch">
              <BsStopwatch />
            </NavLink>
          </li>

          <li className="nav-item fs-1">
            <NavLink to="/countdowntimer">
              <RxCountdownTimer />
            </NavLink>
          </li>

          <li className="nav-item fs-1">
            <NavLink to="/pomodorosinglecircle">
              <GiTomato />
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
