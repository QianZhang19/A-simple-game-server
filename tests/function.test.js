const Rps = require("../src/rps");
const Player = require("../src/player.js");
const { expect } = require("chai");

describe(`test functions`, () => {
    it(`Test if the name is successfully logged on`, () => {

        const player = new Player('Qian', 'paper');
        expect(player.name).to.be.equal('Qian')
    })

    it(`Test if the choice is successfully logged on`, () => {
        const player = new Player('Qian', 'paper');
        expect(player.choice).to.be.equal('paper')
    })

    it(`Test if the computer choose one of three options`, () => {
        //arrange
        const rps = new Rps()
        //act
        const expected = rps.computer()
        //assert
        expect(rps.computerChoice).to.be.equal(expected)
    })

    it(`Test if the rps result output the expected result`, () => {
        //arrange
        const rps = new Rps()
        rps.currentPlayer('Qian', 'paper')
        rps.computerChoice = 'paper'
        //act
        const expected = rps.rpsResult()
        //assert
        expect('Game Draw').to.be.equal(expected)
    })
})
