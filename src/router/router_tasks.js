import { Router } from 'express'
import controllerTasks from '../controller/controller_tasks.js'
import {validateRelationalID, validateTaskID, validateTaskBody} from '../middlewares/middlewares_tasks.js'
import {logRouter} from '../middlewares/middlewares_projects.js'

const routerTasks = Router()

//POST
routerTasks.post('/projects/:projectId/tasks', logRouter, validateRelationalID, validateTaskBody, controllerTasks.createNewTask)

//GET
routerTasks.get('/projects/:projectId/tasks', logRouter, validateRelationalID, validateTaskID, controllerTasks.getAllTasksByProjectId)

//PUT
routerTasks.put('/tasks/:taskId', logRouter, controllerTasks.updateTaskById)

//DELETE

export default routerTasks
