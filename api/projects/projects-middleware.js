// add middlewares here related to project
const Projects = require('./projects-model')

function logger(req, res, next) {
    const timeStamp = new Date().toLocaleTimeString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timeStamp}] ${method} to ${url}`)
    next()
}

function idValidation(req, res, next ) {
    Projects.get(req.params.id)
        .then(id => {
            if(!id) {
                next({status: 404, message: "Id Not Found"})
            } else {
                next()
            }
        })
        .catch(next())
}
module.exports= {
    logger,
    idValidation
}