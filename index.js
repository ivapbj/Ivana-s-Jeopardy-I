import placeholderQuestions from "./placeholder-questions.js";
console.log(placeholderQuestions);

let guessButton = document.getElementById("guessButton");
let passButton = document.getElementById("passButton");
let nextRoundButton = document.getElementById("nextRound");
const cards = document.getElementById("interact-cards");
let answerText = document.getElementById("answerText");

let finalCategory = placeholderQuestions.filter(
  (question) => question.category === "Final"
);
let natureCategory = placeholderQuestions.filter(
  (question) => question.category === "Nature"
);
let animalCategory = placeholderQuestions.filter(
  (question) => question.category === "Animal"
);
let computersCategory = placeholderQuestions.filter(
  (question) => question.category === "Computers"
);
let mythologyCategory = placeholderQuestions.filter(
  (question) => question.category === "Mythology"
);
let historyCategory = placeholderQuestions.filter(
  (question) => question.category === "History"
);
let generalCategory = placeholderQuestions.filter(
  (question) => question.category === "General"
);

jeopardyQuestions = [
  // Your jeopardy questions array
];

console.log(jeopardyQuestions[0].question);
// Function to handle form submission
document
  .getElementById("answer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const answer = document.getElementById("answer-input").value;
    // Validate and process the answer
    if (validateAnswer(answer)) {
      // Update score
      updateScore(100); // For example, if the answer is correct, add 100 points
      // Clear the input field
      document.getElementById("answer-input").value = "";
      // Optionally, load a new question
      // loadQuestion();
    } else {
      // Handle incorrect answer
      alert("Incorrect answer! Try again.");
    }
  });

function disableButtonsForGuessing() {
  let submitButton = document.querySelector(
    '#answer-form button[type="submit"]'
  );
  let passButton = document.querySelector('.answer-form button[type="button"]');
  let nextRoundButton = document.querySelector(".next-round-button");

  submitButton.disabled = true;
  passButton.disabled = true;
  nextRoundButton.disabled = true;
}
disableButtonsForGuessing();

async function player1Guess() {
  // Your logic here...
}
window.onload = function () {
  document.getElementById("switchPlayers1").textContent =
    "Player 1 Please pick a card";
  guessButton.disabled = true;
  disableButtons();
};
export default placeholderQuestions;
