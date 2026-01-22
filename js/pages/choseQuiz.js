import { getQuizzesFromStorage } from "../service.js";

import {
  StartScreen,
  ChosePage,
  quizDiv,
  PlayQuizPage,
  BackBtn,
  BackBtnDiv,
  ScoreDiv,
} from "../dom.js";

import { startGame } from "../gameController.js";

export function initChoseQuiz() {
  BackBtn.addEventListener("click", handleBackToStart);
  quizDiv.addEventListener("click", handleQuizSelect);
}

function handleBackToStart() {
  ChosePage.classList.remove("show");
  StartScreen.classList.remove("hide");
  BackBtnDiv.classList.remove("show");
}

function handleQuizSelect(event) {
  const button = event.target.closest(".quiz-btn");
  if (!button) return;

  const quizId = button.dataset.id;
  const quizzes = getQuizzesFromStorage();
  const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
  if (!selectedQuiz) return;

  ChosePage.classList.remove("show");
  PlayQuizPage.classList.add("show");
  BackBtnDiv.classList.remove("show");
  ScoreDiv.classList.add("show");
  startGame(selectedQuiz);
}
