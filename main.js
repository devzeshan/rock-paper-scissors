const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    var numberItem = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return (numberItem == 1) ? 'Rock' : (numberItem == 2) ? 'Paper' : 'Scizzors'
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'scizzors' || playerSelection == 'scizzor' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' ) {
        return 'YOU WIN!';
    } else if (playerSelection == computerSelection) {
        return 'TIE! NEXT ROUND!\n' + playRound(playerSelection, getComputerChoice());
    } else {
        return 'YOU LOSE!';
    }
}
   

console.log(playRound(playerSelection, computerSelection));