const express = require('express');

const app = express();

app.use(express.static('./dist/TaigaUITest'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/TaigaUITest/'}),
);

app.listen(process.env.PORT || 8080);