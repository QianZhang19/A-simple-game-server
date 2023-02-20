const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const name = req.body.player1;
    req.app.locals.name = name
    res.redirect('/game');
})

router.get('/', (req, res) => {
    res.render('game', {
        name: req.app.locals.name
    });
})

module.exports = router;



