export function validateProjectBody(req, res, next){
      const logMessage = `Method [${req.method}] | Endepoint [${req.url}]`
      console.log(logMessage)
      
      const {name, description} = req.body

      if(!name || name.trim() == ''){
            return res.status(400).json({'message':'Name é um argumento obrigatorio'})
      }

      if(!description || description.trim() == ''){
            return res.status(400).json({'message':'Description é um argumento obrigatorio'})
      }

      next()
}