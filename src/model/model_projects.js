import uuid4 from "uuid4"
class modelProjects{
      constructor(){
            this.projects = [
                  {
                        "id": "abc",
                        "name": "My project Node",
                        "description": "My first project",
                        "createdAt": "2025-05-22T14:59:10.894Z",
                        "changedAt": ""
                  }
            ]
      }

      async createNewProject(body){
            const {name, description} = body
            const id = uuid4()
            const createdAt = new Date()
            const changedAt = ''

            const newProject = {id,name,description,createdAt,changedAt}
            this.projects.push(newProject)

            return newProject
      }

      async getAllProjects(){
            return this.projects
      }

      async getProjectById(id){
            const project = this.projects.find(project => project.id === id)
            return project
      }

      async updateProjectById(id, body){
            const {name, description} = body
            const project = this.projects.find(project => project.id === id)
            
            if(!project){return}

            if(name != undefined){project['name'] = name}
            if(description != undefined){project['description'] = description}

            project['changedAt'] = new Date()

            return project
      }

      async deleteProjectById(id){
            const index = this.projects.findIndex(project => project.id === id)
            if(index === -1){
                  return false
            }else{
                  this.projects.slice(index, 1)
                  return true
            }
      }
}

export default new modelProjects()
