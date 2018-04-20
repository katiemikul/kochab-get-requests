const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

const quotes_data = require('./quotes_data');

// app.get('/', (req, res) => {
//     res.send();
// });

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.post('/all-quotes', (req, res) => {
    console.log(req.body);
    quotes_data.push(req.body);
    res.sendStatus(200);
});

app.get('/quotes', (req, res) => {
    const randomNumber = Math.floor(Math.random()*quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});