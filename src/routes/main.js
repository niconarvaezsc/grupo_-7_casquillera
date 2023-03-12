const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/cart/:id", mainController.productCart);
router.get('/register', mainController.register)

module.exports = router;
