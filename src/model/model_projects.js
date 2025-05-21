import uuid4
 from "uuid4"
class modelProjects{
      constructor(){
            this.projects = []
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
}

export default new modelProjects()
