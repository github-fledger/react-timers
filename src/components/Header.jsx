import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsStopwatch } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { GiTomato } from "react-icons/gi";

const HeaderWrapper = styled.div`
  padding: 1rem;

  ul.nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
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
          <NavLink to="/pomodoro">
            <GiTomato />
          </NavLink>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
