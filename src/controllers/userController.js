const { validationResult } = require('express-validator')
const Users = require('../models/Users');
const bcryptjs = require('bcryptjs');

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
            });
        }
        let userInDB = Users.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                dataGuardada: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            contrasenia: bcryptjs.hashSync(req.body.constrasenia, 10),
            avatar: req.file.fileName
        }     

        Users.create(req.body);
        return res.send('ok, se guardo el usuario'); 
    }
}

module.exports = userController;