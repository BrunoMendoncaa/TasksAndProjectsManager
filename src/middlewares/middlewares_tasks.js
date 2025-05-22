export function validateTaskBody(req, res, next){
      const {title, done} = req.body

      if(!title || title === '' || title === undefined){
            return res.status(400).json({
                  'message': 'title é obrigatorio'
            })
      }

      next()
}
