const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/cart", mainController.productCart);
router.get("/detail", mainController.detailProduc);
router.get('/register', mainController.register)

module.exports = router;
