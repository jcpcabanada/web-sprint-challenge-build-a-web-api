const express = require('express');
const server = express();
const ProjectsRouter = require('./projects/projects-router')

server.use(express.json())
server.use('/api/projects', ProjectsRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Unit 4, Sprint 1: It do be workin'</h1>`)
})


module.exports = server;
