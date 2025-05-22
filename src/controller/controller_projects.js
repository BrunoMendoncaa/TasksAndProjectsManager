import modelProjects from '../model/model_projects.js'

class controllerProjects{
      async createNewProject(req, res){
            const newProject = await modelProjects.createNewProject(req.body)
            return res.status(201).json(newProject)
      }

      async getAllProjects(req, res){
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

      async updateProjectById(req,res){
            const project = await modelProjects.updateProjectById(req.params.id, req.body)
            
            if(!project){return res.status(404).json({'Message': 'Projeto não localizado'})}
      
            return res.status(200).json(project)
      }

      async deleteProjectById(req, res){
            const finded = await modelProjects.deleteProjectById(req.params.id)
            if(!finded){return res.status(404).json({'Message':'Projeto não localizado'})}
            
            return res.status(200).send('ok')
      }

}

export default new controllerProjects
