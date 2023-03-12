// ************ Require's ************
const express = require('express');
const path = require('path');
const router = express.Router();

 

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const upload = require ('../middlewares/multerMiddleware');


router.get('/', productsController.index);

router.get('/detail/create', productsController.crear);

router.post('/detail', upload.single('imgFile'), productsController.guardar);

router.get('/detail/:id', productsController.detail);

router.get('/detail/edit/:id', productsController.editar);

router.put('/detail/edit/:id', upload.single('imgFile'), productsController.actualizar);

router.delete('/detail/delete/:id', productsController.destruir);

module.exports = router;