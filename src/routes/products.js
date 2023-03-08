// ************ Require's ************
const express = require('express');
//const multer = require('multer');
const path = require('path');
const router = express.Router();

 /*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage }); */

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

module.exports = router;