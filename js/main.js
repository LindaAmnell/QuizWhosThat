import { initStartPage } from "./pages/StartPage.js";
import { initChoseQuiz } from "./pages/ChoseQuiz.js";
import { initResultPage } from "./pages/Result.js";

function initApp() {
  initStartPage();
  initChoseQuiz();
  initResultPage();
}

document.addEventListener("DOMContentLoaded", initApp);
