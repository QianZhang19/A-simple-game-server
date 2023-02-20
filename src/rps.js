const Player = require('../src/player')

class Rps {
    player;
    computerChoice;
    result;

    constructor() {
        this.player = null;
        this.computerChoice = "";
        this.result = "";
    }

    currentPlayer(name, choice) {
        this.player = new Player(name, choice);
    }

    computer() {
        const computer = Math.floor(Math.random() * 3)

        if (computer === 0) {
            this.computerChoice = 'rock';
        }
        if (computer === 1) {
            this.computerChoice = 'scissors';
        }
        if (computer === 2) {
            this.computerChoice = 'paper';
        }

        return this.computerChoice;
    }

    rpsResult() {

        if (this.player.choice === this.computerChoice) {
            this.result = "Game Draw";
        }
        if (this.player.choice === 'rock' && this.computerChoice === 'scissors') {
            this.result = "You Win";
        }
        if (this.player.choice === 'paper' && this.computerChoice === 'rock') {
            this.result = "You Win";
        }
        if (this.player.choice === 'scissors' && this.computerChoice === 'paper') {
            this.result = "You Win";
        }
        if (this.player.choice === 'rock' && this.computerChoice === 'paper') {
            this.result = "You Lose";
        }
        if (this.player.choice === 'paper' && this.computerChoice === 'scissors') {
            this.result = "You Lose";
        }
        if (this.player.choice === 'scissors' && this.computerChoice === 'rock') {
            this.result = "You Lose";
        }
        return this.result;

    }
}

module.exports = Rps;