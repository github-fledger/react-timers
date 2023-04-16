import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineNotStarted, MdOutlinePauseCircleOutline } from 'react-icons/md';
import { SettingsContext } from '../../context/SettingsContext';

const PomodoroSingleCircle = ({ pageTitle }) => {
  const {
    primaryColor,
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
    isPausedRef,
    percentage,
    minutes,
    seconds,
  } = useContext(SettingsContext);

  return (
    <>
      <div className='pomodoro-single-circle-wrapper'>
        <div className='page-title'>
          <h1>{pageTitle}</h1>
        </div>

        <div className='sliders-wrapper'>
          <div className='slider'>
            <label className='slider-label'>
              Focus: {focusMinutes}
              {focusMinutes < 2 ? ' minute' : ' minutes'}
            </label>
            <ReactSlider
              className={'slider-bar slider-primary'}
              thumbClassName={'thumb'}
              trackClassName={'track'}
              value={focusMinutes}
              onChange={(newValue) => setFocusMinutes(newValue)}
              min={0}
              max={60}
            />
          </div>

          <div className='slider'>
            <label className='slider-label'>
              Break: {breakMinutes}
              {breakMinutes < 2 ? ' minute' : ' minutes'}
            </label>
            <ReactSlider
              className={'slider-bar slider-tertiary'}
              thumbClassName={'thumb'}
              trackClassName={'track'}
              value={breakMinutes}
              onChange={(newValue) => setBreakMinutes(newValue)}
              min={0}
              max={120}
            />
          </div>
        </div>

        <div className='buttons-wrapper'>
          {isPaused ? (
            <button
              className='btn btn-green'
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
            >
              <MdOutlineNotStarted />
            </button>
          ) : (
            <button
              className='btn btn-yellow'
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            >
              <MdOutlinePauseCircleOutline />
            </button>
          )}
        </div>

        <div className='progressbar-wrapper timer-wrapper'>
          <CircularProgressbar
            value={percentage}
            text={minutes + ':' + seconds}
            styles={buildStyles({
              textColor: lightColor,
              pathColor: mode === 'focus' ? primaryColor : tertiaryColor,
              trailColor: darkBlueColor,
              pathTransitionDuration: 0.1,
            })}
            strokeWidth={5}
            counterClockwise
          />
        </div>
      </div>
    </>
  );
};

export default PomodoroSingleCircle;
