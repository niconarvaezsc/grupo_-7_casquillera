const { validationResult } = require('express-validator')
const userController = {
    register:(req,res) => {
        res.render('register')
      },

    procesoRegistro : (req, res) => {
        const validaciones = validationResult(req);
        

        if(validaciones.errors.length > 0){
           return res.render('register', {
                errors: validaciones.mapped(),
                dataGuardada : req.body
            })
        }
    }
}

module.exports = userController;