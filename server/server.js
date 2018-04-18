const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/server'));

app.get('/', (req, res) => {
    res.send('Happy Wednesday!');
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});