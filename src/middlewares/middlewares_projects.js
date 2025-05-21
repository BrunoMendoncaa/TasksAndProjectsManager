export function validateProjectBody(req, res, next){
      const {name, description} = req.body

      if(!name || name.trim() == ''){
            return res.status(400).json({'message':'Name é um argumento obrigatorio'})
      }

      if(!description || description.trim() == ''){
            return res.status(400).json({'message':'Description é um argumento obrigatorio'})
      }

      next()
}


export function validateProjectID(req, res, next){
      const id = req.params.id
      if(!id || id.trim === '' || id === undefined || id === 'undefined'){
            return res.status(400).json({'Message':'ID é um parametro obrigatorio'})
      }
      next()
}

export function logRouter(req,res,next){
      const logMessage = `Method [${req.method}] | Endepoint [${req.url}]`
      console.log(logMessage)
      next()
}