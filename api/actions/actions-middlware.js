// add middlewares here related to actions
const Projects = require('../projects/projects-model')
const Actions = require('../actions/actions-model')

const projectIdValidation = (req, res, next) => {
    const id = req.body.project_id

    Projects.get(id)
        .then(id => {
            if(!id) {
                next({status: 404, message: "Project Not Found"})
            } else {
                next()
            }
        })
        .catch(next)
}

const actionIdValidation = (req, res, next) => {
    Actions.get(req.params.id)
        .then(id => {
            if(!id) {
                next({status: 404, message: "Action Not Found"})
            } else {
                next()
            }
        })
        .catch(next)
}

module.exports = {
    projectIdValidation,
    actionIdValidation
}