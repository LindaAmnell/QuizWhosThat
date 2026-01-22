import { initStartPage } from "./pages/startPage.js";
import { initChoseQuiz } from "./pages/choseQuiz.js";
import { initResultPage } from "./pages/result.js";

function initApp() {
  initStartPage();
  initChoseQuiz();
  initResultPage();
}

document.addEventListener("DOMContentLoaded", initApp);
