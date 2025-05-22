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
}

export default new controllerTasks
