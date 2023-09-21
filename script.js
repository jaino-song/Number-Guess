'use strict';

// Create a random number between 1 and 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Return a warning when there is no number inserted, display Message function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
} 

// Stores the user input number into guess when check button is pressed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No number!');
    }

    // When players wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Set new high score
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            displayMessage('You lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});