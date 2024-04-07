import placeholderQuestions from "./placeholder-questions.js";

let guessButton = document.getElementById("guessButton");
let passButton = document.getElementById("passButton");
let nextRoundButton = document.getElementById("nextRound");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
let answerText = document.getElementById("answerText");

let natureCategory = placeholderQuestions.filter(
  (question) => question.category === "Nature"
);
let animalsCategory = placeholderQuestions.filter(
  (question) => question.category === "Animals"
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
let finalCategory = placeholderQuestions.filter(
  (question) => question.category === "Final"
);
// create event listener that when i click on card it pulls one question specific category variable
// function  check the id if the id says nature run natureCategory else give me category that matches name of id. || this is the first function we call in event listener, second function gives random question from category
function giveRandomQuestion(questionsArr) {
  let maxBound = questionsArr.length - 1;
  let randomIndex = Math.floor(Math.random() * maxBound);
  return questionsArr[randomIndex];
}
const final = document.getElementById("final-question");
final.addEventListener("click", (e) => {
  final.textContent = giveRandomQuestion(finalCategory).question;

  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
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
  Animals100.textContent = giveRandomQuestion(animalsCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals200 = document.getElementById("Animals-200");
Animals200.addEventListener("click", (e) => {
  Animals200.textContent = giveRandomQuestion(animalsCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals300 = document.getElementById("Animals-300");
Animals300.addEventListener("click", (e) => {
  Animals300.textContent = giveRandomQuestion(animalsCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals400 = document.getElementById("Animals-400");
Animals400.addEventListener("click", (e) => {
  Animals400.textContent = giveRandomQuestion(animalsCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Animals500 = document.getElementById("Animals-500");
Animals500.addEventListener("click", (e) => {
  Animals500.textContent = giveRandomQuestion(animalsCategory).question;
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
const Computers300 = document.getElementById("Computers-300");
Computers300.addEventListener("click", (e) => {
  Computers300.textContent = giveRandomQuestion(computersCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Computers400 = document.getElementById("Computers-400");
Computers400.addEventListener("click", (e) => {
  Computers400.textContent = giveRandomQuestion(computersCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Computers500 = document.getElementById("Computers-500");
Computers500.addEventListener("click", (e) => {
  Computers500.textContent = giveRandomQuestion(computersCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Mythology100 = document.getElementById("Mythology-100");
Mythology100.addEventListener("click", (e) => {
  Mythology100.textContent = giveRandomQuestion(mythologyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Mythology200 = document.getElementById("Mythology-200");
Mythology200.addEventListener("click", (e) => {
  Mythology200.textContent = giveRandomQuestion(mythologyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Mythology300 = document.getElementById("Mythology-300");
Mythology300.addEventListener("click", (e) => {
  Mythology300.textContent = giveRandomQuestion(mythologyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Mythology400 = document.getElementById("Mythology-400");
Mythology400.addEventListener("click", (e) => {
  Mythology400.textContent = giveRandomQuestion(mythologyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const Mythology500 = document.getElementById("Mythology-500");
Mythology500.addEventListener("click", (e) => {
  Mythology500.textContent = giveRandomQuestion(mythologyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const History100 = document.getElementById("History-100");
History100.addEventListener("click", (e) => {
  History100.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const History200 = document.getElementById("History-200");
History200.addEventListener("click", (e) => {
  History200.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const History300 = document.getElementById("History-300");
History300.addEventListener("click", (e) => {
  History300.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const History400 = document.getElementById("History-400");
History400.addEventListener("click", (e) => {
  History400.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const History500 = document.getElementById("History-500");
History500.addEventListener("click", (e) => {
  History500.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const General100 = document.getElementById("General-100");
General100.addEventListener("click", (e) => {
  General100.textContent = giveRandomQuestion(generalCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const General200 = document.getElementById("General-200");
General200.addEventListener("click", (e) => {
  General200.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const General300 = document.getElementById("General-300");
General300.addEventListener("click", (e) => {
  General300.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const General400 = document.getElementById("General-400");
General400.addEventListener("click", (e) => {
  General400.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
});
const General500 = document.getElementById("General-500");
General500.addEventListener("click", (e) => {
  General500.textContent = giveRandomQuestion(historyCategory).question;
  //if question visible dont let user do another question and allow input form and enable guess and pass buttons.
  if (placeholderQuestions)
});

//function to handle the submission of an answer
function submitAnswer() {
  //grab the user's answer
  const userAnswer = document.getElementById("answer").value.LowerCase();
  // find the correct answer based on the current question displayed
  const correctAnswer = placeholderQuestions.find(
    (q) =>
      q.question.toLowerCase() ===
      document.getElementById("question").innerText.toLowerCase()
  ).answer.toLowerCase;
}
//check if the user's answer  matches the correct answer
if (userAnswer === correctAnswer) {
  alert("Correct Answer");
  //increment the score of the player
  scores[`players${currentPlayer}`] += 1;
  //update the display score
  document.getElementById("player" + currentPlayer + "-score").innerText =
    scores["player" + currentPlayer];
} else {
  //give alert for an incorrect answer
  alert(`Incorrect Answer`);
}

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

let currentPlayer = 1;
let scores = { player1: 0, player2: 0 };

function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  document.getElementById(
    "player-turn"
  ).innerText = `Player ${currentPlayer}'s Turn`;
}
switchPlayer();
window.onload = function () {
  document.getElementById("switchPlayers1").textContent =
    "Player 1 Please pick a card";
  guessButton.disabled = true;
  disableButtons();
};
export default placeholderQuestions;
