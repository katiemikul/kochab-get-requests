const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/server'));
app.use(express.static('server/public'));


// app.get('/', (req, res) => {
//     res.send();
// });

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.get('/quotes', (req, res) => {
    const randomNumber = Math.floor(Math.random()*quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});

const quotes_data = require('./quotes_data');
