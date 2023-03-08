// ************ Require's ************
const express = require('express');
const path = require('path');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

module.exports = router;