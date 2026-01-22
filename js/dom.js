//sections
const StartScreen = document.querySelector(".start-page");
const ChosePage = document.querySelector(".choseQuiz-page");
const PlayQuizPage = document.querySelector(".quiz-page");
const ResultPage = document.querySelector(".result-page");
const BackBtnDiv = document.querySelector(".backBtn-div");
const ScoreDiv = document.querySelector(".score-div");
const quizDiv = document.querySelector("#quiz");
const NameInfo = document.querySelector(".nameInfo");
const ScoreInfo = document.querySelector(".scoreInfo");
const PlayerHighscore = document.querySelector(".highscore-section");
const answerContainer = document.querySelector(".btn-section");
const quizTitle = document.querySelector(".quiz-name");
const quizText = document.querySelector(".quiz-text");
const TimerValue = document.querySelector("#timer-value");
const highscoreDiv = document.querySelector(".higscore");

//buttons
const BackBtn = document.querySelector("#back-btn");
const StartBtn = document.querySelector("#start-btn");
const BackToStartBtn = document.querySelector("#goTo-startPage-btn");
const BackToQuiz = document.querySelector("#goTo-quizPage-btn");
const DeleteHighscore = document.querySelector("#deleteHighscore");

// Inputs
const InputValue = document.querySelector("#player-input");
const validationText = document.querySelector(".validation");

export {
  StartBtn,
  StartScreen,
  ChosePage,
  BackBtn,
  PlayQuizPage,
  ResultPage,
  BackToStartBtn,
  BackToQuiz,
  BackBtnDiv,
  ScoreDiv,
  quizDiv,
  ScoreInfo,
  NameInfo,
  InputValue,
  PlayerHighscore,
  validationText,
  answerContainer,
  quizTitle,
  quizText,
  TimerValue,
  highscoreDiv,
  DeleteHighscore,
};
