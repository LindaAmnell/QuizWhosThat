import { renderQuiz, renderScoreList } from "./render.js";
import {
  getPlayerName,
  savePlayerScoreList,
  getPlayerScoreList,
} from "./service.js";
import { startTimer, stopTimer, getElapsedTime } from "./timer.js";
import {
  ScoreInfo,
  NameInfo,
  highscoreDiv,
  PlayQuizPage,
  ResultPage,
  ScoreDiv,
} from "./dom.js";

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let correctAnswerIndex = null;

let highScoreList = getPlayerScoreList();

function startGame(quiz) {
  currentQuiz = quiz;
  currentQuestionIndex = 0;
  score = 0;
  correctAnswerIndex = null;

  NameInfo.innerText = getPlayerName();
  startTimer();
  showCurrentQuestion();
}

function showCurrentQuestion() {
  const question = currentQuiz.questions[currentQuestionIndex];
  correctAnswerIndex = question.correctAnswer;

  ScoreInfo.innerText = `${score} / ${currentQuiz.questions.length}`;
  renderQuiz(currentQuiz.title, question.clue, question.options);
}

function answerQuestion(selectedIndex) {
  if (selectedIndex === correctAnswerIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.questions.length) {
    showCurrentQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  stopTimer();

  const newHighScore = {
    name: getPlayerName(),
    score,
    time: getElapsedTime(),
  };

  highScoreList.push(newHighScore);
  savePlayerScoreList(highScoreList);
  PlayQuizPage.classList.remove("show");
  ResultPage.classList.add("show");
  ScoreDiv.classList.remove("show");
  renderScoreList(highScoreList, highscoreDiv);
}

function resetGameState() {
  currentQuiz = null;
  currentQuestionIndex = 0;
  score = 0;
  correctAnswerIndex = null;
}

//click

PlayQuizPage.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-btn");
  if (!button) return;

  const selectedIndex = Number(button.dataset.index);
  const buttons = PlayQuizPage.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === correctAnswerIndex) {
    button.classList.add("correct-answer");
  } else {
    button.classList.add("wrong-answer");

    buttons.forEach((btn) => {
      if (Number(btn.dataset.index) === correctAnswerIndex) {
        btn.classList.add("correct-answer");
      }
    });
  }
  setTimeout(() => {
    answerQuestion(selectedIndex);
  }, 900);
});

export { startGame, resetGameState };
