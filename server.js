const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/taiga-uitest'));
app.get('*', function (req, res) {
    res.sendFile('index.html', { root: '/dist/taiga-uitest' }
    );
});
app.listen(process.env.PORT || 8080);