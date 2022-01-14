const express = require('express');
const server = express();


server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h1>Unit 4, Sprint 1: It do be workin'</h1>`)
})


module.exports = server;
