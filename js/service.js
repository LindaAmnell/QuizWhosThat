import { quizzes } from "../data/quizzes.js";

// quiz
const saveQuizzesToStorage = () => {
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
};

const initializeQuizStorage = () => {
  const storedQuizzes = localStorage.getItem("quizzes");

  if (storedQuizzes === null) {
    saveQuizzesToStorage(quizzes);
  }
};

const getQuizzesFromStorage = () => {
  const storedQuizzes = localStorage.getItem("quizzes");
  return JSON.parse(storedQuizzes);
};

const deletquizList = () => {
  localStorage.removeItem("quizzes");
};

//Player  name
const savePlayerName = (name) => {
  localStorage.setItem("playerName", name);
};

const getPlayerName = () => {
  const playerName = localStorage.getItem("playerName");
  return playerName;
};

const clearPlayerName = () => {
  localStorage.removeItem("playerName");
};

// score
const savePlayerScoreList = (playerList) => {
  localStorage.setItem("highScoreList", JSON.stringify(playerList));
};

const getPlayerScoreList = () => {
  const playerlist = JSON.parse(localStorage.getItem("highScoreList")) || [];
  return playerlist;
};

const clearPlayerList = () => {
  localStorage.setItem("highScoreList", JSON.stringify([]));
};

export {
  initializeQuizStorage,
  getQuizzesFromStorage,
  savePlayerName,
  getPlayerName,
  savePlayerScoreList,
  getPlayerScoreList,
  clearPlayerList,
  clearPlayerName,
  deletquizList,
};
