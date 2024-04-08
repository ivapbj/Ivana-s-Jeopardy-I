import placeholderQuestions from "./placeholder-questions.js";

let nextRoundButton = document.getElementById("nextRound");
let submitAnswer = document.getElementById("testButton");

let natureCategory = placeholderQuestions.filter(
  (question) => question.category === "Animals"
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
  console.log(questionsArr[randomIndex]);
  return questionsArr[randomIndex];
}
const Nature100 = document.getElementById("Nature-100");
Nature100.addEventListener("click", (e) => {
  let natureIndex = giveRandomQuestion(natureCategory);
  Nature100.textContent = natureIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", natureIndex.answer);
});
const Nature200 = document.getElementById("Nature-200");
Nature200.addEventListener("click", (e) => {
  let natureIndex = giveRandomQuestion(natureCategory);
  Nature200.textContent = natureIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", natureIndex.answer);
  //comapre the value to this data-answer-1
});
const Nature300 = document.getElementById("Nature-300");
Nature300.addEventListener("click", (e) => {
  let natureIndex = giveRandomQuestion(natureCategory);
  Nature300.textContent = natureIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", natureIndex.answer);
  //comapre the value to this data-answer-1
});
const Nature400 = document.getElementById("Nature-400");
Nature400.addEventListener("click", (e) => {
  let natureIndex = giveRandomQuestion(natureCategory);
  Nature400.textContent = natureIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", natureIndex.answer);
  //comapre the value to this data-answer-1
});
const Nature500 = document.getElementById("Nature-500");
Nature500.addEventListener("click", (e) => {
  let natureIndex = giveRandomQuestion(natureCategory);
  Nature500.textContent = natureIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", natureIndex.answer);
  //comapre the value to this data-answer-1
});
const Animals100 = document.getElementById("Animals-100");
Animals100.addEventListener("click", (e) => {
  let animalsIndex = giveRandomQuestion(animalsCategory);
  Animals100.textContent = animalsIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", animalsIndex.answer);
  //comapre the value to this data-answer-1
});
const Animals200 = document.getElementById("Animals-200");
Animals200.addEventListener("click", (e) => {
  let animalsIndex = giveRandomQuestion(animalsCategory);
  Animals200.textContent = animalsIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", animalsIndex.answer);
  //comapre the value to this data-answer-1
});
const Animals300 = document.getElementById("Animals-300");
Animals300.addEventListener("click", (e) => {
  let animalsIndex = giveRandomQuestion(animalsCategory);
  Animals300.textContent = animalsIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", animalsIndex.answer);
  //comapre the value to this data-answer-1
});
const Animals400 = document.getElementById("Animals-400");
Animals400.addEventListener("click", (e) => {
  let animalsIndex = giveRandomQuestion(animalsCategory);
  Animals400.textContent = animalsIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", animalsIndex.answer);
  //comapre the value to this data-answer-1
});
const Animals500 = document.getElementById("Animals-500");
Animals500.addEventListener("click", (e) => {
  let animalsIndex = giveRandomQuestion(animalsCategory);
  Animals500.textContent = animalsIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", animalsIndex.answer);
  //comapre the value to this data-answer-1
});
const Computers100 = document.getElementById("Computers-100");
Computers100.addEventListener("click", (e) => {
  let computersIndex = giveRandomQuestion(computersCategory);
  Computers100.textContent = computersIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Computers200 = document.getElementById("Computers-200");
Computers200.addEventListener("click", (e) => {
  let computersIndex = giveRandomQuestion(computersCategory);
  Computers200.textContent = computersIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Computers300 = document.getElementById("Computers-300");
Computers300.addEventListener("click", (e) => {
  let computersIndex = giveRandomQuestion(computersCategory);
  Computers300.textContent = computersIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Computers400 = document.getElementById("Computers-400");
Computers400.addEventListener("click", (e) => {
  let computersIndex = giveRandomQuestion(computersCategory);
  Computers400.textContent = computersIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Computers500 = document.getElementById("Computers-500");
Computers500.addEventListener("click", (e) => {
  let computersIndex = giveRandomQuestion(computersCategory);
  Computers500.textContent = computersIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Mythology100 = document.getElementById("Mythology-100");
Mythology100.addEventListener("click", (e) => {
  let mythologyIndex = giveRandomQuestion(mythologyCategory);
  Mythology100.textContent = mythologyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Mythology200 = document.getElementById("Mythology-200");
Mythology200.addEventListener("click", (e) => {
  let mythologyIndex = giveRandomQuestion(mythologyCategory);
  Mythology200.textContent = mythologyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Mythology300 = document.getElementById("Mythology-300");
Mythology300.addEventListener("click", (e) => {
  let mythologyIndex = giveRandomQuestion(mythologyCategory);
  Mythology300.textContent = mythologyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Mythology400 = document.getElementById("Mythology-400");
Mythology400.addEventListener("click", (e) => {
  let mythologyIndex = giveRandomQuestion(mythologyCategory);
  Mythology400.textContent = mythologyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const Mythology500 = document.getElementById("Mythology-500");
Mythology500.addEventListener("click", (e) => {
  let mythologyIndex = giveRandomQuestion(mythologyCategory);
  Mythology500.textContent = mythologyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", computersIndex.answer);
  //comapre the value to this data-answer-1
});
const History100 = document.getElementById("History-100");
History100.addEventListener("click", (e) => {
  let historyIndex = giveRandomQuestion(historyCategory);
  History100.textContent = historyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", historyIndex.answer);
  //comapre the value to this data-answer-1
});
const History200 = document.getElementById("History-200");
History200.addEventListener("click", (e) => {
  let historyIndex = giveRandomQuestion(historyCategory);
  History200.textContent = historyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", historyIndex.answer);
  //comapre the value to this data-answer-1
});
const History300 = document.getElementById("History-300");
History300.addEventListener("click", (e) => {
  let historyIndex = giveRandomQuestion(historyCategory);
  History300.textContent = historyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", historyIndex.answer);
  //comapre the value to this data-answer-1
});
const History400 = document.getElementById("History-400");
History400.addEventListener("click", (e) => {
  let historyIndex = giveRandomQuestion(historyCategory);
  History400.textContent = historyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", historyIndex.answer);
  //comapre the value to this data-answer-1
});
const History500 = document.getElementById("History-500");
History500.addEventListener("click", (e) => {
  let historyIndex = giveRandomQuestion(historyCategory);
  History500.textContent = historyIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", historyIndex.answer);
  //comapre the value to this data-answer-1
});
const General100 = document.getElementById("General-100");
General100.addEventListener("click", (e) => {
  let generalIndex = giveRandomQuestion(historyCategory);
  General100.textContent = generalIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", generalIndex.answer);
  //comapre the value to this data-answer-1
});
const General200 = document.getElementById("General-200");
General200.addEventListener("click", (e) => {
  let generalIndex = giveRandomQuestion(historyCategory);
  General200.textContent = generalIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", generalIndex.answer);
  //comapre the value to this data-answer-1
});
const General300 = document.getElementById("General-300");
General300.addEventListener("click", (e) => {
  let generalIndex = giveRandomQuestion(generalCategory);
  General300.textContent = generalIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", generalIndex.answer);
  //comapre the value to this data-answer-1
});
const General400 = document.getElementById("General-400");
General400.addEventListener("click", (e) => {
  let generalIndex = giveRandomQuestion(generalCategory);
  General400.textContent = generalIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", generalIndex.answer);
  //comapre the value to this data-answer-1
});
const General500 = document.getElementById("General-500");
General500.addEventListener("click", (e) => {
  let generalIndex = giveRandomQuestion(generalCategory);
  General500.textContent = generalIndex.question;
  enableButtonsForGuessing();
  submitAnswerButton.setAttribute("data-answer-1", generalIndex.answer);
});
function enableButtonsForGuessing() {
  testButton.disabled = false;
  passButton.disabled = false;
  nextRoundButton.disabled = false;
  finalRoundButton.disabled = false;
}

function player1Turn() {
  alert("Player 1 Turn");
  // Call the function for Player 2 turn after a delay (e.g., 3 seconds)
  setTimeout(player2Turn, 3000);
}

// Function to show alert for Player 2
function player2Turn() {
  alert("Player 2 Turn");
  // Call the function for Player 1 turn after a delay (e.g., 3 seconds)
  setTimeout(player1Turn, 3000);
}

// Wait for the page to finish loading
window.addEventListener("load", function () {
  // Call the function for Player 1 turn when the page loads
  player1Turn();
});
export default placeholderQuestions;
