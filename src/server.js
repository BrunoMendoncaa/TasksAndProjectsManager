import express from 'express'

import routerProjects from './router/router_projects.js'

const app = express()

app.use(express.json())

app.use(routerProjects)

export default app