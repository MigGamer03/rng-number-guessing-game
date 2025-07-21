let randomNumber;
let attempts;
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const restartButton = document.getElementById('restartButton');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    attemptsDisplay.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
}

function checkGuess() {
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    attempts++;
    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', initializeGame);

initializeGame();
