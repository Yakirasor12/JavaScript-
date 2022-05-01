'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1)

let highScore = 0;
let score = 20;
// let highScore = Number(document.querySelector('.score').textContent)

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = `No number was entered!`

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `Correct Number!`
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        console.log(highScore, score);
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore') = highScore
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `To High!`
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `You Lost The Game`
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `To Low!`
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `You Lost The Game`
            document.querySelector('.score').textContent = 0;
        }
    }
})


document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';


})