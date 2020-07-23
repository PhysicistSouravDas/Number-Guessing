let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// to generate random target number between 0 and 9 (both inclusive)
const generateTarget = () => Math.floor(Math.random() * 10);

// comparing human-guess and computer-guess with target number
const compareGuesses = (humanGuess, compGuess, targetNum) => {
    if (Math.abs(humanGuess - targetNum) <= Math.abs(compGuess - targetNum))  {
        return true;
    } else  {
        return false;
    }
};

// updating score after each round
const updateScore = (winner) => {
    if (winner.toLowerCase() === 'human') {
        humanScore++;
    } else  {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;