import React from "react";
import "./styles/css/styles.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import CountdownTimer from "./components/CountdownTimer";
import Stopwatch from "./components/Stopwatch";
import Pomodoro from "./components/Pomodoro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

const AppWrapper = styled.div`
  background-color: var(--bs-secondary);
  color: var(--bs-light);
`;

function App() {
  return (
    <AppWrapper className="app-wrapper">
      <header>
        <Header />
      </header>

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
          <Route path="/pomodoro" element={<Pomodoro pageTitle="Pomodoro" />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </AppWrapper>
  );
}

export default App;
