import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopAnimate() {
    setStartAnimate(false);
  }

  const settingsButton = () => {
    setExecuting({});
    setPomodoro(0);
  };

  function setCurrentTimer(active_state) {
    updateExecute({ ...executing, active: active_state });
    setTimerTime(executing);
  }

  const updateExecute = (updateSettings) => {
    setExecuting(updateSettings);
    setTimerTime(updateSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  const primaryColor = "#ea605e";
  const secondaryColor = "#151932";
  const darkBlueColor = "#0c0e1b";

  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 30,
    active: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({ ...newTimer, work: parseInt(value) });
        break;
      case "shortBreak":
        setNewTimer({ ...newTimer, short: parseInt(value) });
        break;
      case "longBreak":
        setNewTimer({ ...newTimer, long: parseInt(value) });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        stopAnimate,
        settingsButton,
        setCurrentTimer,
        updateExecute,
        children,
        newTimer,
        setNewTimer,
        handleChange,
        handleSubmit,
        primaryColor,
        secondaryColor,
        darkBlueColor,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
