import controllerProjects from '../controller/controller_projects.js'
import { Router } from 'express'

const routerProjects = Router()

//POST
routerProjects.post('/projects', controllerProjects.createNewProject)

export default routerProjects
