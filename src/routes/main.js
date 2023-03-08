const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/cart", mainController.productCart);
<<<<<<< HEAD:src/routes/main.js
router.get("/detail/:id", mainController.detailProduc);
router.get('/register', mainController.register)
=======
router.get("/detail", mainController.detailProduc);
>>>>>>> 74cc9df736ce2b8087c3feff7344d6ad8fc0e6a4:src/router/main.js

module.exports = router;
