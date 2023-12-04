function getComputerChoice() {
    var numberItem = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return (numberItem == 1) ? 'Rock' : (numberItem == 2) ? 'Paper' : 'Scizzors'
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return (playerSelection == 'rock' && computerSelection == 'scizzors' || playerSelection == 'scizzor' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') ? 'YOU WIN!' : (playerSelection == computerSelection) ? 'TIE! NEXT ROUND!\n' + game() : 'YOU LOSE!';
};

function game() {
    for (var i = 0; i < 5; i++) {
        var playerSelection = prompt("CHOOSE! ROCK, PAPER, OR SCIZZORS!\n");
        return playRound(playerSelection, getComputerChoice());
    }
}

game();