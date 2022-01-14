// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const router = express.Router()


//---------middleware---------

const {  projectIdValidation, actionIdValidation } = require('./actions-middlware')

//---------endpoints---------

//[GET] /api/actions

router.get('/', (req, res, next) => {
    Actions.get()
        .then(action => {
            res.json(action)
        })
        .catch(next)
})

//[GET] /api/actions/:id

router.get('/:id', actionIdValidation, (req, res, next) => {
    const { id } = req.params
    Actions.get(id)
        .then(action => {
            res.json(action)
        })
        .catch(next)
})


//[POST] /api/actions

router.post('/', (req, res, next) => {
    const {project_id, description, notes} = req.body
    if (!project_id || !notes || !description) {
        res.status(400).json({
            message: "Description and/or Notes are required fields!"
        })
    } else {
        Actions.insert({project_id, description, notes})
            .then(action => {
                res.status(201).json(action)
            })
            .catch(next)
    }
})

//[PUT] /api/actions/:id

router.put('/:id', actionIdValidation, projectIdValidation, (req, res, next) => {
    const { id } = req.params
    const {project_id, description, notes, completed} = req.body
    if (!project_id || !description || !notes || completed === undefined) {
        res.status(400).json({
            message: "Modified Action missing updated field!"
        })
    } else {
        Actions.update(id, {project_id, description, notes, completed})
            .then(modAction => {
                res.json(modAction)
            })
            .catch(next)
    }
})

//[DELETE] /api/actions/:id

router.delete('/:id', actionIdValidation, (req, res, next) => {
    const { id } = req.params
    Actions.remove(id)
        .then(delAction => {
            if(!delAction){
                res.status(404).json({
                    message: "Selected Action could not be found/deleted!"
                })
            } else{
                res.json(delAction)
            }
        })
        .catch(next)
})

module.exports = router

