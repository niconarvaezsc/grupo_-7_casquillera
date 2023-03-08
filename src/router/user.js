const express = require('express');
const router = express.Router();

//configuracion muller
const multer = require('multer');
const path = require('path');

const {body} = require('express-validator');

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.resolve(__dirname, '../public/img/avatar'));
    }, 
    filename : (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const uploadFile = multer ({ storage });

//router
const userController = require('../controllers/userController');

const validacion = [
    body('nombreCompleto').notEmpty().withMessage('ingresa un nombre'),
    body('contrasenia').notEmpty().withMessage('ingresa una contraseña'),
    body('confirmaContrasenia').notEmpty().withMessage('ingresa una contraseña'),
    body('email').notEmpty().withMessage('ingresa un email').bail().isEmail().withMessage('Ingresa un formato de correo válido'),
    body('confirmaEmail').notEmpty().withMessage('ingresa un email'),
]

router.get('/register', userController.register);
router.post('/register', uploadFile.single('avatar'), validacion, userController.procesoRegistro);

module.exports = router;