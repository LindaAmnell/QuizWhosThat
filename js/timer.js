import { TimerValue } from "./dom.js";

let startTime = null;
let timerInterval = null;

const startTimer = () => {
  startTime = Date.now();

  timerInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    updateTimerDisplay(elapsedSeconds);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

const updateTimerDisplay = (seconds) => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  TimerValue.textContent = `${minutes}:${secs}`;
};

const getElapsedTime = () => {
  return Math.floor((Date.now() - startTime) / 1000);
};

export { startTimer, stopTimer, getElapsedTime };
