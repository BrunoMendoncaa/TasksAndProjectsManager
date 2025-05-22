import { Router } from 'express'
import controllerTasks from '../controller/controller_tasks.js'
import {validateTaskBody} from '../middlewares/middlewares_tasks.js'
import {logRouter} from '../middlewares/middlewares_projects.js'

const routerTasks = Router()

//POST
routerTasks.post('/projects/:projectId/tasks', logRouter, validateTaskBody, controllerTasks.createNewTask)

//GET
routerTasks.get('/projects/:projectId/tasks', logRouter, controllerTasks.getAllTasksByProjectId)
routerTasks.get('/tasks', logRouter, controllerTasks.getAllTasks)

//PUT
routerTasks.put('/tasks/:taskId', logRouter, controllerTasks.updateTaskById)

//DELETE
routerTasks.delete('/tasks/:taskId', logRouter, controllerTasks.deleteTaskById)


export default routerTasks
