import modelTasks from "../model/model_tasks.js"
class controllerTasks{
      async createNewTask(req, res){
            const newTask = await modelTasks.createNewTask(req.body, req.params.projectId)
            return res.status(201).json(newTask)
      }
}

export default new controllerTasks
