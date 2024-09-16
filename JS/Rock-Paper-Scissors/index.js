const choices = ["rock", "paper", "scissors"];
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let pScore = 0;
let cScore = 0;

function playGame(pChoice){
    const cChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(pChoice === cChoice){
        result = "TIE!";
    }
    else{
        switch(pChoice){
            case "rock":
                if(cChoice === "scissors")
                    result = "YOU WIN!";
                else
                    result = "YOU LOSE!";
                break;
            case "paper":
                if(cChoice === "rock")
                    result = "YOU WIN!";
                else
                    result = "YOU LOSE!";
                break;
            case "scissors":
                if(cChoice === "paper")
                    result = "YOU WIN!";
                else
                    result = "YOU LOSE!";
                break;
        }
    }
   playersChoice.textContent = `You: ${pChoice}`;
   computersChoice.textContent = `Computer: ${cChoice}`;
   resultDisplay.textContent = result;

   resultDisplay.classList.remove("redText", "greenText");

   switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        pScore++;
        playerScore.textContent = pScore;
        break;
    case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        cScore++;
        computerScore.textContent = cScore;
        break;
   }
}
