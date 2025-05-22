import uuid4 from "uuid4"
class modelTasks{
      constructor(){
            this.tasks = []
      }

      async createNewTask(body, projectId){
            const {title} = body
            const done = false
            const taskId = uuid4()
            const createdAt = new Date()
            const changedAt = ''
            const newTask = {taskId,projectId,title,done,createdAt,changedAt}

            this.tasks.push(newTask)

            return newTask
      }
}

export default new modelTasks()
