const choices = ['rock', 'paper', 'scissor'];
const WIN_SCORE = 2; // First to this score wins the game

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playerScoreEl = document.getElementById('player_score');
const computerScoreEl = document.getElementById('computer_score');
const displayMessage = document.querySelector('#display_message p');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playAgainBtn = document.querySelector('.play_again .button');
const allChoiceBtns = [rockBtn, paperBtn, scissorBtn];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissor') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissor' && computer === 'paper')
  ) return 'win';
  return 'lose';
}

function getEmoji(choice) {
  return { rock: '✊', paper: '✋', scissor: '✌️' }[choice];
}

function disableButtons() {
  allChoiceBtns.forEach(btn => btn.disabled = true);
}

function enableButtons() {
  allChoiceBtns.forEach(btn => btn.disabled = false);
}

function announceWinner(winner) {
  disableButtons();
  if (winner === 'player') {
    displayMessage.textContent = `🏆 You reached ${WIN_SCORE}! You won the game! Click Play Again to restart.`;
    displayMessage.style.color = '#FFD700';
  } else {
    displayMessage.textContent = `💀 Computer reached ${WIN_SCORE}! You lost the game! Click Play Again to restart.`;
    displayMessage.style.color = '#fe4f4f';
  }
}

function playRound(playerChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  const playerEmoji = getEmoji(playerChoice);
  const computerEmoji = getEmoji(computerChoice);

  if (result === 'win') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    displayMessage.textContent = `${playerEmoji} vs ${computerEmoji} — You win this round! 🎉`;
    displayMessage.style.color = '#00f2fe';
  } else if (result === 'lose') {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    displayMessage.textContent = `${playerEmoji} vs ${computerEmoji} — You lose this round! 💀`;
    displayMessage.style.color = '#fe4f4f';
  } else {
    displayMessage.textContent = `${playerEmoji} vs ${computerEmoji} — Draw! 🤝`;
    displayMessage.style.color = 'gold';
  }

  if (playerScore >= WIN_SCORE) {
    gameOver = true;
    announceWinner('player');
  } else if (computerScore >= WIN_SCORE) {
    gameOver = true;
    announceWinner('computer');
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  displayMessage.textContent = 'choose your weapon to start the game';
  displayMessage.style.color = 'gold';
  enableButtons();
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorBtn.addEventListener('click', () => playRound('scissor'));
playAgainBtn.addEventListener('click', resetGame);
