import "./styles/css/styles.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SettingsContextProvider from "./context/SettingsContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/layout/Homepage";
import Stopwatch from "./components/stopwatch/Stopwatch";
import CountdownTimer from "./components/countdown/CountdownTimer";
import PomodoroSingleCircle from "./components/pomodorosinglecircle/PomodoroSingleCircle";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <div className="app-wrapper">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/stopwatch"
                element={<Stopwatch pageTitle="Stopwatch" />}
              />
              <Route
                path="/countdowntimer"
                element={<CountdownTimer pageTitle="Countdown Timer" />}
              />
              <Route
                path="/pomodorosinglecircle"
                element={
                  <PomodoroSingleCircle pageTitle="Pomodoro Single Circle" />
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </SettingsContextProvider>
    </>
  );
}

export default App;
