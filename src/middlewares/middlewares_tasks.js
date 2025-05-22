export function validateTaskBody(req, res, next){
      const {title, done} = req.body

      if(!title || title === '' || title === undefined){
            return res.status(400).json({
                  'message': 'title é obrigatorio'
            })
      }

      next()
}

export function validateTaskID(req, res, next){

      next()
}

export async function validateRelationalID(req, res, next){
      const projectID = req.params.projectId

      const endpoint = `http://localhost:3000/projects/${projectID}`
      const response = await fetch(endpoint, {method: 'GET'})
      if(response.status === 404){
            return res.status(400).json({
                  'message': 'O projeto indicado não existe'
            })
      }
      
      next()
}
