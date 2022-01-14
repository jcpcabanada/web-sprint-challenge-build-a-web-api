// Write your "projects" router here!
const express =  require('express');
const Projects = require('./projects-model');
const router = express.Router();
//---------middleware---------
const { logger, idValidation} = require('./projects-middleware')
//---------endpoints---------

//[GET] /api/projects

router.get('/', logger,(req, res, next) => {
    Projects.get()
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

//[GET] /api/projects/:id

router.get('/:id', idValidation, logger, (req, res, next) => {
    //something
    // Actions.something()
    //     .then()
    //     .catch()
})

//[POST] /api/projects

router.post('/', logger,(req, res, next) => {
    //something
    // Actions.something()
    //     .then()
    //     .catch()
})

//[PUT] /api/projects/:id

router.put('/:id', idValidation, logger,  (req, res, next) => {
    //something
    // Actions.something()
    //     .then()
    //     .catch()
})

//[DELETE] /api/projects/:id

router.delete('/:id', idValidation, logger,  (req, res, next) => {
    //something
    // Actions.something()
    //     .then()
    //     .catch()
})

//[GET] /api/projects/:id/actions

router.get('/:id/actions', idValidation, logger, (req, res, next) => {
    //something
    // Actions.something()
    //     .then()
    //     .catch()
})

module.exports = router;