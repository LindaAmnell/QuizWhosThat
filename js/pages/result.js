import {
  BackToQuiz,
  BackToStartBtn,
  ResultPage,
  StartScreen,
  ChosePage,
  InputValue,
  StartBtn,
  BackBtnDiv,
  ScoreDiv,
  DeleteHighscore,
  highscoreDiv,
} from "../dom.js";
import { clearPlayerList } from "../service.js";
import { resetGameState } from "../gameController.js";

export function initResultPage() {
  BackToQuiz.addEventListener("click", handleBackToQuiz);
  BackToStartBtn.addEventListener("click", handleBackToStart);
  DeleteHighscore.addEventListener("click", handleDeleteHighscore);
}

function handleBackToQuiz() {
  ResultPage.classList.remove("show");
  ChosePage.classList.add("show");
  highscoreDiv.innerHTML = "";
}

function handleBackToStart() {
  ResultPage.classList.remove("show");
  StartScreen.classList.remove("hide");
  BackBtnDiv.classList.remove("show");
  ScoreDiv.classList.remove("show");

  highscoreDiv.innerHTML = "";
  InputValue.value = "";
  StartBtn.disabled = true;

  resetGameState();
}

function handleDeleteHighscore() {
  clearPlayerList();
  highscoreDiv.innerHTML = "";
}
