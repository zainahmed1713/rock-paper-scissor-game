const options = ['Rock', 'Paper', 'Scissors']
const playerScoreContainer = document.querySelector('.player-score');
const computerScoreContainer = document.querySelector('.computer-score');
const rockButton = document.querySelector('#btn1');
const paperButton = document.querySelector('#btn2');
const scissorButton = document.querySelector('#btn3');
const remarksParagraph = document.querySelector('.remarks');
let playerScore = 0;
let computerScore = 0;
let round = 1;
function getComputerChoice() {
    //Generating random number between 0 and 3 
    // which will be used to get index of array
    const randomNumber = Math.floor(Math.random() * 3);
    const randomOption = options[randomNumber];
    return randomOption;
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        remarksParagraph.innerHTML = 'It\'s a Draw!!!';
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        remarksParagraph.innerHTML = 'Computer chose paper and won!!!';
        computerScoreContainer.innerHTML = ++computerScore;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        remarksParagraph.innerHTML = 'Computer chose scissors and lost!!!';
        playerScoreContainer.innerHTML = ++playerScore;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        remarksParagraph.innerHTML = 'Computer chose rock and lost!!!';
        playerScoreContainer.innerHTML = ++playerScore;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        remarksParagraph.innerHTML = 'Computer chose scissors and won!!!';
        computerScoreContainer.innerHTML = ++computerScore;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        remarksParagraph.innerHTML = 'Computer chose rock and won!!!';
        computerScoreContainer.innerHTML = ++computerScore;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        remarksParagraph.innerHTML = 'Computer chose paper and lost!!!';
        playerScoreContainer.innerHTML = ++playerScore;
    }
    else {
        alert('Invalid Input');
    }

    round++;
    if (round === 6) {
        if (playerScore === computerScore) {
            alert("Round Over!\nIt\'s a Draw!!!");
        }
        if (playerScore > computerScore) {
            alert("Round Over!\nYou Won!!!");
        }
        else {
            alert("Round Over!\nYou Lost!!!");
        }
        location.reload();
    }
}
rockButton.addEventListener('click', function () {
    playGame('Rock', getComputerChoice());
});

paperButton.addEventListener('click', function () {
    playGame('Paper', getComputerChoice());
});

scissorButton.addEventListener('click', function () {
    playGame('Scissors', getComputerChoice());
});