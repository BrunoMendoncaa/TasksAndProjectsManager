import uuid4 from "uuid4"
class modelTasks{
      constructor(){
            this.tasks = [{
                  "taskId": "meuid123",
                  "projectId": "abc",
                  "title": "novo titulo",
                  "done": true,
                  "createdAt": "2025-05-22T19:56:23.258Z",
                  "changedAt": "2025-05-22T19:56:37.121Z"
            }]
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

      async getAllTasksByProjectId(projectId){
            const tasks = await this.tasks.filter(
                  task => task.projectId === projectId
            )

            return tasks
      }

      async updateTaskById(taskId, body){
            const {title, done} = body

            const task = await this.tasks.find(task => task.taskId == taskId)
            if(task){
                  if(title != undefined){task['title'] = title}
                  if(done != undefined){task['done'] = done}
                  task['changedAt'] = new Date()
            }

            return task
      }

      async deleteTaskByTaskId(taskId){
            
            const index = this.tasks.findIndex(task => task.taskId === taskId)
            if(index === -1){
                  return false
            }else{
                  this.tasks = this.tasks.filter(
                        task => task.taskId != taskId
                  )
                  return true
            }
      }


      async getAllTasks(){
            return this.tasks
      }
}

export default new modelTasks()
