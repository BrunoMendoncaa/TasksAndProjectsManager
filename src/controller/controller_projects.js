import modelProjects from '../model/model_projects.js'
class controllerProjects{
      async createNewProject(req, res){
            const newProject = await modelProjects.createNewProject(req.body)
            return res.status(201).json(newProject)
      }
}

export default new controllerProjects
