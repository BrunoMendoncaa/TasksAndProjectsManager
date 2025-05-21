import controllerProjects from '../controller/controller_projects.js'
import { validateProjectBody } from '../middlewares/middlewares_projects.js'
import { Router } from 'express'

const routerProjects = Router()

//POST
routerProjects.post('/projects', validateProjectBody, controllerProjects.createNewProject)

//GET
routerProjects.get('/projects',controllerProjects.getAllProjects)
routerProjects.get('/projects/:id', controllerProjects.getProjectById)

//PUT
routerProjects.put('/projects/:id', controllerProjects.updateProjectById)
export default routerProjects
