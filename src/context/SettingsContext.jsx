import React, { createContext, useState, useEffect, useRef } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const primaryColor = "#ea605e";
  const secondaryColor = "#151932";
  const tertiaryColor = "#80b895";
  const lightColor = "#f8f9fa";
  const darkBlueColor = "#0c0e1b";

  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("focus"); // focus/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    // Decrease one sec every render
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "focus" ? "break" : "focus";
      setMode(nextMode);
      modeRef.current = nextMode;

      const nextSeconds =
        (nextMode === "focus" ? focusMinutes : breakMinutes) * 60;
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = focusMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 100);

    return () => clearInterval(interval);
  }, [focusMinutes, breakMinutes]);

  const totalSeconds = mode === "focus" ? focusMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <SettingsContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        tertiaryColor,
        lightColor,
        darkBlueColor,
        focusMinutes,
        setFocusMinutes,
        breakMinutes,
        setBreakMinutes,
        isPaused,
        setIsPaused,
        mode,
        setMode,
        secondsLeft,
        setSecondsLeft,
        secondsLeftRef,
        isPausedRef,
        modeRef,
        totalSeconds,
        percentage,
        minutes,
        seconds,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
