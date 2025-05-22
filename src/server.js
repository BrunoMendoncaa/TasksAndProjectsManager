import express from 'express'

import routerProjects from './router/router_projects.js'
import routerTasks from './router/router_tasks.js'

const app = express()

app.use(express.json())

app.use(routerProjects)
app.use(routerTasks)

export default app