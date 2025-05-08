const express = require('express');

const server = express();

server.get('/cursos',(req, res) => {
    return res.send('Continue Richard');

})

server.listen(3000)