let guessButton = document.getElementById("guess-Button");
let passButton= document.getElementById("pass-Button");
let nextRound = document.getElementById("next-Round");
const cards = document.getElementById('interact-cards')
let answerText = document.getElementById('answerText')


async function showTurnNotification(){
  let notificationDiv = document.getElementById('turnNotification');
  if(currentPlayer === 1){
    notificationDiv.innerHTML(`It's Player 1's turn to choose!`);
  }else(
  console.log(`Player 2's turn to choose!`))
};

showTurnNotification();


answers = {
  sports: {
    card100:""
    card200:""
    card300:''
    card400:''
    card500:''
  }
}
window.onload = function(){
  document.getElementById('switchPlayers1').textContent = "Player 1 Please pick a card";
  guessButton.diabled = true;
  document.getElementById('pass-Button').disabled = true;
  document.getElementById('next-Round').diabled = true;
}


<button id="betButton" onclick="placeBet()" disabled>Bet</button>
<button id="guessButton" onclick="makeGuess()" disabled>Guess</button>
function enableButtons() {
  //if questions not answered button disabled
  //else enable the buttons
  document.getElementById("betButton").disabled = false;
  document.getElementById("guessButton").disabled = false;
}

function placeBet() {
  // Your bet logic here
}ew4

function makeGuess() {
  // Your guess logic here
}

document.getElementById("answerSelect").addEventListener("change", enableButtons);


update .textContent