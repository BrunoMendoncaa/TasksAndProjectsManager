import modelTasks from "../model/model_tasks.js"
class controllerTasks{
      async createNewTask(req, res){
            const newTask = await modelTasks.createNewTask(req.body, req.params.projectId)
            return res.status(201).json(newTask)
      }

      async getAllTasksByProjectId(req, res){
            const tasks = await modelTasks.getAllTasksByProjectId(req.params.projectId)
            if(tasks.length === 0){
                  return res.status(404).json({'message': 'Nenhuma task foi localizada'})
            }

            return res.status(200).json(tasks)
      }

      async updateTaskById(req, res){
            const task = await modelTasks.updateTaskById(req.params.taskId, req.body)
            if(task === undefined){
                  return res.status(404).json({'message':'Task não localizada'})
            }

            return res.status(200).json(task)
      }

      async deleteTaskById(req, res){
            const deleted = await modelTasks.deleteTaskByTaskId(req.params.taskId)
            if(!deleted){
                  return res.status(404).json({'message':'Task não localizada'})
            }

            return res.status(200).send('ok')
      }

      async getAllTasks(req, res){
            const tasks = await modelTasks.getAllTasks()
            return res.status(200).json(tasks)

      }
}

export default new controllerTasks
