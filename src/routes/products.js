// ************ Require's ************
const express = require('express');
const path = require('path');
const router = express.Router();

 

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const upload = require ('../middlewares/multerMiddleware');


router.get('/', productsController.index);

router.get('/create', productsController.crear);

router.post('/create', upload.single('imgFile'), productsController.guardar);

router.get('/:id', productsController.detail);

router.get('/edit/:id', productsController.editar);

router.put('/edit/:id', upload.single('imgFile'), productsController.actualizar);

router.delete('/delete/:id', productsController.destruir);

module.exports = router;