// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const router = express.Router();

//---------middleware---------

const {logger, idValidation} = require('./projects-middleware')

//---------endpoints---------

//[GET] /api/projects

router.get('/', logger, (req, res, next) => {
    Projects.get()
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

//[GET] /api/projects/:id

router.get('/:id', idValidation, logger, (req, res, next) => {
    const {id} = req.params
    Projects.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({
                    message: "Project Not Found!"
                })
            } else {
                res.json(project)
            }
        })
        .catch()
})

//[POST] /api/projects

router.post('/', logger, (req, res, next) => {
    const {name, description} = req.body

    if (!name || !description) {
        res.status(400).json({
            message: "Name and/or Description are required fields!"
        })
    } else {
        Projects.insert(req.body)
            .then(newProject => {
                res.status(201).json(newProject)
            })
            .catch(next)
    }
})

//[PUT] /api/projects/:id

router.put('/:id', idValidation, logger, (req, res, next) => {
    const { id } = req.params
    const { name, description, completed} = req.body

    if(!name || !description || completed === undefined ) {
        res.status(400).json({
            message: "Name and/or Description not received!"
        })
    } else {
        Projects.update(id, {name, description, completed})
            .then(changes => {
                res.json(changes)
            })
            .catch(next)
    }

})

//[DELETE] /api/projects/:id

router.delete('/:id', idValidation, logger, (req, res, next) => {
    const { id } = req.params
    Projects.remove(id)
        .then(deletedProject => {
            if(!deletedProject){
                res.status(404).json({
                    message: "Project selected could not be deleted/found!"
                })
            } else {
                res.json(deletedProject)
            }
        })
        .catch(next)
})

//[GET] /api/projects/:id/actions

router.get('/:id/actions', idValidation, logger, (req, res, next) => {
    const {id} = req.params
    Projects.getProjectActions(id)
        .then(action => {
            res.json(action)
        })
        .catch(next)
})

module.exports = router;