'use strict';
// Generate a random number to be guessed
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;

// Set what happens after clicking on 'Check'
document.querySelector('.btn-check').addEventListener('click', function() {
    const guess = document.querySelector('.input').value;
    // If there is no input
    if (!guess) {
        document.querySelector('.message').textContent = "!!Enter a number!!";
    } 
    // If guess is right
    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "WOOHOO! You Won!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#8be468";
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
    } 
    // If guess is wrong
    else if (guess != secretNumber) {
        if (score > 1) {
            // Update the message according to guess
            document.querySelector('.message').textContent = guess > secretNumber ? "Too High!" : "Too Low!"; // Ternary Operator
            score--; 
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost!";
            document.querySelector('.score').textContent = 0;
        }
    }
    }
);

// Set what happens after clicking on 'Again'
document.querySelector('.btn-again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20+1);    
    document.querySelector('body').style.backgroundColor = 'rgb(24, 23, 23)';
    score = 20;
    document.querySelector('.score').textContent = "20";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.input').value = "";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').style.width = '15rem';

})
