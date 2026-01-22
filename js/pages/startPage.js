import {
  StartScreen,
  ChosePage,
  StartBtn,
  BackBtnDiv,
  quizDiv,
  InputValue,
  validationText,
} from "../dom.js";

import {
  getQuizzesFromStorage,
  initializeQuizStorage,
  savePlayerName,
  getPlayerScoreList,
} from "../service.js";

import { renderQuizButtons } from "../render.js";

export function initStartPage() {
  StartBtn.disabled = true;

  InputValue.addEventListener("input", handleNameInput);
  StartBtn.addEventListener("click", handleStartClick);
}

function handleNameInput() {
  const name = InputValue.value.trim();
  const players = getPlayerScoreList();

  const nameExists = players.some(
    (player) => player.name.toLowerCase() === name.toLowerCase(),
  );

  if (name === "") {
    validationText.textContent = "";
    StartBtn.disabled = true;
    return;
  }

  if (name.length > 9) {
    validationText.textContent = "Name is too long (max 9 characters)";
    StartBtn.disabled = true;
    return;
  }

  if (nameExists) {
    validationText.textContent =
      "This name already exists. Please choose another one.";
    StartBtn.disabled = true;
    return;
  }

  validationText.textContent = "";
  StartBtn.disabled = false;
}

function handleStartClick() {
  if (StartBtn.disabled) return;

  StartScreen.classList.add("hide");
  ChosePage.classList.add("show");
  BackBtnDiv.classList.add("show");

  const playerName = InputValue.value.trim();
  savePlayerName(playerName);

  initializeQuizStorage();
  const quizList = getQuizzesFromStorage();

  quizDiv.innerHTML = "";
  renderQuizButtons(quizList, quizDiv);
}
