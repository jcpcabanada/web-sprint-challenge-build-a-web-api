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

})


//[POST] /api/actions

router.post('/', (req, res, next) => {
    // Actions.verb()
    //     .then()
    //     .catch()
})

//[PUT] /api/actions/:id

router.put('/:id', actionIdValidation, projectIdValidation, (req, res, next) => {
    // Actions.verb()
    //     .then()
    //     .catch()
})

//[DELETE] /api/actions/:id

router.delete('/:id', actionIdValidation, (req, res, next) => {
    // Actions.verb()
    //     .then()
    //     .catch()
})

module.exports = router

