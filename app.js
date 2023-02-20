const express = require("express");
const dotenv = require("dotenv");
const indexRoute = require('./routes/index');
const gameRoute = require('./routes/game');
const resultRoute = require('./routes/result.js');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

let app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/game', gameRoute);
app.use('/result', resultRoute);

port = 3000

const server = app.listen(port, () => {
    console.log(`Rock paper scissors app listening at:http://localhost:${port}`)
});

module.exports = server;






