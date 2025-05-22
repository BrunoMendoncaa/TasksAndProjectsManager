import { Router } from 'express'
import controller_tasks from '../controller/controller_tasks.js'
import {validateRelationalID, validateTaskID, validateTaskBody} from '../middlewares/middlewares_tasks.js'
import {logRouter} from '../middlewares/middlewares_projects.js'

const routerTasks = Router()

//POST
//GET
//PUT
//DELETE

export default routerTasks
