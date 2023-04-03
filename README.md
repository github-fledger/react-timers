# React Timers Guide Notes

## Main Features

1. Interactivity: ReactJS
2. Structure: HTML
3. Styles: CSS + Bootstrap + SCSS/SASS

## If starting from scratch:

- Run: `npx create-react-app yourProjectName`
- Clean up extra files
- Check if it's running: `npm start`

### NPM Modules to install:

#### SASS

- Install: `npm i sass --save-dev`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Create directories inside src folder:
  - styles
    - css
    - scss + `styles.scss` file
- Import inside App.js: `import './styles/css/styles.css';`
- Run sass: `npm run sass`

#### Concurrently (npm start + npm run sass + npm run server)

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE OR THE OTHER SCRIPTS):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`

#### React Router Dom

- React Router Dom: `npm i react-router-dom`

#### Styled components

- Styled components: `npm i styled-components`

#### Bootstrap

- Bootstrap: `npm i bootstrap`

#### Icons

- React icons: `npm i react-icons`

#### React Circular Progress Bar

- React circular progress bar: `npm i react-circular-progressbar --save-dev`
- import {CircularProgressbar} from 'react-circular-progressbar'

#### React Countdown Circle Timer

- React circular progress bar: `npm i react-countdown-circle-timer --save-dev`
- import { CountdownCircleTimer } from 'react-countdown-circle-timer'

#### React Stopwatch Timer

- React stopwatch timer: `npm i react-stopwatch-timer --legacy-peer-deps`
- import ReactStopwatchTimer from 'react-stopwatch-timer';
