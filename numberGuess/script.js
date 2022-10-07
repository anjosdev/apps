let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()*10)
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
  if (userGuess < 0 || userGuess > 9) {
    alert('Your number is out of range!');
  }
  userTargetDifference = Math.abs(secretTarget - userGuess);
  computerTargetDifference = Math.abs(secretTarget - computerGuess);

  if (userTargetDifference <= computerTargetDifference) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  switch (winner) {
    case 'human':
      humanScore++;
    case 'computer':
      computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
