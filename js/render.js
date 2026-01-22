import { quizText, quizTitle, answerContainer } from "./dom.js";

//creats Quiz buttons
const renderQuizButtons = (quizzes, container) => {
  container.innerHTML = "";

  quizzes.forEach((quiz) => {
    const button = document.createElement("button");
    button.textContent = quiz.title;
    button.classList.add("quiz-btn");
    button.dataset.id = quiz.id;
    container.appendChild(button);
  });
};

//creats playquiz page
const renderQuiz = (title, text, answers) => {
  quizTitle.innerText = title;
  quizText.innerText = text;

  answerContainer.innerHTML = "";

  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.dataset.index = index;
    answerContainer.appendChild(button);
  });
};

// render highscoreList
const renderScoreList = (playerList, container) => {
  playerList
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.time - b.time;
    })
    .forEach((player, index) => {
      let div = document.createElement("div");
      div.dataset.index = index;
      div.classList.add("player-div");
      container.appendChild(div);

      let pName = document.createElement("p");
      pName.innerText = player.name;
      pName.classList.add("player-name-info");

      let pScore = document.createElement("p");
      pScore.innerText = player.score;

      let Ptime = document.createElement("p");
      Ptime.innerText = `${player.time}s`;
      Ptime.classList.add("time-score");

      div.appendChild(pName);
      div.appendChild(pScore);
      div.appendChild(Ptime);
    });
};

export { renderQuizButtons, renderQuiz, renderScoreList };
