const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/server'));

app.get('/', (req, res) => {
    res.send('Happy Wednesday!');
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});

const quotes_data = require('./quotes_data');
