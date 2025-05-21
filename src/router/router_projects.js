import controllerProjects from '../controller/controller_projects.js'
import { validateProjectBody, logRouter, validateProjectID } from '../middlewares/middlewares_projects.js'
import { Router } from 'express'

const routerProjects = Router()

//POST
routerProjects.post('/projects', logRouter, validateProjectBody, controllerProjects.createNewProject)

//GET
routerProjects.get('/projects',logRouter, controllerProjects.getAllProjects)
routerProjects.get('/projects/:id', logRouter, validateProjectID, controllerProjects.getProjectById)

//PUT
routerProjects.put('/projects/:id', logRouter, validateProjectID, controllerProjects.updateProjectById)

//DELETE
routerProjects.delete('/projects/:id', logRouter, validateProjectID, controllerProjects.deleteProjectById)

export default routerProjects
