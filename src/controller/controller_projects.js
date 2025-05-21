import modelProjects from '../model/model_projects.js'
class controllerProjects{
      async createNewProject(req, res){
            const newProject = await modelProjects.createNewProject(req.body)
            return res.status(201).json(newProject)
      }

      async getAllProjects(req, res){
            const logMessage = `Method [${req.method}] | Endepoint [${req.url}]`
            console.log(logMessage)

            const projects = await modelProjects.getAllProjects()
            return res.status(200).json(projects)
      }

      async getProjectById(req, res){
            const project = await modelProjects.getProjectById(req.params.id)
            if(!project){
                  return res.status(404).json({'Message':'Projeto não localizado'})
            }else{
                  return res.status(200).json(project)
            }
      }
}

export default new controllerProjects
