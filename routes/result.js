const express = require('express');
const router = express.Router();
const Rps = require("../src/rps.js");

router.post('/', (req, res) => {
    const name = req.app.locals.name;
    const choice = req.body.choice;

    req.app.locals.choice = choice;
    const rps = new Rps()
    rps.currentPlayer(name, choice)
    rps.computer()
    const result = rps.rpsResult()

    res.render('result', {
        choice: req.app.locals.choice,
        name: req.app.locals.name,
        result: result,
        computerChoice: rps.computerChoice
    });
})

module.exports = router;


