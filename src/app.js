const express = require("express");
const path = require("path");
const methodOverride =  require('method-override');


<<<<<<< HEAD
const mainRouter = require("./routes/main");
const productsRouter = require('./routes/products'); // Rutas /products
=======
const mainRouter = require("./router/main");
const userRouter = require('./router/user');
>>>>>>> 74cc9df736ce2b8087c3feff7344d6ad8fc0e6a4


const app = express();


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use("/", mainRouter);
<<<<<<< HEAD
app.use('/products', productsRouter);
=======
app.use('/usuario', userRouter);
>>>>>>> 74cc9df736ce2b8087c3feff7344d6ad8fc0e6a4


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor on puerto http://localhost:" + port);
});


module.exports = app;