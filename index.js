import placeholderQuestions from "./placeholder-questions.js";

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
// create event listener that when i click on card it pulls one question specific category variable
// function  check the id if the id says nature run natureCategory else give me category that matches name of id. || this is the first function we call in event listener, second function gives random question from category
function giveRandomQuestion(questionsArr) {
  let maxBound = questionsArr.length - 1;
  let randomIndex = Math.floor(Math.random() * maxBound);
  return questionsArr[randomIndex];
}
const Nature100 = document.getElementById("Nature-100");
Nature100.addEventListener("click", (e) => {
  Nature100.textContent = giveRandomQuestion(natureCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Nature200 = document.getElementById("Nature-200");
Nature200.addEventListener("click", (e) => {
  Nature200.textContent = giveRandomQuestion(natureCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Nature300 = document.getElementById("Nature-300");
Nature300.addEventListener("click", (e) => {
  Nature300.textContent = giveRandomQuestion(natureCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Nature400 = document.getElementById("Nature-400");
Nature400.addEventListener("click", (e) => {
  Nature400.textContent = giveRandomQuestion(natureCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Nature500 = document.getElementById("Nature-500");
Nature500.addEventListener("click", (e) => {
  Nature500.textContent = giveRandomQuestion(natureCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals100 = document.getElementById("Animals-100");
Animals100.addEventListener("click", (e) => {
  Animals100.textContent = giveRandomQuestion(animalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals200 = document.getElementById("Animals-200");
Animals200.addEventListener("click", (e) => {
  Animals200.textContent = giveRandomQuestion(animalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals300 = document.getElementById("Animals-300");
Animals300.addEventListener("click", (e) => {
  Animals300.textContent = giveRandomQuestion(animalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals400 = document.getElementById("Animals-400");
Animals400.addEventListener("click", (e) => {
  Animals400.textContent = giveRandomQuestion(animalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals500 = document.getElementById("Animals-500");
Animals500.addEventListener("click", (e) => {
  Animals500.textContent = giveRandomQuestion(animalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Computers100 = document.getElementById("Computers-100");
Computers100.addEventListener("click", (e) => {
  Computers100.textContent = giveRandomQuestion(computersCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Computers200 = document.getElementById("Computers-200");
Computers200.addEventListener("click", (e) => {
  Computers200.textContent = giveRandomQuestion(computersCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});

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
