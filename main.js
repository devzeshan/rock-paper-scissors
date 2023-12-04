function getComputerChoice() {
    var numberItem = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return (numberItem == 1) ? 'rock' : (numberItem == 2) ? 'paper' : 'scizzors'
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return (playerSelection == 'rock' && computerSelection == 'scizzors' || playerSelection == 'scizzors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') ? 'YOU WIN!' : (playerSelection == computerSelection) ? 'TIE! NEXT ROUND!' : 'YOU LOSE!';
};

function game() {
    for (var i = 1; i <= 5; i++) {
        var playerOpt;
        do {
            playerOpt = prompt("ROUND " + i + "! CHOOSE! ROCK, PAPER, OR SCIZZORS!\n");
            playerOpt = playerOpt.toLowerCase();
        } while (playerOpt !== 'rock' && playerOpt !== 'paper' && playerOpt !== 'scizzors');

        var computerOpt = getComputerChoice();
        console.log(playRound(playerOpt, computerOpt));
    }
}

game();